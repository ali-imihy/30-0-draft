import type { Hero } from "@/types/game";

export function getRandomHero(heroes: Hero[], usedHeroIds: string[]): Hero {
  const available = heroes.filter((hero) => !usedHeroIds.includes(hero.id));

  const pool = available.length > 0 ? available : heroes;

  const index = Math.floor(Math.random() * pool.length);

  return pool[index];
}