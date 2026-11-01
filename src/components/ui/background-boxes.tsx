"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "@/utils/cn";

// Tailwind color variables added by addVariablesForColors in tailwind.config.ts.
const colors = [
  "--sky-300",
  "--pink-300",
  "--green-300",
  "--yellow-300",
  "--red-300",
  "--purple-300",
  "--blue-300",
  "--indigo-300",
  "--violet-300",
];

// Enough tiles to cover a full-width hero after the skew; the old version drew 15,000.
const COLUMNS = 80;
const ROWS = 56;

/**
 * A skewed grid of tiles that light up in a random color on hover and fade back out.
 * Pure CSS hover (no per-tile animation library), plus a few tiles that light up on
 * their own so touch screens, which have no hover, still see the effect.
 */
export const BoxesCore = ({ className }: { className?: string }) => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const tiles = grid.querySelectorAll<HTMLElement>("[data-tile]");
    const timer = window.setInterval(() => {
      const tile = tiles[Math.floor(Math.random() * tiles.length)];
      tile.classList.add("is-lit");
      window.setTimeout(() => tile.classList.remove("is-lit"), 700);
    }, 450);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_80%)]",
        className
      )}
    >
      <div
        ref={gridRef}
        style={{
          transform: "translate(-50%,-50%) skewX(-48deg) skewY(14deg) scale(0.675) translateZ(0)",
        }}
        className="absolute left-1/2 top-1/2 flex"
      >
        {Array.from({ length: COLUMNS }, (_, i) => (
          <div key={`col${i}`} className="w-16 border-l border-slate-700">
            {Array.from({ length: ROWS }, (_, j) => (
              <div
                key={`tile${j}`}
                data-tile
                // Picked by position, not Math.random(), so server and browser render the same markup.
                style={{ "--tile-color": `var(${colors[(i * 7 + j * 3) % colors.length]})` } as React.CSSProperties}
                className="boxes-tile relative h-8 w-16 border-r border-t border-slate-700"
              >
                {j % 2 === 0 && i % 2 === 0 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="pointer-events-none absolute -left-[22px] -top-[14px] h-6 w-10 stroke-[1px] text-slate-700"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                  </svg>
                ) : null}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
