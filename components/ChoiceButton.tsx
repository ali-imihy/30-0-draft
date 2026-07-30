import Image from "next/image";
import type { DraftPiece } from "@/types/game";
import TagPill from "./TagPill";

export default function ChoiceButton({
  label,
  piece,
  disabled,
  onChoose,
}: {
  label: string;
  piece: DraftPiece;
  disabled: boolean;
  onChoose: () => void;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onChoose}
      title={piece.description}
      className="group relative overflow-visible rounded-xl border border-neutral-800 bg-neutral-950/80 p-3 text-left transition hover:border-neutral-600 hover:bg-neutral-900 disabled:cursor-not-allowed disabled:opacity-35"
    >
      <div className="flex gap-3">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900">
          <Image
            src={piece.imageSrc}
            alt={piece.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              {label}
            </p>
          </div>

          <h3 className="font-deadlock neon-hover mt-0.5 truncate text-lg font-bold tracking-wide text-white">
            {piece.name}
          </h3>


          <div className="mt-2 flex flex-wrap gap-1.5">
            {piece.tags.slice(0, 3).map((tag) => (
              <TagPill key={tag} tag={tag} />
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-3 w-72 -translate-x-1/2 rounded-xl border border-neutral-700 bg-black/95 p-3 text-left opacity-0 shadow-xl transition group-hover:opacity-100 group-focus-visible:opacity-100">
        <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
          {label}
        </p>

        <p className="mt-1 text-xs leading-relaxed text-neutral-300">
          {piece.description}
        </p>

        <div className="mt-2 flex flex-wrap gap-1.5">
          {piece.tags.map((tag) => (
            <TagPill key={tag} tag={tag} />
          ))}
        </div>
      </div>
    </button>
  );
}