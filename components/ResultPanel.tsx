import Image from "next/image";
import type React from "react";
import type { Build, SlotId } from "@/types/game";
import TagPill from "./TagPill";

type ResultPanelProps = {
  build: Build;
  result: {
    score: number;
    record: string;
    canGoPerfect?: boolean;
    archetype?: string;
    verdict?: string;
    strengths?: string[];
    weaknesses?: string[];
  };
  dispatch: React.Dispatch<any>;
};

const SLOTS: { id: SlotId; label: string }[] = [
  { id: "ability1", label: "Ability 1" },
  { id: "ability2", label: "Ability 2" },
  { id: "ability3", label: "Ability 3" },
  { id: "ultimate", label: "Ultimate" },
  { id: "gun", label: "Gun" },
  { id: "stats", label: "Stats" },
];

export default function ResultPanel({
  build,
  result,
  dispatch,
}: ResultPanelProps) {
  return (
    <section className="rounded-3xl border border-neutral-800 bg-black/80 p-5 shadow-2xl">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
          Final Result
        </p>

        <h2 className="font-deadlock neon-text mt-2 text-6xl font-black tracking-wide md:text-7xl">
          {result.record}
          I love you so much baby
        </h2>

        <p className="mt-2 text-sm text-neutral-400">
          Score:{" "}
          <span className="font-semibold text-white">{result.score}/100</span>
        </p>

        {result.archetype && (
          <p className="font-deadlock neon-text-soft mt-3 text-2xl font-bold tracking-wide">
            {result.archetype}
          </p>
        )}

      </div>

      <div className="mt-6">
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
          Final Build
        </h3>

        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SLOTS.map((slot) => {
            const piece = build[slot.id];

            return (
              <div
                key={slot.id}
                className="rounded-2xl border border-neutral-800 bg-neutral-950/80 p-3"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                  {slot.label}
                </p>

                {piece ? (
                  <div className="mt-3 flex gap-3">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900">
                      <Image
                        src={piece.imageSrc}
                        alt={piece.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <h4 className="font-deadlock neon-text-soft truncate text-lg font-bold tracking-wide">
                            {piece.name}
                          </h4>
                          <p className="truncate text-xs text-neutral-500">
                            {piece.heroName}
                          </p>
                        </div>
                      </div>

                      <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-neutral-400">
                        {piece.description}
                      </p>

                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {piece.tags.slice(0, 3).map((tag) => (
                          <TagPill key={tag} tag={tag} />
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="mt-3 text-sm text-neutral-600">Empty slot</p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {(result.strengths?.length || result.weaknesses?.length) && (
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {result.strengths && result.strengths.length > 0 && (
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Why it works
              </h3>

              <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                {result.strengths.map((strength) => (
                  <li key={strength}>• {strength}</li>
                ))}
              </ul>
            </div>
          )}

          {result.weaknesses && result.weaknesses.length > 0 && (
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Weaknesses
              </h3>

              <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                {result.weaknesses.map((weakness) => (
                  <li key={weakness}>• {weakness}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <div className="mt-6 flex justify-center">
        <button
          type="button"
          onClick={() => dispatch({ type: "RESET" })}
          className="rounded-2xl border border-neutral-700 bg-white px-6 py-3 text-sm font-bold text-black transition hover:scale-105 hover:bg-neutral-200"
        >
          Draft Again
        </button>
      </div>
    </section>
  );
}