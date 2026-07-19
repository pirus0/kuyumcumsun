import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "Kuyumcumsun gizlilik politikası.",
  alternates: { canonical: "/gizlilik" },
};

export default function GizlilikPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-8 py-20">
      <div className="fade-up">
        <span className="text-xs text-fg-dim">Gizlilik</span>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mt-3">
          Gizlilik Politikası
        </h1>
      </div>

      <div className="fade-up delay-1 mt-10 flex flex-col gap-4 text-sm sm:text-base text-fg-dim leading-relaxed">
        <p>Kuyumcumsun olarak ziyaretçilerimizin gizliliğine önem veriyoruz.</p>
        <p>Bu web sitesi, işletmemizi tanıtmak amacıyla hazırlanmıştır.</p>
        <p>
          Web sitesi üzerinden üyelik oluşturulmaz, sipariş alınmaz. Sitedeki
          iletişim formu herhangi bir sunucuda veri depolamaz; doldurduğunuz
          bilgiler yalnızca WhatsApp üzerinden tarafımıza iletilir.
        </p>
        <p>
          Web sitemizi ziyaret ettiğiniz sırada internet altyapısının doğal
          işleyişi gereği bazı teknik bilgiler (IP adresi, tarayıcı türü,
          cihaz bilgileri gibi) sunucu kayıtlarında oluşabilir. Bu bilgiler
          yalnızca web sitesinin güvenli şekilde çalışmasını sağlamak ve
          teknik sorunları gidermek amacıyla kullanılabilir.
        </p>
        <p>
          Web sitemizde yer alan WhatsApp bağlantısı üzerinden bizimle
          iletişime geçmeniz halinde, iletişiminiz WhatsApp&apos;ın kendi
          kullanım koşulları ve gizlilik politikası kapsamında
          yürütülmektedir.
        </p>
        <p>
          Web sitemiz zaman zaman üçüncü taraf internet sitelerine
          bağlantılar içerebilir. Bu sitelerin içeriklerinden veya gizlilik
          uygulamalarından Kuyumcumsun sorumlu değildir.
        </p>
        <p>
          Bilgi güvenliğini sağlamak amacıyla gerekli teknik ve idari
          tedbirler alınmaktadır.
        </p>
        <p>Bu politika, ihtiyaç duyulması halinde güncellenebilir.</p>
      </div>
    </div>
  );
}
