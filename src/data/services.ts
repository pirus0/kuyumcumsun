export type ExtraItem = {
  label: string;
  price: number;
  recommended?: boolean;
  /** Parça/adet başına ücretlenir; "hepsi dahil" paket indiriminin kapsamı dışında tutulur. */
  perUnit?: boolean;
};

export type Service = {
  slug: string;
  icon: "pin" | "globe" | "palette" | "instagram" | "camera";
  benefit: string;
  title: string;
  tagline: string;
  price: number;
  content: string[];
  extras: ExtraItem[];
  /** Fiyatın altında gösterilen, gelecekteki bir maliyeti şeffafça açıklayan not. */
  note?: string;
};

// Dolar bazında tutuyoruz ki güncel kura göre TL karşılığı yeniden
// hesaplanabilsin — sabit bir TL rakamı zamanla kurdan kopar.
export const ANNUAL_MAINTENANCE_FEE_USD = 24;

export const SERVICES: Service[] = [
  {
    slug: "harita-kayit",
    icon: "pin",
    benefit: "Bulunun",
    title: "Harita Kayıt Paketi",
    tagline: "Kuyumcunuz haritada doğru ve öne çıkan şekilde görünsün.",
    price: 3990,
    content: [
      "Google İşletme Profili kurulumu ve düzenlenmesi",
      "Apple Maps kaydı",
      "Yandex Maps kaydı",
      "İşletme bilgilerinin eksiksiz girilmesi",
      "Telefon, çalışma saatleri ve konum düzenlenmesi",
      "Kuyumcunuza özel işletme açıklaması",
    ],
    extras: [
      { label: "Profesyonel vitrin fotoğrafı çekimi", price: 1490, recommended: true },
      { label: "Google yorumları için QR kod tasarımı", price: 490 },
      { label: "Profesyonel işletme tanıtım videosu", price: 2990 },
    ],
  },
  {
    slug: "website",
    icon: "globe",
    benefit: "Vitrininiz Olsun",
    title: "Website Paketi",
    tagline: "Ürünlerinizi canlı altın fiyatıyla sergileyen bir vitrin.",
    price: 8990,
    content: [
      "Ana sayfa, ürünler ve iletişim sayfaları",
      "Kendi ürünlerinizi ekleyip çıkarabildiğiniz panel",
      "Canlı 24 ayar gram altın kuru şeridi",
      "Ürün fiyatları gram + işçilikten otomatik hesaplanır",
      "WhatsApp yönlendirmesi",
      "Mobil uyumlu tasarım",
      "1 yıllık .com alan adı kaydı",
      "Arama motorlarına uygun teknik yapı",
    ],
    extras: [
      { label: "İngilizce dil desteği", price: 1490 },
      { label: "Genişletilmiş ürün galerisi", price: 990 },
      { label: "Müşteri yorumları bölümü", price: 740, recommended: true },
      { label: "Özel animasyonlar", price: 1490 },
      { label: "Vitrin modu (gece/gündüz teması)", price: 990 },
    ],
    note: `İlk yıl domain ve canlı altın kuru dahildir. İkinci yıldan itibaren yıllık $${ANNUAL_MAINTENANCE_FEE_USD} bakım ücreti uygulanır (domain yenileme + kesintisiz kur akışı).`,
  },
  {
    slug: "kurumsal-kimlik",
    icon: "palette",
    benefit: "Profesyonel Görünün",
    title: "Kurumsal Kimlik Paketi",
    tagline: "Markanız vitrinden Instagram'a kadar aynı kaliteyi yansıtsın.",
    price: 5990,
    content: [
      "Logo tasarımı",
      "Kurumsal renk paleti",
      "Yazı tipi seçimi",
      "Google kapak görseli",
      "WhatsApp profil görseli",
      "Instagram profil görseli",
    ],
    extras: [
      { label: "Kartvizit tasarımı", price: 740, recommended: true },
      { label: "Kartvizit baskısı", price: 990 },
      { label: "Tabela tasarımı", price: 2490 },
      { label: "Ürün etiketi / fiyat kartı tasarımı", price: 990 },
    ],
  },
  {
    slug: "instagram",
    icon: "instagram",
    benefit: "Akıllarda Kalın",
    title: "Instagram Paketi",
    tagline: "Vitrininiz sosyal medyada da parlasın.",
    price: 990,
    content: [
      "Instagram hesap kurulumu",
      "Profil optimizasyonu",
      "Biyografi yazımı",
      "İlk gönderilerin hazırlanması",
      "Hikâye öne çıkan kapakları",
    ],
    extras: [
      { label: "Reels düzenleme", price: 990 },
      { label: "İçerik takvimi", price: 740, recommended: true },
    ],
  },
  {
    slug: "urun-cekimi",
    icon: "camera",
    benefit: "Işığı Doğru Yakalayın",
    title: "Ürün Çekimi Paketi",
    tagline: "Altın ve pırlanta, ışığı doğru yakalayan bir çekimle satar.",
    price: 9990,
    content: [
      "Stüdyoda profesyonel ürün çekimi (makro)",
      "Parlamasız, yansımasız aydınlatma",
      "Beyaz zemin üzerinde vitrin görselleri",
      "Web sitesi ve Instagram için optimize boyutlandırma",
      "15 ürün/parçaya kadar çekim",
    ],
    extras: [
      { label: "Ek ürün başına çekim (parça)", price: 90, perUnit: true },
      { label: "Model üzerinde çekim", price: 1990, recommended: true },
      { label: "Video / Reels çekimi", price: 1490 },
    ],
  },
];
