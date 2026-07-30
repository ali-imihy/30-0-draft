import { scoreBuild } from "@/lib/scoring";

export default function ResultPanel({ state, dispatch }: any) {
  const result = scoreBuild(state.build);

  return (
    <main className="min-h-screen px-6 py-8">
      <section className="mx-auto max-w-3xl rounded-2xl border border-neutral-800 bg-neutral-950 p-6 text-center">
        <p className="text-sm uppercase tracking-widest text-neutral-500">
          Final result
        </p>

        <h1 className="font-deadlock mt-2 text-7xl font-black tracking-wide neon-text">
          {result.record}
        </h1>

        <p className="mt-2 text-neutral-400">Build score: {result.score}/100</p>

        <button
          onClick={() => dispatch({ type: "RESET" })}
          className="mt-6 rounded-xl bg-white px-5 py-3 font-semibold text-black"
        >
          Draft again
        </button>
      </section>
    </main>
  );
}