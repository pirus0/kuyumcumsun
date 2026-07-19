import { IconGoldBar, IconTrendUp } from "./icons";

const PRODUCTS = [
  { name: "Alyans, 8 gr", price: "48.744 ₺" },
  { name: "Kolye, 5.2 gr", price: "31.684 ₺" },
  { name: "Bilezik, 14 gr", price: "85.302 ₺" },
];

export default function ProductPreview() {
  return (
    <div className="hairline rounded-xl border border-[var(--line)] bg-bg-raised overflow-hidden">
      <div className="hairline-b flex items-center gap-3 px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-fg-faint/50" />
          <span className="w-2 h-2 rounded-full bg-fg-faint/50" />
          <span className="w-2 h-2 rounded-full bg-fg-faint/50" />
        </div>
        <span className="text-xs text-fg-faint">kuyumcunuzunadi.com</span>
      </div>

      <div className="p-5 sm:p-7">
        <div className="gold-fill inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold">
          <IconGoldBar size={12} />
          24 Ayar Gram ₺6.093,03
          <span className="inline-flex items-center gap-0.5">
            <IconTrendUp size={11} />
            %1,19
          </span>
        </div>

        <p className="text-sm text-fg-dim mt-5 mb-3">Yeni Koleksiyon</p>

        <div className="grid grid-cols-3 gap-3">
          {PRODUCTS.map((p) => (
            <div key={p.name} className="flex flex-col gap-2">
              <div
                className="aspect-square rounded-lg"
                style={{ background: "var(--gold-gradient)", opacity: 0.16 }}
              />
              <div>
                <p className="text-xs text-fg-dim leading-snug">{p.name}</p>
                <p className="text-xs font-semibold text-[var(--gold-3)] mt-0.5">{p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
