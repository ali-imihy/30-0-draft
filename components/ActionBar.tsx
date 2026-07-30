import type { DraftState } from "@/types/game";

export default function ActionBar({
  state,
  dispatch,
  disabled = false,
}: {
  state: DraftState;
  dispatch: React.Dispatch<any>;
  disabled?: boolean;
}) {
  if (state.phase === "start") {
    return (
      <section className="flex justify-center">
        <button
          type="button"
          disabled={disabled}
          onClick={() => dispatch({ type: "START_DRAFT" })}
          className="rounded-2xl bg-white px-8 py-4 text-lg font-bold text-black transition hover:scale-105 hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Start Draft
        </button>
      </section>
    );
  }

  const canSkip = state.phase === "drafting" && state.skipsLeft > 0 && !disabled;

  const canSwap =
    state.phase === "drafting" &&
    state.swapsLeft > 0 &&
    Object.values(state.build).some(Boolean) &&
    !disabled;

  return (
    <section className="flex flex-wrap gap-3">
      <button
        type="button"
        disabled={!canSkip}
        onClick={() => dispatch({ type: "SKIP_HERO" })}
        className="rounded-xl border border-neutral-700 px-4 py-3 font-semibold disabled:cursor-not-allowed disabled:opacity-40"
      >
        Skip: {state.skipsLeft}
      </button>

      {state.phase === "swapping" ? (
        <button
          type="button"
          disabled={disabled}
          onClick={() => dispatch({ type: "CANCEL_SWAP" })}
          className="rounded-xl border border-neutral-700 px-4 py-3 font-semibold disabled:cursor-not-allowed disabled:opacity-40"
        >
          Cancel swap
        </button>
      ) : (
        <button
          type="button"
          disabled={!canSwap}
          onClick={() => dispatch({ type: "ENTER_SWAP_MODE" })}
          className="rounded-xl border border-neutral-700 px-4 py-3 font-semibold disabled:cursor-not-allowed disabled:opacity-40"
        >
          Swap: {state.swapsLeft}
        </button>
      )}
    </section>
  );
}