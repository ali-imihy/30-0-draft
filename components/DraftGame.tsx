"use client";

import { heroes } from "@/data/heroes";
import { draftReducer, initialDraftState } from "@/lib/draft";
import BuildBoard from "./BuildBoard";
import HeroRollCard from "./HeroRollCard";
import ActionBar from "./ActionBar";
import ResultPanel from "./ResultPanel";
import Header from "./Header";
import { useReducer, useState } from "react";

export default function DraftGame() {
  const [state, dispatch] = useReducer(draftReducer, initialDraftState);
  const [isRolling, setIsRolling] = useState(false);

  if (state.phase === "result") {
    return <ResultPanel state={state} dispatch={dispatch} />;
  }

  return (
    <main className="deadlock-bg min-h-screen px-4 py-4">
      <section className="mx-auto max-w-6xl space-y-5">
        <Header />
  
        <div className="grid gap-5 lg:grid-cols-[360px_1fr]">
          <div className="space-y-4">
            <BuildBoard
              build={state.build}
              selectedSwapSlot={state.selectedSwapSlot}
              canSelectForSwap={state.phase === "swapping" && !isRolling}
              dispatch={dispatch}
            />
  
            <ActionBar
              state={state}
              dispatch={dispatch}
              disabled={isRolling}
            />
          </div>
  
          <HeroRollCard
            currentHero={state.currentHero}
            build={state.build}
            dispatch={dispatch}
            rollKey={state.usedHeroIds.length}
            isRolling={isRolling}
            setIsRolling={setIsRolling}
          />
        </div>
      </section>
    </main>
  );
}