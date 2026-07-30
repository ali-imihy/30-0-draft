export type SlotId =
  | "ability1"
  | "ability2"
  | "ability3"
  | "ultimate"
  | "gun"
  | "stats";

export type Tag =
  | "burst"
  | "mobility"
  | "sustain"
  | "CC"
  | "tankiness"
  | "poke"
  | "scaling"
  | "teamfight"
  | "dueling"
  | "escape"
  | "farming"
  | "utility"
  | "engage"
  | "anti-sustain"
  | "pressure"
  | "finisher";

export type DraftPiece = {
  id: string;
  slot: SlotId;
  heroName: string;
  name: string;
  description: string;
  rating: number; // 1-10
  tags: Tag[];
  imageSrc: string;
};

export type Hero = {
  id: string;
  name: string;
  imageSrc: string;
  nameImageSrc?: string;
  pieces: Record<SlotId, DraftPiece>;
};

export type Build = Record<SlotId, DraftPiece | null>;

export type DraftPhase = "start" | "drafting" | "swapping" | "result";

export type DraftState = {
  phase: DraftPhase;
  build: Build;
  currentHero: Hero | null;
  usedHeroIds: string[];
  skipsLeft: number;
  swapsLeft: number;
  selectedSwapSlot: SlotId | null;
};