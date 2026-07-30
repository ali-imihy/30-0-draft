import type { DraftPiece, SlotId } from "@/types/game";
import TagPill from "./TagPill";
import Image from "next/image";

type BuildSlotProps = {
  slot: {
    id: SlotId;
    label: string;
  };
  piece: DraftPiece | null;
  selected?: boolean;
  selectable?: boolean;
  onClick?: () => void;
};

export default function BuildSlot({
  slot,
  piece,
  selected = false,
  selectable = false,
  onClick,
}: BuildSlotProps) {
  const isEmpty = piece === null;

  const className = [
    "min-h-36 rounded-2xl border p-3 text-center transition flex flex-col items-center justify-center",
    selected
      ? "neon-border bg-[rgba(0,255,122,0.08)]"
      : "border-neutral-800 bg-neutral-950",
    selectable && !isEmpty
      ? "cursor-pointer hover:border-neutral-500 hover:bg-neutral-900"
      : "",
    isEmpty ? "border-dashed opacity-70" : "",
  ].join(" ");

  return (
    <button
      type="button"
      onClick={selectable && !isEmpty ? onClick : undefined}
      disabled={!selectable || isEmpty}
      className={className}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
          {slot.label}
        </p>
      </div>

      {piece ? (
        <div className="group relative flex w-full flex-col items-center justify-center gap-3">

        
          <div className="relative h-15 w-15 overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-900">
            <Image
              src={piece.imageSrc}
              alt={piece.name}
              fill
              className="object-cover"
            />
          </div>
                
          <div className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-3 w-64 -translate-x-1/2 rounded-xl border border-neutral-700 bg-black/95 p-3 text-left opacity-0 shadow-xl transition group-hover:opacity-100">
            <p className="font-deadlock text-sm font-bold tracking-wide text-white">
              {piece.name}
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
        </div>
      ) : (
        <div className="mt-5 flex h-20 items-center justify-center rounded-xl border border-dashed border-neutral-800">
          <p className="text-sm text-neutral-500">Empty slot</p>
        </div>
      )}
    </button>
  );
}