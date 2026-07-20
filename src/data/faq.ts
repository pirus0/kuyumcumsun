import { ANNUAL_MAINTENANCE_FEE_USD } from "./services";

export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Teslim süreniz ne kadar?",
    answer:
      "İnceleme, planlama ve kurulumun tamamı ortalama 7 iş günü içinde tamamlanır; hazır vitrininizi bu sürede teslim ederiz.",
  },
  {
    question: "Kurulum sırasında sürecin neresinde olduğumu bilir miyim?",
    answer:
      "Elbette. Süreç boyunca WhatsApp'tan bilgilendiriyoruz — hangi aşamada olduğunuzu her zaman bilirsiniz, teslimden önce son hali onayınıza sunuyoruz.",
  },
  {
    question: "Hangi paket bize uygun, karar veremedik?",
    answer:
      "Kararsızsanız kısa bir görüşmeyle — yerinde ya da görüntülü — ihtiyacınızı birlikte netleştirir, en uygun paketi öneririz. WhatsApp'tan yazmanız yeterli.",
  },
  {
    question: "Ek hizmetler bir yukarı satış mı?",
    answer:
      "Hayır. Sadece kuyumcularla çalıştığımız için ihtiyacınızı zaten biliyoruz — listede size gerekmeyecek tek bir şey yok, hepsi gerçekten işinize yarayan seçenekler.",
  },
  {
    question: "Zaten bir Instagram hesabım/web sitem var, yine de yardımcı olur musunuz?",
    answer:
      "Evet. Mevcut durumunuzu değerlendirip size en doğru çözümü öneririz — kimi zaman mevcut hesabınız güçlendirilir, kimi zaman yeniden kurulur.",
  },
  {
    question: "Ürün fotoğrafım yoksa Website Paketi kurulur mu?",
    answer:
      "Evet. Örnek görsellerle başlarız, Ürün Çekimi Paketi'ni istediğiniz zaman ekleyip gerçek fotoğraflarınıza geçebilirsiniz.",
  },
  {
    question: "Birden fazla paket alırsam indirim var mı?",
    answer:
      "Evet. Tüm paketleri ve tüm ek hizmetleri birlikte alırsanız, hizmetler sayfasındaki hesaplayıcı size özel indirimli toplamı otomatik gösterir.",
  },
  {
    question: "Yıllık bakım ücreti neyi kapsıyor?",
    answer: `Website Paketi'nde ilk yıl domain ve canlı altın kuru dahildir. İkinci yıldan itibaren yıllık $${ANNUAL_MAINTENANCE_FEE_USD} bakım ücreti domain yenilemeyi ve kur verisinin kesintisiz akmasını kapsar.`,
  },
];
