import type { Build, DraftPiece, DraftState, Hero, SlotId } from "@/types/game";
import { heroes } from "@/data/heroes";
import { getRandomHero } from "@/lib/random";

const emptyBuild: Build = {
  ability1: null,
  ability2: null,
  ability3: null,
  ultimate: null,
  gun: null,
  stats: null,
};

export const initialDraftState: DraftState = {
  phase: "start",
  build: emptyBuild,
  currentHero: null,
  usedHeroIds: [],
  skipsLeft: 1,
  swapsLeft: 1,
  selectedSwapSlot: null,
};

type DraftAction =
  | { type: "START_DRAFT" }
  | { type: "CHOOSE_PIECE"; piece: DraftPiece }
  | { type: "SKIP_HERO" }
  | { type: "ENTER_SWAP_MODE" }
  | { type: "SELECT_SWAP_SLOT"; slot: SlotId }
  | { type: "CANCEL_SWAP" }
  | { type: "RESET" };

function isBuildComplete(build: Build) {
  return Object.values(build).every(Boolean);
}

function rollNextHero(usedHeroIds: string[]): Hero {
  return getRandomHero(heroes, usedHeroIds);
}

export function draftReducer(state: DraftState, action: DraftAction): DraftState {
  switch (action.type) {
    case "START_DRAFT": {
      const nextHero = rollNextHero([]);
      return {
        ...initialDraftState,
        phase: "drafting",
        currentHero: nextHero,
        usedHeroIds: [nextHero.id],
      };
    }

    case "CHOOSE_PIECE": {
      const piece = action.piece;

      const newBuild = {
        ...state.build,
        [piece.slot]: piece,
      };

      if (isBuildComplete(newBuild)) {
        return {
          ...state,
          build: newBuild,
          phase: "result",
        };
      }

      const nextHero = rollNextHero(state.usedHeroIds);

      return {
        ...state,
        phase: "drafting",
        build: newBuild,
        currentHero: nextHero,
        usedHeroIds: [...state.usedHeroIds, nextHero.id],
        selectedSwapSlot: null,
      };
    }

    case "SKIP_HERO": {
      if (state.skipsLeft <= 0) return state;

      const nextHero = rollNextHero(state.usedHeroIds);

      return {
        ...state,
        skipsLeft: state.skipsLeft - 1,
        currentHero: nextHero,
        usedHeroIds: [...state.usedHeroIds, nextHero.id],
      };
    }

    case "ENTER_SWAP_MODE": {
      if (state.swapsLeft <= 0) return state;

      return {
        ...state,
        phase: "swapping",
        selectedSwapSlot: null,
      };
    }

    case "SELECT_SWAP_SLOT": {
      return {
        ...state,
        selectedSwapSlot: action.slot,
      };
    }

    case "CANCEL_SWAP": {
      return {
        ...state,
        phase: "drafting",
        selectedSwapSlot: null,
      };
    }

    case "RESET": {
      return initialDraftState;
    }

    default:
      return state;
  }
}