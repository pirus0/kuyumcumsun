"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/data/faq";
import { IconPlus } from "./icons";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="hairline-t">
      {FAQ_ITEMS.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.question} className="hairline-b">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              className="w-full flex items-center justify-between gap-4 py-6 text-left"
              aria-expanded={open}
            >
              <span className="font-medium text-fg">{item.question}</span>
              <IconPlus
                size={18}
                className={`text-fg-faint shrink-0 transition-transform duration-200 ${
                  open ? "rotate-45" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-200 ${
                open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
              }`}
              style={{ display: "grid" }}
            >
              <div className="overflow-hidden">
                <p className="text-sm text-fg-dim leading-relaxed max-w-2xl">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
