import type { BlogBlock } from "@/data/blog";

export default function BlogContent({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="flex flex-col gap-6">
      {blocks.map((block, i) => {
        if (block.type === "h2") {
          return (
            <h2 key={i} className="text-xl sm:text-2xl font-semibold tracking-tight mt-4">
              {block.text}
            </h2>
          );
        }
        if (block.type === "list") {
          return (
            <ul key={i} className="flex flex-col gap-2 text-fg-dim">
              {block.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="text-[var(--gold-3)] mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="text-fg-dim leading-relaxed">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
