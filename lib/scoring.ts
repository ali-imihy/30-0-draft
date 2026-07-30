import type { Build, DraftPiece, Tag } from "@/types/game";

type ScoreResult = {
  score: number;
  wins: number;
  losses: number;
  record: string;
  canGoPerfect: boolean;
  archetype: string;
  verdict: string;
  strengths: string[];
  weaknesses: string[];
};

type Archetype = {
  name: string;
  core: Tag[];
  bonus: Tag[];
};

type SynergyRule = {
  name: string;
  tags: Tag[];
  points: number;
};

const ARCHETYPES: Archetype[] = [
  {
    name: "Assassin",
    core: ["burst", "mobility"],
    bonus: ["CC", "finisher", "dueling"],
  },
  {
    name: "Gun Carry",
    core: ["pressure", "scaling", "dueling"],
    bonus: ["mobility", "sustain", "escape", "poke"],
  },
  {
    name: "Bruiser",
    core: ["dueling", "tankiness", "sustain"],
    bonus: ["engage", "CC", "pressure"],
  },
  {
    name: "Controller",
    core: ["CC", "utility", "teamfight"],
    bonus: ["poke", "pressure"],
  },
  {
    name: "Support Enabler",
    core: ["utility", "sustain", "teamfight"],
    bonus: ["CC", "mobility", "tankiness"],
  },
  {
    name: "Poke Artillery",
    core: ["poke", "pressure", "scaling"],
    bonus: ["CC", "escape", "teamfight"],
  },
  {
    name: "Dive Threat",
    core: ["engage", "mobility", "dueling"],
    bonus: ["burst", "tankiness", "sustain", "CC"],
  },
];

const SYNERGIES: SynergyRule[] = [
  {
    name: "Can reach and delete priority targets",
    tags: ["mobility", "burst"],
    points: 8,
  },
  {
    name: "Lockdown converts damage into kills",
    tags: ["CC", "burst"],
    points: 7,
  },
  {
    name: "Strong sustained damage scaling",
    tags: ["pressure", "scaling"],
    points: 7,
  },
  {
    name: "Hard to kill in extended fights",
    tags: ["tankiness", "sustain"],
    points: 7,
  },
  {
    name: "Excellent teamfight control",
    tags: ["teamfight", "CC"],
    points: 6,
  },
  {
    name: "Safe poke with real catch potential",
    tags: ["poke", "CC"],
    points: 5,
  },
  {
    name: "Anti-heal pressure wins long trades",
    tags: ["anti-sustain", "pressure"],
    points: 5,
  },
  {
    name: "Finisher tools secure pickoffs",
    tags: ["finisher"],
    points: 5,
  },
  {
    name: "Strong team utility and sustain",
    tags: ["utility", "teamfight", "sustain"],
    points: 6,
  },
];

export function scoreBuild(build: Build): ScoreResult {
  const pieces = Object.values(build).filter(Boolean) as DraftPiece[];

  if (pieces.length === 0) {
    return {
      score: 0,
      wins: 0,
      losses: 30,
      record: "0-30",
      canGoPerfect: false,
      archetype: "Incomplete Build",
      verdict: "No draft yet.",
      strengths: [],
      weaknesses: ["No pieces selected."],
    };
  }

  const tags = pieces.flatMap((piece) => piece.tags);
  const tagCounts = countTags(tags);

  const ratingSum = pieces.reduce((sum, piece) => sum + piece.rating, 0);
  const maxRatingSum = pieces.length * 10;

  const basePower = Math.round((ratingSum / maxRatingSum) * 50);

  const bestArchetype = getBestArchetype(tagCounts);
  const archetypeBonus = bestArchetype.points;

  const activeSynergies = SYNERGIES.filter((rule) =>
    rule.tags.every((tag) => has(tagCounts, tag))
  );

  const synergyBonus = Math.min(
    25,
    activeSynergies.reduce((sum, rule) => sum + rule.points, 0)
  );

  const coverageBonus = getCoverageBonus(tagCounts);
  const weaknesses = getWeaknesses(tagCounts);
  const weaknessPenalty = weaknesses.length * 4;

  const rawScore =
    basePower + archetypeBonus + synergyBonus + coverageBonus - weaknessPenalty;

  const score = clamp(Math.round(rawScore), 0, 100);
  const { wins, losses } = scoreToRecord(score);

  const strengths = [
    ...activeSynergies.map((rule) => rule.name),
    `${bestArchetype.name} identity is clear`,
  ].slice(0, 4);

  return {
    score,
    wins,
    losses,
    record: `${wins}-${losses}`,
    canGoPerfect: wins === 30,
    archetype: bestArchetype.name,
    verdict: getVerdict(score),
    strengths,
    weaknesses,
  };
}

function countTags(tags: Tag[]) {
  const counts = new Map<Tag, number>();

  for (const tag of tags) {
    counts.set(tag, (counts.get(tag) ?? 0) + 1);
  }

  return counts;
}

function has(tagCounts: Map<Tag, number>, tag: Tag) {
  return (tagCounts.get(tag) ?? 0) > 0;
}

function countMatching(tagCounts: Map<Tag, number>, tags: Tag[]) {
  return tags.reduce((count, tag) => count + (has(tagCounts, tag) ? 1 : 0), 0);
}

function hasAny(tagCounts: Map<Tag, number>, tags: Tag[]) {
  return tags.some((tag) => has(tagCounts, tag));
}

function getBestArchetype(tagCounts: Map<Tag, number>) {
  let best = {
    name: "Mixed Build",
    points: 0,
  };

  for (const archetype of ARCHETYPES) {
    const coreMatches = countMatching(tagCounts, archetype.core);
    const bonusMatches = countMatching(tagCounts, archetype.bonus);

    const rawPoints = coreMatches * 4 + bonusMatches * 1.5;
    const points = Math.min(15, Math.round(rawPoints));

    if (points > best.points) {
      best = {
        name: archetype.name,
        points,
      };
    }
  }

  return best;
}

function getCoverageBonus(tagCounts: Map<Tag, number>) {
  let bonus = 0;

  const hasDamage = hasAny(tagCounts, [
    "burst",
    "pressure",
    "poke",
    "scaling",
    "finisher",
  ]);

  const hasSurvival = hasAny(tagCounts, [
    "sustain",
    "tankiness",
    "escape",
    "mobility",
  ]);

  const hasControl = hasAny(tagCounts, [
    "CC",
    "utility",
    "engage",
  ]);

  const hasFightImpact = hasAny(tagCounts, [
    "teamfight",
    "dueling",
  ]);

  const hasWinCondition = hasAny(tagCounts, [
    "scaling",
    "burst",
    "finisher",
    "teamfight",
    "pressure",
  ]);

  if (hasDamage) bonus += 3;
  if (hasSurvival) bonus += 3;
  if (hasControl) bonus += 3;
  if (hasFightImpact) bonus += 3;
  if (hasWinCondition) bonus += 3;

  return bonus;
}

function getWeaknesses(tagCounts: Map<Tag, number>) {
  const weaknesses: string[] = [];

  if (
    !hasAny(tagCounts, ["burst", "pressure", "poke", "scaling", "finisher"])
  ) {
    weaknesses.push("Low damage threat.");
  }

  if (!hasAny(tagCounts, ["mobility", "escape", "tankiness", "sustain"])) {
    weaknesses.push("Limited survivability.");
  }

  if (!hasAny(tagCounts, ["CC", "engage"])) {
    weaknesses.push("May struggle to force kills.");
  }

  if (!hasAny(tagCounts, ["teamfight", "utility", "CC"])) {
    weaknesses.push("Limited teamfight impact.");
  }

  if (
    hasAny(tagCounts, ["poke", "scaling"]) &&
    !hasAny(tagCounts, ["escape", "mobility", "tankiness"])
  ) {
    weaknesses.push("Long-range gameplan may be vulnerable when jumped.");
  }

  return weaknesses.slice(0, 3);
}

function scoreToRecord(score: number) {
  if (score >= 97) return { wins: 30, losses: 0 };
  if (score >= 93) return { wins: 29, losses: 1 };
  if (score >= 89) return { wins: 28, losses: 2 };
  if (score >= 85) return { wins: 27, losses: 3 };
  if (score >= 80) return { wins: 25, losses: 5 };
  if (score >= 75) return { wins: 23, losses: 7 };
  if (score >= 70) return { wins: 21, losses: 9 };
  if (score >= 65) return { wins: 18, losses: 12 };
  if (score >= 60) return { wins: 16, losses: 14 };
  if (score >= 50) return { wins: 12, losses: 18 };
  if (score >= 40) return { wins: 8, losses: 22 };
  return { wins: 4, losses: 26 };
}

function getVerdict(score: number) {
  if (score >= 97) return "Game-breaking. This build could absolutely go 30-0.";
  if (score >= 89) return "Disgusting build. This should dominate most lobbies.";
  if (score >= 80) return "Very strong build with a clear win condition.";
  if (score >= 70) return "Solid build, but not completely unfair.";
  if (score >= 60) return "Playable, but has noticeable weaknesses.";
  if (score >= 50) return "Awkward build. It has pieces, but no clean identity.";
  return "This build is fighting for its life.";
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}