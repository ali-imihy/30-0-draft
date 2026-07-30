"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Build, Hero, SlotId } from "@/types/game";
import { heroes } from "@/data/heroes";
import ChoiceButton from "./ChoiceButton";

const slotLabels: Record<SlotId, string> = {
  ability1: "Ability 1",
  ability2: "Ability 2",
  ability3: "Ability 3",
  ultimate: "Ultimate",
  gun: "Gun",
  stats: "Stats",
};

const ITEM_WIDTH = 96;
const ITEM_GAP = 12;
const STEP = ITEM_WIDTH + ITEM_GAP;
const VIEWPORT_WIDTH = 416;
const WINNER_INDEX = 22;

export default function HeroRollCard({
  currentHero,
  build,
  dispatch,
  rollKey,
  isRolling,
  setIsRolling,
}: {
  currentHero: Hero | null;
  build: Build;
  dispatch: React.Dispatch<any>;
  rollKey: number;
  isRolling: boolean;
  setIsRolling: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [rollItems, setRollItems] = useState<Hero[]>([]);
  const [translateX, setTranslateX] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (!currentHero) return;

    const items = makeRollItems(currentHero);

    const targetX =
      VIEWPORT_WIDTH / 2 - ITEM_WIDTH / 2 - WINNER_INDEX * STEP;

    setIsRolling(true);
    setShouldAnimate(false);
    setRollItems(items);
    setTranslateX(0);

    const startTimer = window.setTimeout(() => {
      setShouldAnimate(true);
      setTranslateX(targetX);
    }, 75);

    const endTimer = window.setTimeout(() => {
      setIsRolling(false);
    }, 2400);

    return () => {
      window.clearTimeout(startTimer);
      window.clearTimeout(endTimer);
    };
  }, [rollKey, currentHero, setIsRolling]);

  if (!currentHero) {
    return (
      <section className="rounded-2xl border border-neutral-800 bg-neutral-950 p-4">
        <p className="text-sm text-neutral-500">
          Start the draft to roll your first hero.
        </p>
      </section>
    );
  }

  return (
    <section className="rounded-2xl border border-neutral-800 bg-neutral-950 p-4">
      {isRolling ? (
        <Roller
          key={rollKey}
          rollItems={rollItems}
          translateX={translateX}
          shouldAnimate={shouldAnimate}
        />
      ) : (
        <div className="flex gap-4">
          <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900">
            <Image
              src={currentHero.imageSrc}
              alt={currentHero.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex min-w-0 flex-1 flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
              Current roll
            </p>

            {currentHero.nameImageSrc ? (
                <img
                  src={currentHero.nameImageSrc}
                  alt={currentHero.name}
                  className="mt-2 max-h-16 max-w-[120px] object-contain drop-shadow-[0_0_12px_rgba(0,255,122,0.45)]"
                />
              ) : (
                <h2 className="font-deadlock neon-text-soft mt-1 truncate text-4xl font-bold tracking-wide">
                  {currentHero.name}
                </h2>
              )}

            <p className="mt-2 text-sm text-neutral-400">
              Pick one available piece from this hero.
            </p>
          </div>
        </div>
      )}

      {!isRolling && (
        <div className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-2">
          {Object.values(currentHero.pieces).map((piece) => {
            const alreadyFilled = Boolean(build[piece.slot]);

            return (
              <ChoiceButton
                key={piece.id}
                label={slotLabels[piece.slot]}
                piece={piece}
                disabled={alreadyFilled}
                onChoose={() => dispatch({ type: "CHOOSE_PIECE", piece })}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}

function Roller({
  rollItems,
  translateX,
  shouldAnimate,
}: {
  rollItems: Hero[];
  translateX: number;
  shouldAnimate: boolean;
}) {
  return (
    <div>
      <p className="mb-3 text-xs uppercase tracking-[0.25em] text-neutral-500">
        Rolling hero
      </p>

      <div
        className="relative mx-auto h-36 overflow-hidden rounded-2xl border border-neutral-800 bg-black"
        style={{ width: VIEWPORT_WIDTH }}
      >
        <div className="pointer-events-none absolute left-1/2 top-0 z-20 h-full w-px bg-yellow-400 shadow-[0_0_18px_rgba(250,204,21,0.8)]" />

        <div
          className={`flex gap-3 px-0 py-4 ${
            shouldAnimate ? "transition-transform duration-[2200ms] ease-out" : ""
          }`}
          style={{
            transform: `translateX(${translateX}px)`,
          }}
        >
          {rollItems.map((hero, index) => (
            <div
              key={`${hero.id}-${index}`}
              className="relative h-28 w-24 shrink-0 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900"
            >
              <Image
                src={hero.imageSrc}
                alt={hero.name}
                fill
                className="object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 bg-black/70 px-1 py-1">
                <p className="truncate text-center text-[10px] font-semibold text-white">
                  {hero.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-3 text-center text-sm text-neutral-500">
        Locking in your next roll...
      </p>
    </div>
  );
}

function makeRollItems(winner: Hero) {
  const items: Hero[] = [];

  for (let i = 0; i < 28; i++) {
    if (i === WINNER_INDEX) {
      items.push(winner);
    } else {
      items.push(heroes[Math.floor(Math.random() * heroes.length)]);
    }
  }

  return items;
}