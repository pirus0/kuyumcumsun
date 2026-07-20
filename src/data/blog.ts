export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO, e.g. "2026-07-21"
  content: BlogBlock[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "kuyumcu-web-sitesi-fiyati-neden-sabit",
    title: "Kuyumcu Web Sitesi Ne Kadar Tutar? Neden Teklif Yerine Sabit Fiyat Veriyoruz",
    excerpt:
      "Çoğu dijital ajans 'analiz için bize ulaşın' der, sonra fiyat çıkar. Biz neden öyle çalışmadığımızı anlatıyoruz.",
    date: "2026-07-21",
    content: [
      {
        type: "p",
        text: "Bir kuyumcu web sitesi ya da dijital vitrin kurdurmak isteyen çoğu esnaf aynı süreçle karşılaşır: ajansı arar, 'ihtiyacınızı analiz edelim' cevabını alır, birkaç gün sonra bir teklif gelir. Fiyat, sitenin kapsamına ve ajansın o anki değerlendirmesine göre değişir.",
      },
      {
        type: "p",
        text: "Bu model ajans için esnek, ama kuyumcu için belirsiz: bütçenizi önceden planlayamazsınız, birkaç ajanstan teklif toplamadan karşılaştırma yapamazsınız.",
      },
      {
        type: "h2",
        text: "Biz neden 5 sabit fiyat veriyoruz",
      },
      {
        type: "p",
        text: "Kuyumcumsun'da 5 paket var: Harita Kayıt, Website, Kurumsal Kimlik, Instagram ve Ürün Çekimi. Her birinin fiyatı sitede yazıyor, teklif beklemenize gerek yok. Sebebi basit: sadece kuyumcularla çalıştığımız için her paketin kapsamını önceden netleştirdik — her müşteride yeniden analiz gerekmiyor.",
      },
      {
        type: "list",
        items: [
          "Harita Kayıt Paketi — 3.990 TL",
          "Website Paketi — 8.990 TL",
          "Kurumsal Kimlik Paketi — 5.990 TL",
          "Instagram Paketi — 990 TL",
          "Ürün Çekimi Paketi — 6.990 TL",
        ],
      },
      {
        type: "p",
        text: "İstediğiniz paketleri /hizmetler sayfasında işaretleyip toplamı anında görebilir, tek dokunuşla WhatsApp'tan bize ulaşabilirsiniz.",
      },
    ],
  },
];
