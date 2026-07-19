import type { Metadata } from "next";
import { WHATSAPP_DISPLAY } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description: "Kişisel Verilerin Korunması Kanunu kapsamında aydınlatma metni.",
  alternates: { canonical: "/kvkk" },
};

export default function KvkkPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-8 py-20">
      <div className="fade-up">
        <span className="text-xs text-fg-dim">KVKK</span>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mt-3">
          KVKK Aydınlatma Metni
        </h1>
      </div>

      <div className="fade-up delay-1 mt-10 flex flex-col gap-8 text-sm sm:text-base text-fg-dim leading-relaxed">
        <section>
          <h2 className="text-fg font-semibold text-lg mb-2">
            1. Veri Sorumlusu
          </h2>
          <p>
            6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;)
            kapsamında, Kuyumcumsun (&quot;Kuyumcumsun&quot;) veri sorumlusu
            sıfatıyla kişisel verilerinizin güvenliğine önem vermektedir.
          </p>
        </section>

        <section>
          <h2 className="text-fg font-semibold text-lg mb-2">
            2. İşlenen Kişisel Veriler
          </h2>
          <p>
            Web sitemiz tanıtım amacıyla hazırlanmıştır. Web sitesi üzerinden
            üyelik veya sipariş alınmamaktadır; sitedeki iletişim formu
            herhangi bir sunucuda veri depolamadan, doldurduğunuz bilgileri
            yalnızca WhatsApp üzerinden tarafımıza iletmenizi sağlar.
          </p>
          <p className="mt-3">
            Web sitemizi ziyaret etmeniz sırasında, internet altyapısının
            doğal işleyişi kapsamında IP adresi, tarayıcı bilgileri ve benzeri
            teknik veriler sunucu kayıtlarında işlenebilir.
          </p>
        </section>

        <section>
          <h2 className="text-fg font-semibold text-lg mb-2">
            3. Kişisel Verilerin İşlenme Amaçları
          </h2>
          <p>Kişisel verileriniz aşağıdaki amaçlarla işlenebilir:</p>
          <ul className="list-disc pl-5 mt-3 flex flex-col gap-1.5">
            <li>Web sitesinin güvenli şekilde çalışmasını sağlamak,</li>
            <li>Teknik sorunları tespit etmek ve gidermek,</li>
            <li>Bilgi güvenliği süreçlerini yürütmek,</li>
            <li>İlgili mevzuattan doğan yükümlülükleri yerine getirmek.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-fg font-semibold text-lg mb-2">
            4. Kişisel Verilerin Aktarılması
          </h2>
          <p>
            Kişisel verileriniz, kanuni yükümlülükler dışında üçüncü
            kişilerle paylaşılmaz.
          </p>
          <p className="mt-3">
            Mevzuatın zorunlu kıldığı durumlarda yetkili kamu kurum ve
            kuruluşları ile paylaşılabilir.
          </p>
        </section>

        <section>
          <h2 className="text-fg font-semibold text-lg mb-2">
            5. Toplama Yöntemi ve Hukuki Sebep
          </h2>
          <p>
            Kişisel verileriniz, web sitesini ziyaret etmeniz sırasında
            elektronik ortamda otomatik yollarla işlenebilir.
          </p>
          <p className="mt-3">
            İşleme faaliyetleri KVKK&apos;nın 5. maddesinde belirtilen hukuki
            sebeplere dayanılarak gerçekleştirilmektedir.
          </p>
        </section>

        <section>
          <h2 className="text-fg font-semibold text-lg mb-2">
            6. KVKK Kapsamındaki Haklarınız
          </h2>
          <p>KVKK&apos;nın 11. maddesi kapsamında;</p>
          <ul className="list-disc pl-5 mt-3 flex flex-col gap-1.5">
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
            <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
            <li>İşleme amacını öğrenme,</li>
            <li>Yanlış veya eksik işlenmiş verilerin düzeltilmesini isteme,</li>
            <li>
              Şartları oluştuğunda silinmesini veya yok edilmesini talep
              etme,
            </li>
            <li>Kanunda öngörülen diğer hakları kullanma</li>
          </ul>
          <p className="mt-3">haklarına sahipsiniz.</p>
          <p className="mt-3">
            Haklarınıza ilişkin taleplerinizi aşağıdaki iletişim bilgileri
            üzerinden tarafımıza iletebilirsiniz.
          </p>
          <div className="mt-5 border border-[var(--line)] rounded-lg p-6 flex flex-col gap-1.5 text-fg">
            <p>
              <span className="text-fg-dim">Marka:</span> Kuyumcumsun
            </p>
            <p>
              <span className="text-fg-dim">E-posta:</span>{" "}
              kuyumcumsun@gmail.com
            </p>
            <p>
              <span className="text-fg-dim">Telefon:</span> {WHATSAPP_DISPLAY}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
