import type { Build, SlotId } from "@/types/game";
import BuildSlot from "./BuildSlot";

const slots: { id: SlotId; label: string }[] = [
  { id: "ability1", label: "Ability 1" },
  { id: "ability2", label: "Ability 2" },
  { id: "ability3", label: "Ability 3" },
  { id: "ultimate", label: "Ultimate" },
  { id: "gun", label: "Gun" },
  { id: "stats", label: "Stats" },
];

export default function BuildBoard({
  build,
  selectedSwapSlot,
  canSelectForSwap = false,
  dispatch,
}: {
  build: Build;
  selectedSwapSlot: SlotId | null;
  canSelectForSwap?: boolean;
  dispatch: React.Dispatch<any>;
}) {
  return (
    <section>
      <h2 className="mb-3 text-xl font-semibold">Your Build</h2>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {slots.map((slot) => (
          <BuildSlot
            key={slot.id}
            slot={slot}
            piece={build[slot.id]}
            selected={selectedSwapSlot === slot.id}
            selectable={canSelectForSwap}
            onClick={() =>
              dispatch({ type: "SELECT_SWAP_SLOT", slot: slot.id })
            }
          />
        ))}
      </div>
    </section>
  );
}