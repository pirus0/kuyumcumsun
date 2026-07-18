import Glow from "./Glow";
import Reveal from "./Reveal";

export default function LogicSection() {
  return (
    <section className="hairline-t relative overflow-hidden">
      <Glow className="w-[420px] h-[420px] -top-40 left-1/2 -translate-x-1/2" />
      <div className="relative max-w-3xl mx-auto px-6 sm:px-8 py-24 sm:py-32 text-center">
        <Reveal>
          <p className="text-2xl sm:text-3xl font-medium leading-snug tracking-tight text-balance">
            Bir vitrin ışığı doğru açıdan yakalarsa parlar.{" "}
            <span className="text-fg-dim">
              İşletmeniz de dijitalde doğru yerlerde göründüğünde öyle parlar.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
