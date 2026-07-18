const TRUNCGIL_URL = "https://finans.truncgil.com/today.json";

// Sunucu tarafında Next.js Data Cache ile önbelleklenir: bu fonksiyon her
// istekte çağrılsa bile Truncgil'e gerçek ağ isteği en fazla revalidate
// süresinde bir kez gider, ziyaretçi sayısından bağımsız.
const REVALIDATE_SECONDS = 90;

export type GoldPrice = {
  buy: number;
  sell: number;
  changePercent: number;
  updatedAt: string;
};

function parseTRNumber(value: string): number {
  return parseFloat(value.replace(/\./g, "").replace(",", "."));
}

function parseTRPercent(value: string): number {
  return parseFloat(value.replace("%", "").replace(",", "."));
}

export async function getGoldPrice(): Promise<GoldPrice | null> {
  try {
    const res = await fetch(TRUNCGIL_URL, {
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return null;

    const data = await res.json();
    const gram = data["gram-altin"];
    if (!gram?.Alış || !gram?.Satış) return null;

    return {
      buy: parseTRNumber(gram["Alış"]),
      sell: parseTRNumber(gram["Satış"]),
      changePercent: parseTRPercent(gram["Değişim"] ?? "0"),
      updatedAt: data["Update_Date"] ?? "",
    };
  } catch {
    return null;
  }
}
