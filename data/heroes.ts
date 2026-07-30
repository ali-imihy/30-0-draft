import type { DraftPiece, Hero, SlotId, Tag } from "@/types/game";

type PieceInput = {
  name: string;
  description: string;
  rating: number;
  tags: Tag[];
  imageSrc: string;
};

function makePiece(
  heroId: string,
  heroName: string,
  slot: SlotId,
  input: PieceInput
): DraftPiece {
  return {
    id: `${heroId}-${slot}`,
    slot,
    heroName,
    name: input.name,
    description: input.description,
    rating: input.rating,
    tags: input.tags,
    imageSrc: input.imageSrc,
  };
}

function makeHero(
  id: string,
  name: string,
  imageSrc: string,
  nameImageSrc: string | undefined,
  pieces: Record<SlotId, PieceInput>
): Hero {
  return {
    id,
    name,
    imageSrc,
    nameImageSrc,
    pieces: {
      ability1: makePiece(id, name, "ability1", pieces.ability1),
      ability2: makePiece(id, name, "ability2", pieces.ability2),
      ability3: makePiece(id, name, "ability3", pieces.ability3),
      ultimate: makePiece(id, name, "ultimate", pieces.ultimate),
      gun: makePiece(id, name, "gun", pieces.gun),
      stats: makePiece(id, name, "stats", pieces.stats),
    },
  };
}

export const heroes: Hero[] = [
  makeHero("mina1", "Mina", "/heroes/Mina.png", "/heronames/Mina_name.svg", {
    ability1: {
      name: "Rake",
      description: "High damaging melee option that includes some sustain. Enables floating.",
      rating: 9,
      tags: ["burst", "sustain", "mobility", "escape"],
      imageSrc: "/abilities/Rake.png",
    },
    ability2: {
      name: "Sanguine Retreat",
      description: "Briefly disperse, becoming untargetable and flying to a target location.",
      rating: 10,
      tags: ["mobility", "escape"],
      imageSrc: "/abilities/Sanguine_Retreat.png",
    },
    ability3: {
      name: "Love Bites",
      description: "Your bullets apply additional  spirit damage. Dealing damage your abilities builds up to a vicious bite, dealing a burst of  bonus spirit damage.",
      rating: 9,
      tags: ["burst", "dueling"],
      imageSrc: "/abilities/Love_Bites.png",
    },
    ultimate: {
      name: "Nox Nostra",
      description: "Unleash a cloud of bats that seek out targets, each dealing spirit damage and applying Silence.",
      rating: 6,
      tags: ["CC", "burst"],
      imageSrc: "/abilities/Nox_Nostra.png",
    },
    gun: {
      name: "New Money",
      description: "Burst Fire, Medium Range, 29 DPS",
      rating: 1,
      tags: [],
      imageSrc: "/heroes/Mina.png",
    },
    stats: {
      name: "Glass Cannon",
      description: "Fast, but weak.",
      rating: 3,
      tags: [],
      imageSrc: "/heroes/Mina.png",
    },
  }),

  makeHero("infernus2", "Infernus", "/heroes/Infernus.png", "/heronames/Infernus_name.svg", {
    ability1: {
      name: "Napalm",
      description: "Spew an incendiary mixture, dealing  spirit damage, applying  slow, and coating targets in napalm. Napalm grants lifesteal on hit and increased damage dealt.",
      rating: 6,
      tags: ["CC", "utility", "dueling"],
      imageSrc: "/abilities/Napalm.png",
    },
    ability2: {
      name: "Flame Dash",
      description: "Dash forward, gaining  slow resistance while leaving a flaming trail that deals  spirit damage over time.",
      rating: 7,
      tags: ["mobility", "escape", "farming"],
      imageSrc: "/abilities/Flame_Dash.png",
    },
    ability3: {
      name: "Afterburn",
      description: "Weapon hits build up a burning effect, dealing  spirit damage over time. Abilities refresh to the base burn duration and weapon hits extend it.",
      rating: 7,
      tags: ["poke", "dueling"],
      imageSrc: "/abilities/Afterburn.png",
    },
    ultimate: {
      name: "Concussive Combustion",
      description: "Become a living bomb, dealing  spirit damage and applying  stun to all nearby enemies after a delay.",
      rating: 5,
      tags: ["teamfight", "CC"],
      imageSrc: "/abilities/Concussive_Combustion.png",
    },
    gun: {
      name: "Incendiary Remarks",
      description: "Rapid Fire, Medium Range, 52 DPS",
      rating: 7,
      tags: [],
      imageSrc: "/heroes/Infernus.png",
    },
    stats: {
      name: "Average",
      description: "Average dueler stats.",
      rating: 5,
      tags: [],
      imageSrc: "/heroes/Infernus.png",
    },
  }),

  makeHero("dynamo3", "Dynamo", "/heroes/Dynamo.png", "/heronames/Dynamo_name.svg", {
    ability1: {
      name: "Kinetic Pulse",
      description: "Release an energy pulse that travels along the ground, dealing  spirit damage and applying knockup.",
      rating: 7,
      tags: ["poke", "scaling", "CC"],
      imageSrc: "/abilities/Kinetic_Pulse.png",
    },
    ability2: {
      name: "Quantum Entanglement",
      description: "Briefly become untargetable while teleporting to the target location. Restores stamina upon use. Able to bring allies with you",
      rating: 9,
      tags: ["utility", "teamfight", "escape"],
      imageSrc: "/abilities/Quantum_Entanglement.png",
    },
    ability3: {
      name: "Rejuvenating Aurora",
      description: "While channeling, restore health over time to you and any allies nearby.",
      rating: 6,
      tags: ["sustain"],
      imageSrc: "/abilities/Rejuvenating_Aurora.png",
    },
    ultimate: {
      name: "Singularity",
      description: "Create a singularity in your hands, dealing spirit damage over time, applying stun, and pulling in nearby enemies.",
      rating: 9,
      tags: ["teamfight", "CC"],
      imageSrc: "/abilities/Singularity.png",
    },
    gun: {
      name: "The Vonnegun",
      description: "Medium Range, Heavy Hitter, Projectile, 48 DPS",
      rating: 6,
      tags: [],
      imageSrc: "/heroes/Dynamo.png",
    },
    stats: {
      name: "Tanky Supporter",
      description: "High health, medium mobility",
      rating: 6,
      tags: [],
      imageSrc: "/heroes/Dynamo.png",
    },
  }),

  makeHero("shiv4", "Shiv", "/heroes/Shiv.png", "/heronames/Shiv_name.svg", {
    ability1: {
      name: "Serrated Knives",
      description: "Throw a knife that bleeds an enemy. Each additional hit adds a stack and refreshes the bleed duration, causing the bleed to increase per stack.",
      rating: 8,
      tags: ["poke"],
      imageSrc: "/abilities/Serrated_Knives.png",
    },
    ability2: {
      name: "Slice and Dice",
      description: "Perform a dash forward, damaging enemies along the path. Hit Enemies have their  spirit resist reduced. This debuff can stack.",
      rating: 8,
      tags: ["mobility", "teamfight"],
      imageSrc: "/abilities/Slice_and_Dice.png",
    },
    ability3: {
      name: "Bloodletting",
      description: "Take only a portion of incoming damage immediately and defer the rest to be taken over time. Activate to clear a portion of the deferred damage.",
      rating: 9,
      tags: ["sustain", "tankiness"],
      imageSrc: "/abilities/Bloodletting.png",
    },
    ultimate: {
      name: "Killing Blow",
      description: "Leap forward, dealing  spirit damage to the first enemy hero. If they are below the kill threshold, execute them instead.",
      rating: 7,
      tags: ["burst", "mobility", "finisher"],
      imageSrc: "/abilities/Killing_Blow.png",
    },
    gun: {
      name: "Busted Flush",
      description: "Spreadshot, Close Range, Movement, 52 DPS",
      rating: 10,
      tags: ["mobility", "utility"],
      imageSrc: "/heroes/Shiv.png",
    },
    stats: {
      name: "Bruiser",
      description: "Strong durability and trading power for extended fights.",
      rating: 7,
      tags: [],
      imageSrc: "/heroes/Shiv.png",
    },
  }),

  makeHero("venato5", "Venator", "/heroes/Venator.png", "/heronames/Venator_name.svg",{
    ability1: {
      name: "Consecrating Grenade",
      description: "Fire a grenade that bounces before exploding, dealing  weapon damage and setting enemies on fire. Burning targets deal pure damage to enemies in the area and suffer from reduced healing.",
      rating: 6,
      tags: ["burst", "utility", "anti-sustain"],
      imageSrc: "/abilities/Consecrating_Grenade.png",
    },
    ability2: {
      name: "Gutshot",
      description: "Fire a blast with your shotgun, dealing weapon damage and pushing enemies back. Enemies near a wall receive stun and take bonus weapon damage.",
      rating: 8,
      tags: ["dueling", "CC", "burst"],
      imageSrc: "/abilities/Gutshot.png",
    },
    ability3: {
      name: "Hex-Lined Snap Trap",
      description: "Kick a trap that arms after a brief delay. The trap springs on the first enemy it touches, dealing  spirit damage, applying  immobilize, and revealing enemies for a duration afterwards.",
      rating: 3,
      tags: ["CC"],
      imageSrc: "/abilities/Hex-Lined_Snap_Trap.png",
    },
    ultimate: {
      name: "Ira Domini",
      description: "Load your crossbow with 3 stakes, dealing massively increased weapon damage. Blessed stakes deal bonus pure damage and execute low-health enemies.",
      rating: 8,
      tags: ["burst", "dueling", "finisher"],
      imageSrc: "/abilities/Ira_Domini.png",

    },
    gun: {
      name: "51:20",
      description: "Rapid Fire, Medium Range, 63 DPS",
      rating: 9,
      tags: [],
      imageSrc: "/heroes/Venator.png",
    },
    stats: {
      name: "Tanky Brawler",
      description: "Above average durability, low movement, high damage.",
      rating: 6,
      tags: [],
      imageSrc: "/heroes/Venator.png",
    },
  }),

  makeHero("asshole6", "Lash", "/heroes/Lash.png", "/heronames/Lash_name.svg",{
    ability1: {
      name: "Ground Strike",
      description: "Stomp the ground beneath you, damaging enemies in front of you. If you perform Ground Strike while airborne, you quickly dive towards the ground. Damage grows slower after 25m.",
      rating: 6,
      tags: ["burst", "mobility"],
      imageSrc: "/abilities/Ground_Strike.png",
    },
    ability2: {
      name: "Grapple",
      description: "Pull yourself through the air toward a target. Using Grapple also resets your limit of air jumps and dashes.",
      rating: 9,
      tags: ["mobility", "escape"],
      imageSrc: "/abilities/Grapple.png",
    },
    ability3: {
      name: "Flog",
      description: "Strike enemies in front of you with your whip, healing for a portion of the damage dealt.",
      rating: 7,
      tags: ["sustain", "burst"],
      imageSrc: "/abilities/Flog.png",
    },
    ultimate: {
      name: "Death Slam",
      description: "Here's the grand finale",
      rating: 7,
      tags: ["teamfight", "CC"],
      imageSrc: "/abilities/Death_Slam.png",
    },
    gun: {
      name: "Tale of The Tape",
      description: "Burst Fire, Medium Range, 49 DPS",
      rating: 5,
      tags: [],
      imageSrc: "/heroes/Lash.png",
    },
    stats: {
      name: "Slippery Skirmisher",
      description: "Fast, evasive, and hard to pin down in small fights.",
      rating: 6,
      tags: [],
      imageSrc: "/heroes/Lash.png",
    },
  }),

  makeHero("victor7", "Victor", "/heroes/Victor.png", "/heronames/Victor_name.svg",{
    ability1: {
      name: "Pain Battery",
      description: "Taking any damage passively charges up your Pain Battery. Once full, activating the ability fires multiple shocking bolts, dealing  spirit damage once per target. Heals on hit on max level",
      rating: 4,
      tags: ["burst"],
      imageSrc: "/abilities/Pain_Battery.png",
    },
    ability2: {
      name: "Jumpstart",
      description: "Deal  spirit damage to yourself. Then, gain bonus regeneration and bonus move speed, decaying over time.",
      rating: 6,
      tags: ["mobility", "sustain"],
      imageSrc: "/abilities/Jumpstart.png",
    },
    ability3: {
      name: "Aura of Suffering",
      description: "Unleash pain, dealing  spirit damage over time to both enemies and yourself. The damage continues to increase the longer the ability is channeled, up to a maximum amount.",
      rating: 5,
      tags: ["teamfight", "farming"],
      imageSrc: "/abilities/Aura_of_Suffering.png",
    },
    ultimate: {
      name: "Shocking Reanimation",
      description: "Release a wave after taking lethal damage, applying a diminishing slow. After a brief channel you reanimate, dealing  spirit damage and applying  stun to nearby enemies.",
      rating: 8,
      tags: ["sustain"],
      imageSrc: "/abilities/Shocking_Reanimation.png",
    },
    gun: {
      name: "Memento Mori",
      description: "Projectile, Medium Range, 70 DPS",
      rating: 7,
      tags: [],
      imageSrc: "/heroes/Victor.png",
    },
    stats: {
      name: "Frontliner",
      description: "Built to absorb pressure and stand in messy fights.",
      rating: 6,
      tags: [],
      imageSrc: "/heroes/Victor.png",
    },
  }),

  makeHero("kelvin8", "Kelvin", "/heroes/Kelvin.png", "/heronames/Kelvin_name.svg",{
    ability1: {
      name: "Frost Grenade",
      description: "Throw a grenade that explodes in a cloud of freezing ice that  heals allies and applies  spirit damage and move speed reduction to enemies.",
      rating: 5,
      tags: ["sustain", "CC"],
      imageSrc: "/abilities/Frost_Grenade.png",
    },
    ability2: {
      name: "Ice Path",
      description: "Kelvin creates a floating trail of ice and snow that gives movement bonuses to him and his allies. Kelvin gains 60% slow resistance for the duration. Enemies can also walk on the floating trail.",
      rating: 6,
      tags: ["mobility", "sustain"],
      imageSrc: "/abilities/Ice_Path.png",
    },
    ability3: {
      name: "Arctic Beam",
      description: "Shoot freezing cold energy out in front of you, damaging targets and progressively reducing their movement and fire rate the longer you sustain the beam on them. You have reduced move speed while using Arctic Beam. ",
      rating: 5,
      tags: ["dueling", "CC"],
      imageSrc: "/abilities/Arctic_Beam.png",
    },
    ultimate: {
      name: "Frozen Shelter",
      description: "Target yourself or a Hero to freeze the air and create an impenetrable dome around them. While in the dome, allies gain rapid  regeneration and enemies are slowed.",
      rating: 8,
      tags: ["teamfight", "dueling"],
      imageSrc: "/abilities/Frozen_Shelter.png",
    },
    gun: {
      name: "Expedition's End",
      description: "Projectile, Medium Range, Heavy Hitter, 71 DPS",
      rating: 7,
      tags: [],
      imageSrc: "/heroes/Kelvin.png",
    },
    stats: {
      name: "Sustain Fighter",
      description: "Wins longer fights through healing and staying power.",
      rating: 6,
      tags: [],
      imageSrc: "/heroes/Kelvin.png",
    },
  }),

  makeHero("calico9", "Calico", "/heroes/Calico.png", "/heronames/Calico_name.svg",{
    ability1: {
      name: "Gloom Bombs",
      description: "Throw a cluster of bombs that detonate after a delay, dealing spirit damage.",
      rating: 3,
      tags: ["burst"],
      imageSrc: "/abilities/Gloom_Bombs.png",
    },
    ability2: {
      name: "Leaping Slash",
      description: "Dash forward before slashing all enemies in a circle, dealing  melee damage. If the ability hits at least one hero, heal a small amount of health.",
      rating: 5,
      tags: ["mobility", "sustain"],
      imageSrc: "/abilities/Leaping_Slash.png",
    },
    ability3: {
      name: "Ava",
      description: "Turn to shadows and possess Ava. You gain bonus move speed that increases over time, and become hidden on the minimap.",
      rating: 4,
      tags: ["mobility", "utility"],
      imageSrc: "/abilities/Ava.png",
    },
    ultimate: {
      name: "Return to Shadows",
      description: "Instantly turn to shadows, becoming untargetable, gaining bonus move speed, and dealing spirit damage. After a delay, return from the shadows, dealing spirit damage again.",
      rating: 6,
      tags: ["burst", "escape"],
      imageSrc: "/abilities/Return_To_Shadows.png",
    },
    gun: {
      name: "Sweetest Lie",
      description: "Spreadshot, Close Range, 79 DPS",
      rating: 8,
      tags: [],
      imageSrc: "/heroes/Calico.png",
    },
    stats: {
      name: "Mobile Assassin",
      description: "Quick and lethal, but depends on clean engages.",
      rating: 7,
      tags: [],
      imageSrc: "/heroes/Calico.png",
    },
  }),

  makeHero("pocket10", "Pocket", "/heroes/Pocket.png", "/heronames/Pocket_name.svg",{
    ability1: {
      name: "Barrage",
      description: "Channel to start launching projectiles that deal spirit damage and apply slow around their impact point. Projectiles that hit a hero grant this hero increased damage that stacks. Casting while airborne will cause Pocket to float.",
      rating: 7,
      tags: ["poke"],
      imageSrc: "/abilities/Barrage.png",
    },
    ability2: {
      name: "Flying Cloak",
      description: "Launch a sentient cloak that travels forward and damages enemies. You can press Ability 2 to teleport to its location.",
      rating: 9,
      tags: ["mobility", "burst", "escape"],
      imageSrc: "/abilities/Flying_Cloak.png",
    },
    ability3: {
      name: "Enchanter's Satchel",
      description: "Escape into your suitcase. When the duration ends, deal spirit damage to nearby enemies. Duration can be ended early by performing any action.",
      rating: 8,
      tags: ["burst", "utility"],
      imageSrc: "/abilities/Enchanter-s_Satchel.png",
    },
    ultimate: {
      name: "Affliction",
      description: "Applies spirit damage over time to enemies nearby. Prevents all healing at max level.",
      rating: 10,
      tags: ["teamfight"],
      imageSrc: "/abilities/Affliction.png",
    },
    gun: {
      name: "The Black Sheep",
      description: "Spreadshot, Close Range, 57 DPS",
      rating: 8,
      tags: [],
      imageSrc: "/heroes/Pocket.png",
    },
    stats: {
      name: "Caster",
      description: "Ability-focused damage with strong cooldown value.",
      rating: 7,
      tags: [],
      imageSrc: "/heroes/Pocket.png",
    },
  }),

  makeHero("vyper11", "Vyper", "/heroes/Vyper.png", "/heronames/Vyper_name.svg",{
    ability1: {
      name: "Screwjab Dagger",
      description: "Throw a dagger, dealing spirit damage and applying slow. Every subsequent dagger against the same target stacks in spirit damage and slow.",
      rating: 4,
      tags: ["CC"],
      imageSrc: "/abilities/Screwjab_Dagger.png",
    },
    ability2: {
      name: "Lethal Venom",
      description: "Inject a target with lethal venom. After a delay the venom triggers, dealing Spirit Damage. The damage is increased by the target's missing health.",
      rating: 5,
      tags: ["burst"],
      imageSrc: "/abilities/Lethal_Venom.png",
    },
    ability3: {
      name: "Slither",
      description: "You have increased Slide Distance, can Slide up hills, and can turn faster while Sliding.",
      rating: 8,
      tags: ["mobility", "utility"],
      imageSrc: "/abilities/Slither.png",
    },
    ultimate: {
      name: "Petrifying Bola",
      description: "Throw an explosive bola. On exploding, the bola slows and damages all enemies in the area. Direct hits deal additional damage and petrify instead. Petrified units block all damage, but cannot take actions.",
      rating: 5,
      tags: ["CC"],
      imageSrc: "/abilities/Petrifying_Bola.png",
    },
    gun: {
      name: "The Rattler",
      description: "Rapid Fire, Close Range, 94 DPS",
      rating: 9,
      tags: [],
      imageSrc: "/heroes/Vyper.png",
    },
    stats: {
      name: "Slippery Skirmisher",
      description: "Fast, evasive, and hard to pin down in small fights.",
      rating: 5,
      tags: [],
      imageSrc: "/heroes/Vyper.png",
    },
  }),

  makeHero("abrams12", "Abrams", "/heroes/Abrams.png", "/heronames/Abrams_name.svg",{
    ability1: {
      name: "Siphon Life",
      description:
        "Drain health from nearby enemies, dealing spirit damage over time and healing for a portion of the damage dealt.",
      rating: 7,
      tags: ["sustain"],
      imageSrc: "/abilities/Siphon_Life.png",
    },
  
    ability2: {
      name: "Shoulder Charge",
      description:
        "Charge forward, pulling enemies you hit. Slamming a hero into a wall stuns them.",
      rating: 8,
      tags: ["mobility", "engage", "CC"],
      imageSrc: "/abilities/Shoulder_Charge.png",
    },
  
    ability3: {
      name: "Infernal Resilience",
      description:
        "Gain bonus defensive attributes. Taking damage grants temporary regeneration for a portion of the damage taken.",
      rating: 7,
      tags: ["tankiness", "sustain", "dueling"],
      imageSrc: "/abilities/Infernal_Resilience.png",
    },
  
    ultimate: {
      name: "Seismic Impact",
      description:
        "Leap high into the air before crashing down, dealing spirit damage and stunning enemies in the impact area.",
      rating: 6,
      tags: ["teamfight", "CC"],
      imageSrc: "/abilities/Seismic_Impact.png",
    },
  
    gun: {
      name: "Case Closed",
      description:
        "Close-range spreadshot weapon with single-shell reloads. Strong up close but slower to fully reload.",
      rating: 5,
      tags: [],
      imageSrc: "/heroes/Abrams.png",
    },
  
    stats: {
      name: "Tanky Brawler",
      description:
        "Thrives up close with strong durability, sustain, and extended-fight pressure.",
      rating: 9,
      tags: [],
      imageSrc: "/heroes/Abrams.png",
    },
  }),

  makeHero("apollo13", "Apollo", "/heroes/Apollo.png", "/heronames/Apollo_name.svg",{
    ability1: {
      name: "Disengaging Sigil",
      description:
        "Leap backward as a sigil explodes in front of you, damaging and slowing enemies caught in the blast.",
      rating: 4,
      tags: ["mobility", "escape"],
      imageSrc: "/abilities/Disengaging_Sigil.png",
    },
  
    ability2: {
      name: "Riposte",
      description:
        "Deflect the next incoming attack, briefly become invulnerable, then dash to an enemy hero and stun them.",
      rating: 6,
      tags: ["dueling", "CC", "engage"],
      imageSrc: "/abilities/Riposte.png",
    },
  
    ability3: {
      name: "Flawless Advance",
      description:
        "Perform timed lunges that stab forward, rewarding perfect releases with stronger damage.",
      rating: 9,
      tags: ["mobility", "dueling", "burst"],
      imageSrc: "/abilities/Flawless_Advance.png",
    },
  
    ultimate: {
      name: "Itani Lo Sahn",
      description:
        "Charge a long-range slash that traps enemies in slow motion, prevents actions and healing, then deals devastating delayed damage.",
      rating: 8,
      tags: ["burst", "CC"],
      imageSrc: "/abilities/Itani_Lo_Sahn.png",
    },
  
    gun: {
      name: "Pride of Ixia",
      description:
        "Medium-range projectile weapon with no damage falloff, but no damage beyond its max range.",
      rating: 3,
      tags: [],
      imageSrc: "/heroes/Apollo.png",
    },
  
    stats: {
      name: "Mobile Duelist",
      description:
        "A fast, precise fighter built around timing, counterplay, and committed skirmishes.",
      rating: 8,
      tags: [],
      imageSrc: "/heroes/Apollo.png",
    },
  }),

  makeHero("bebop14", "Bebop", "/heroes/Bebop.png", "/heronames/Bebop_name.svg",{
    ability1: {
      name: "Exploding Uppercut",
      description:
        "Launch nearby enemies with a melee uppercut, knocking them away and causing area damage when they land.",
      rating: 5,
      tags: ["CC"],
      imageSrc: "/abilities/Exploding_Uppercut.png",
    },
  
    ability2: {
      name: "Sticky Bomb",
      description:
        "Attach a delayed bomb that explodes for spirit damage and permanently gains bonus damage from hero hits and kills.",
      rating: 8,
      tags: ["burst", "scaling"],
      imageSrc: "/abilities/Sticky_Bomb.png",
    },
  
    ability3: {
      name: "Grapple Arm",
      description:
        "Launch a mechanical hand that pulls the first character hit, setting up picks and close-range combos.",
      rating: 8,
      tags: ["CC", "engage"],
      imageSrc: "/abilities/Grapple_Arm.png",
    },
  
    ultimate: {
      name: "Hyper Beam",
      description:
        "Channel a long-range energy beam that deals heavy spirit damage over time and slows enemies hit.",
      rating: 4,
      tags: ["teamfight"],
      imageSrc: "/abilities/Hyper_Beam.png",
    },
  
    gun: {
      name: "Humble Pie",
      description:
        "Medium-range beam weapon with continuous damage, no bullet travel, and a short wind-up before firing.",
      rating: 6,
      tags: [],
      imageSrc: "/heroes/Bebop.png",
    },
  
    stats: {
      name: "Pickoff Controller",
      description:
        "Built around catching enemies, forcing bad positions, and converting hooks into deadly combos.",
      rating: 7,
      tags: [],
      imageSrc: "/heroes/Bebop.png",
    },
  }),

  makeHero("billy15", "Billy", "/heroes/Billy.png", "/heronames/Billy_name.svg",{
    ability1: {
      name: "Bashdown",
      description:
        "Slam your bat into the ground, pulling enemies down and creating a shockwave that damages and knocks them up.",
      rating: 5,
      tags: ["burst", "CC"],
      imageSrc: "/abilities/Bashdown.png",
    },
  
    ability2: {
      name: "Rising Ram",
      description:
        "Charge head-first into an enemy, damaging them and sending both you and the target into the air.",
      rating: 6,
      tags: ["mobility", "engage"],
      imageSrc: "/abilities/Rising_Ram.png",
    },
  
    ability3: {
      name: "Blasted",
      description:
        "Melee hits restore ammo and mark enemies, while the active amplifies bullets against marked targets and grants bonus health.",
      rating: 8,
      tags: ["dueling", "tankiness"],
      imageSrc: "/abilities/Blasted.png",
    },
  
    ultimate: {
      name: "Chain Gang",
      description:
        "Chain nearby enemies to you, slowing them and preventing movement abilities before yanking them in for damage.",
      rating: 8,
      tags: ["teamfight", "CC", "engage"],
      imageSrc: "/abilities/Chain_Gang.png",
    },
  
    gun: {
      name: "Biquette",
      description:
        "Close Range, 74 DPS",
      rating: 7,
      tags: [],
      imageSrc: "/heroes/Billy.png",
    },
  
    stats: {
      name: "Melee Brawler",
      description:
        "Thrives up close with strong trading, lockdown, and aggressive close-range pressure.",
      rating: 5,
      tags: [],
      imageSrc: "/heroes/Billy.png",
    },
  }),

  makeHero("celeste16", "Celeste", "/heroes/Celeste.png", "/heronames/Celeste_name.svg",{
    ability1: {
      name: "Light Eater",
      description:
        "Blast enemies with light, marking them so Celeste deals extra spirit damage and gains spirit lifesteal when attacking them.",
      rating: 5,
      tags: ["sustain", "dueling"],
      imageSrc: "/abilities/Light_Eater.png",
    },
  
    ability2: {
      name: "Dazzling Trick",
      description:
        "Surround yourself with a protective prism that explodes when broken, damaging and silencing nearby enemies.",
      rating: 8,
      tags: ["tankiness", "utility", "CC"],
      imageSrc: "/abilities/Dazzling_Trick.png",
    },
  
    ability3: {
      name: "Radiant Daggers",
      description:
        "Call down a delayed beam of light that explodes in an area and grants stacking spirit damage when it hits enemy heroes.",
      rating: 8,
      tags: ["teamfight", "scaling", "burst"],
      imageSrc: "/abilities/Radiant_Daggers.png",
    },
  
    ultimate: {
      name: "Shining Wonder",
      description:
        "Launch a bouncing orb of light that damages enemies, slows them, and reduces their dash distance as it chains between targets.",
      rating: 7,
      tags: ["teamfight", "CC", "burst"],
      imageSrc: "/abilities/Shining_Wonder.png",
    },
  
    gun: {
      name: "Carny Life",
      description:
        "Medium Range, Projectile, Bouncy, 31 DPS",
      rating: 6,
      tags: [],
      imageSrc: "/heroes/Celeste.png",
    },
  
    stats: {
      name: "Scaling Caster",
      description:
        "Decreased Gravity and Air Speed",
      rating: 10,
      tags: [],
      imageSrc: "/heroes/Celeste.png",
    },
  }),

  makeHero("the_doorman17", "The Doorman", "/heroes/The_Doorman.png", "/heronames/The_Doorman_name.svg",{
    ability1: {
      name: "Call Bell",
      description:
        "Throw a bell that damages on impact, then explodes to damage, slow, and reduce enemy weapon accuracy.",
      rating: 8,
      tags: ["poke", "burst"],
      imageSrc: "/abilities/Call_Bell.png",
    },
  
    ability2: {
      name: "Doorway",
      description:
        "Place two connected doors that let players and projectiles travel between them for powerful repositioning plays.",
      rating: 9,
      tags: ["mobility", "utility", "teamfight", "escape"],
      imageSrc: "/abilities/Doorway.png",
    },
  
    ability3: {
      name: "Luggage Cart",
      description:
        "Send out a cart that damages and drags enemy heroes along its path, setting up displacement and wall-impact plays.",
      rating: 7,
      tags: ["CC", "utility"],
      imageSrc: "/abilities/Luggage_Cart.png",
    },
  
    ultimate: {
      name: "Hotel Guest",
      description:
        "Send an enemy to the Baroness Hotel, forcing them to escape before taking extra spirit damage.",
      rating: 8,
      tags: ["CC", "utility"],
      imageSrc: "/abilities/Hotel_Guest.png",
    },
  
    gun: {
      name: "Service With A Smile",
      description:
        "Heavy Hitter, Medium Range, 41 DPS",
      rating: 7,
      tags: [],
      imageSrc: "/heroes/The_Doorman.png",
    },
  
    stats: {
      name: "Portal Controller",
      description:
        "A tricky utility-focused statline built around repositioning, displacement, and setup plays.",
      rating: 8,
      tags: [],
      imageSrc: "/heroes/The_Doorman.png",
    },
  }),

  makeHero("drifter18", "Drifter", "/heroes/Drifter.png", "/heronames/Drifter_name.svg",{
    ability1: {
      name: "Rend",
      description:
        "Swipe enemies in a cone for spirit damage, dealing bonus melee damage to close-range targets. Silences on max level.",
      rating: 7,
      tags: ["burst", "dueling", "CC"],
      imageSrc: "/abilities/Rend.png",
    },
  
    ability2: {
      name: "Stalker's Mark",
      description:
        "Mark a target with a bleed, then re-activate to teleport behind them while the bleed remains active.",
      rating: 8,
      tags: ["mobility", "engage", "dueling"],
      imageSrc: "/abilities/Stalker-s_Mark.png",
    },
  
    ability3: {
      name: "Bloodscent",
      description:
        "Track isolated heroes, deal amplified damage to them, and gain permanent weapon damage when they die nearby.",
      rating: 9,
      tags: ["dueling", "scaling"],
      imageSrc: "/abilities/Bloodscent.png",
    },
  
    ultimate: {
      name: "Eternal Night",
      description:
        "Surround nearby enemy heroes in darkness, limiting their vision and making them count as isolated.",
      rating: 7,
      tags: ["teamfight", "utility"],
      imageSrc: "/abilities/Eternal_Night.png",
    },
  
    gun: {
      name: "Crimson Grasp",
      description:
        "Spreadshot, Close Range, 44 DPS",
      rating: 7,
      tags: [],
      imageSrc: "/heroes/Drifter.png",
    },
  
    stats: {
      name: "Isolation Assassin",
      description:
        "Built to hunt separated enemies, chase them down, and snowball through pickoffs.",
      rating: 8,
      tags: [],
      imageSrc: "/heroes/Drifter.png",
    },
  }),

  makeHero("graves19", "Graves", "/heroes/Graves.png", "/heronames/Graves_name.svg",{
    ability1: {
      name: "Jar of Dead",
      description:
        "Collect death from nearby kills, then throw jars that summon Deadheads to chase and damage enemies.",
      rating: 8,
      tags: ["pressure", "utility", "scaling"],
      imageSrc: "/abilities/Jar_of_Dead.png",
    },
  
    ability2: {
      name: "Grasping Hands",
      description:
        "Raise a line of grasping hands that damages and immobilizes enemies who pass through it. Also spawns 2 ghouls.",
      rating: 8,
      tags: ["CC", "utility"],
      imageSrc: "/abilities/Grasping_Hands.png",
    },
  
    ability3: {
      name: "Essence Theft",
      description:
        "Your weapon steals weapon damage and spirit resist from enemies over time, weakening them while empowering you.",
      rating: 9,
      tags: ["anti-sustain", "dueling", "pressure"],
      imageSrc: "/abilities/Essence_Theft.png",
    },
  
    ultimate: {
      name: "Borrowed Decree",
      description:
        "Create a gravestone that summons Ghouls over time, pressuring enemies and objectives with explosive minions.",
      rating: 8,
      tags: ["teamfight", "pressure", "scaling"],
      imageSrc: "/abilities/Borrowed_Decree.png",
    },
  
    gun: {
      name: "The Teacher",
      description:
        "Close-range beam weapon that locks onto targets near the reticle and steadily builds pressure.",
      rating: 6,
      tags: [],
      imageSrc: "/heroes/Graves.png",
    },
  
    stats: {
      name: "Summoner Controller",
      description:
        "Controls space through summons, debuffs, and sustained pressure while scaling through extended fights.",
      rating: 3,
      tags: [],
      imageSrc: "/heroes/Graves.png",
    },
  }),

  makeHero("greytalon20", "Grey Talon", "/heroes/Grey_Talon.png", "/heronames/Grey_Talon_name.svg",{
    ability1: {
      name: "Charged Shot",
      description:
        "Charge a powerful piercing shot that can be held and fired through enemies for heavy damage.",
      rating: 8,
      tags: ["poke", "burst"],
      imageSrc: "/abilities/Charged_Shot.png",
    },
  
    ability2: {
      name: "Rain of Arrows",
      description:
        "Launch into the air and glide while gaining weapon damage, multishot, and strong aerial pressure.",
      rating: 6,
      tags: ["mobility", "poke", "pressure"],
      imageSrc: "/abilities/Rain_of_Arrows.png",
    },
  
    ability3: {
      name: "Spirit Snare",
      description:
        "Throw a trap that curses, slows, interrupts, silences, disarms, and prevents item usage when triggered.",
      rating: 4,
      tags: ["CC", "utility"],
      imageSrc: "/abilities/Spirit_Snare.png",
    },
  
    ultimate: {
      name: "Guided Owl",
      description:
        "Launch a controllable spirit owl that explodes on impact, damaging and stunning enemies while granting permanent spirit power on kills. Executes at max level.",
      rating: 8,
      tags: ["burst", "scaling", "finisher"],
      imageSrc: "/abilities/Guided_Owl.png",
    },
  
    gun: {
      name: "The Mourning Comes",
      description:
        "Medium Range, Heavy Hitter, Projectile, 39 DPS",
      rating: 6,
      tags: [],
      imageSrc: "/heroes/Grey_Talon.png",
    },
  
    stats: {
      name: "Long-Range Marksman",
      description:
        "Excels at poking from distance, setting traps, and converting picks with high-damage shots.",
      rating: 5,
      tags: [],
      imageSrc: "/heroes/Grey_Talon.png",
    },
  }),

  makeHero("haze21", "Haze", "/heroes/Haze.png", "/heronames/Haze_name.svg",{
    ability1: {
      name: "Sleep Dagger",
      description:
        "Throw a dagger that damages and sleeps a target, setting up picks without breaking invisibility.",
      rating: 7,
      tags: ["CC", "utility"],
      imageSrc: "/abilities/Sleep_Dagger.png",
    },
  
    ability2: {
      name: "Smoke Bomb",
      description:
        "Fade into invisibility and gain sprint speed, letting you reposition, escape, or set up an ambush.",
      rating: 5,
      tags: ["mobility", "escape", "dueling"],
      imageSrc: "/abilities/Smoke_Bomb.png",
    },
  
    ability3: {
      name: "Fixation",
      description:
        "Repeated shots against the same target build stacks, increasing your bullet damage against them.",
      rating: 9,
      tags: ["scaling", "dueling", "pressure"],
      imageSrc: "/abilities/Fixation.png",
    },
  
    ultimate: {
      name: "Bullet Dance",
      description:
        "Enter a deadly flurry, firing at nearby enemies with perfect accuracy, bonus damage, and bullet evasion.",
      rating: 8,
      tags: ["teamfight", "pressure", "dueling"],
      imageSrc: "/abilities/Bullet_Dance.png",
    },
  
    gun: {
      name: "Censure & Penance",
      description:
        "Rapid Fire, Close Range, 50 DPS",
      rating: 8,
      tags: [],
      imageSrc: "/heroes/Haze.png",
    },
  
    stats: {
      name: "Stealth Carry",
      description:
        "Close-range rapid-fire weapon that pairs extremely well with sustained bullet damage and target focus.",
      rating: 6,
      tags: [],
      imageSrc: "/heroes/Haze.png",
    },
  }),

  makeHero("holliday22", "Holliday", "/heroes/Holliday.png", "/heronames/Holliday_name.svg",{
    ability1: {
      name: "Powder Keg",
      description:
        "Throw explosive barrels that can be detonated early, dealing spirit damage and knocking enemies up.",
      rating: 7,
      tags: ["burst", "CC"],
      imageSrc: "/abilities/Powder_Keg.png",
    },
  
    ability2: {
      name: "Bounce Pad",
      description:
        "Drop a bounce pad that launches heroes and causes a damaging stomp explosion when they land.",
      rating: 9,
      tags: ["mobility", "escape", "engage"],
      imageSrc: "/abilities/Bounce_Pad.png",
    },
  
    ability3: {
      name: "Crackshot",
      description:
        "Empower headshots to deal bonus damage and apply a fading movement slow when off cooldown.",
      rating: 5,
      tags: ["poke", "burst"],
      imageSrc: "/abilities/Crackshot.png",
    },
  
    ultimate: {
      name: "Spirit Lasso",
      description:
        "Throw out a lasso that damages, pulls, and stuns an enemy, with extended duration when used from a bounce pad.",
      rating: 8,
      tags: ["CC", "engage"],
      imageSrc: "/abilities/Spirit_Lasso.png",
    },
  
    gun: {
      name: "Doc's Orders",
      description:
        "Medium Range, Heavy Hitter, 42 DPS",
      rating: 7,
      tags: [],
      imageSrc: "/heroes/Holliday.png",
    },
  
    stats: {
      name: "Setup Controller",
      description:
        "Built around mobility tricks, displacement, and turning good positioning into deadly picks.",
      rating: 5,
      tags: [],
      imageSrc: "/heroes/Holliday.png",
    },
  }),

  makeHero("ivy23", "Ivy", "/heroes/Ivy.png", "/heronames/Ivy_name.svg",{
    ability1: {
      name: "Entangling Thorns",
      description:
        "Summon choking thorns that damage and slow enemies in an area. Can immobilize on max level.",
      rating: 5,
      tags: ["CC", "teamfight", "pressure"],
      imageSrc: "/abilities/Entangling_Thorns.png",
    },
  
    ability2: {
      name: "Kudzu Connection",
      description:
        "Connect with an ally to share bonuses, replicate healing, gain lifesteal, and reduce shooting movement penalties.",
      rating: 9,
      tags: ["sustain", "utility", "teamfight"],
      imageSrc: "/abilities/Kudzu_Connection.png",
    },
  
    ability3: {
      name: "Stone Form",
      description:
        "Turn into stone, become briefly protected, crash down to damage and stun nearby enemies, and heal yourself.",
      rating: 9,
      tags: ["sustain", "CC", "tankiness"],
      imageSrc: "/abilities/Stone_Form.png",
    },
  
    ultimate: {
      name: "Air Drop",
      description:
        "Grab an ally and fly with them, then drop them into an explosive landing that buffs outgoing damage afterward.",
      rating: 8,
      tags: ["mobility", "utility", "teamfight"],
      imageSrc: "/abilities/Air_Drop.png",
    },
  
    gun: {
      name: "Protector's Hand",
      description:
        "Rapid Fire, Medium Range, 61 DPS",
      rating: 9,
      tags: [],
      imageSrc: "/heroes/Ivy.png",
    },
  
    stats: {
      name: "Support Controller",
      description:
        "Decreased Gravity.",
      rating: 7,
      tags: [],
      imageSrc: "/heroes/Ivy.png",
    },
  }),

  makeHero("ladygeist24", "Lady Geist", "/heroes/Lady_Geist.png", "/heronames/Lady_Geist_name.svg",{
    ability1: {
      name: "Essence Bomb",
      description:
        "Sacrifice health to launch a bomb that explodes after a brief delay, dealing strong area spirit damage.",
      rating: 7,
      tags: ["burst", "poke"],
      imageSrc: "/abilities/Essence_Bomb.png",
    },
  
    ability2: {
      name: "Life Drain",
      description:
        "Tether an enemy to drain their health over time and heal yourself while still allowing you to shoot and cast.",
      rating: 8,
      tags: ["sustain", "dueling", "pressure"],
      imageSrc: "/abilities/Life_Drain.png",
    },
  
    ability3: {
      name: "Malice",
      description:
        "Sacrifice health to fire blood shards that slow enemies and increase the damage they take from you.",
      rating: 8,
      tags: ["pressure", "dueling", "CC"],
      imageSrc: "/abilities/Malice.png",
    },
  
    ultimate: {
      name: "Soul Exchange",
      description:
        "Swaps health levels with an enemy target. There is a minimum health percentage that enemies can be brought down to and a minimum amount of health received based on victims current health.",
      rating: 6,
      tags: ["sustain", "dueling", "utility"],
      imageSrc: "/abilities/Soul_Exchange.png",
    },
  
    gun: {
      name: "Johann's Gift",
      description:
        "Medium Range, Heavy Hitter, 44 DPS",
      rating: 6,
      tags: [],
      imageSrc: "/heroes/Lady_Geist.png",
    },
  
    stats: {
      name: "Risky Sustain Caster",
      description:
        "Trades health for damage, then survives through drain effects, damage amp, and dangerous comeback potential.",
      rating: 7,
      tags: [],
      imageSrc: "/heroes/Lady_Geist.png",
    },
  }),
  
  makeHero("mcginnis", "McGinnis", "/heroes/McGinnis.png", "/heronames/McGinnis_name.svg", {
    ability1: {
      name: "Mini Turret",
      description:
        "Deploy a turret that shoots nearby enemies over time, creating sustained pressure and space control.",
      rating: 8,
      tags: ["pressure", "utility", "scaling"],
      imageSrc: "/abilities/Mini_Turret.png",
    },
  
    ability2: {
      name: "Medicinal Specter",
      description:
        "Deploy a healing spirit that restores nearby allies and can provide strong defensive buffs.",
      rating: 7,
      tags: ["sustain", "utility", "teamfight"],
      imageSrc: "/abilities/Medicinal_Specter.png",
    },
  
    ability3: {
      name: "Spectral Wall",
      description:
        "Cast a wall that slows enemies, divides terrain, and can erupt to damage enemies near it.",
      rating: 7,
      tags: ["CC", "utility", "teamfight"],
      imageSrc: "/abilities/Spectral_Wall.png",
    },
  
    ultimate: {
      name: "Heavy Barrage",
      description:
        "Unleash a long rocket barrage that homes toward a target area, dealing sustained explosive damage.",
      rating: 6,
      tags: ["teamfight", "pressure", "poke"],
      imageSrc: "/abilities/Heavy_Barrage.png",
    },
  
    gun: {
      name: "Services Rendered",
      description:
        "Medium Range, Rapid Fire, 76 DPS",
      rating: 9,
      tags: [],
      imageSrc: "/heroes/McGinnis.png",
    },
  
    stats: {
      name: "Zone Engineer",
      description:
        "Controls space through turrets, walls, healing zones, and sustained weapon pressure.",
      rating: 4,
      tags: [],
      imageSrc: "/heroes/McGinnis.png",
    },
  }),
  
  makeHero("mirage", "Mirage", "/heroes/Mirage.png", "/hero-names/Mirage_name.svg", {
    ability1: {
      name: "Fire Scarabs",
      description:
        "Infest an enemy with scarabs that steal life over time and reduce the damage they deal.",
      rating: 6,
      tags: ["sustain", "dueling", "utility"],
      imageSrc: "/abilities/Fire_Scarabs.png",
    },
  
    ability2: {
      name: "Dust Devil",
      description:
        "Transform into a forward-moving whirlwind, damaging, slowing, and lifting enemies while gaining bullet evasion afterward.",
      rating: 8,
      tags: ["mobility", "CC", "escape"],
      imageSrc: "/abilities/Dust_Devil.png",
    },
  
    ability3: {
      name: "Djinn's Mark",
      description:
        "Your shots apply stacking marks that reveal enemies and deal spirit damage when triggered or consumed.",
      rating: 9,
      tags: ["pressure", "scaling", "poke"],
      imageSrc: "/abilities/Djinn-s_Mark.png",
    },
  
    ultimate: {
      name: "Traveler",
      description:
        "Teleport to a selected map location after a delay, gaining strong movement and combat bonuses on arrival.",
      rating: 6,
      tags: ["mobility", "utility"],
      imageSrc: "/abilities/Traveler.png",
    },
  
    gun: {
      name: "Promises Kept",
      description:
        "Medium Range Heavy Hitter, 44 DPS",
      rating: 5,
      tags: [],
      imageSrc: "/heroes/Mirage.png",
    },
  
    stats: {
      name: "Map Skirmisher",
      description:
        "Built to pressure targets, rotate quickly, and turn isolated fights into favorable engagements.",
      rating: 5,
      tags: [],
      imageSrc: "/heroes/Mirage.png",
    },
  }),

  makeHero("mo-and-krill", "Mo & Krill", "/heroes/Mo_&_Krill.png", "/heronames/Mo_&_Krill_name.svg", {
    ability1: {
      name: "Scorn",
      description:
        "Damage nearby enemies and heal yourself based on damage dealt, with stronger healing against enemy heroes.",
      rating: 4,
      tags: ["sustain"],
      imageSrc: "/abilities/Scorn.png",
    },
  
    ability2: {
      name: "Burrow",
      description:
        "Burrow underground with bonus speed and resistances, then erupt to damage, slow, and knock up enemies.",
      rating: 6,
      tags: ["mobility", "engage", "tankiness"],
      imageSrc: "/abilities/Burrow.png",
    },
  
    ability3: {
      name: "Sand Blast",
      description:
        "Spray sand in front of you, damaging and disarming enemies while later upgrades add slows and dash reduction.",
      rating: 6,
      tags: ["CC", "utility"],
      imageSrc: "/abilities/Sand_Blast.png",
    },
  
    ultimate: {
      name: "Combo",
      description:
        "Hold a target in place, stunning and damaging them during the channel while gaining permanent max health if they die.",
      rating: 10,
      tags: ["CC", "dueling", "scaling"],
      imageSrc: "/abilities/Combo.png",
    },
  
    gun: {
      name: "Yellow Canary",
      description:
        "Rapid Fire, Spreadshot, 60 DPS",
      rating: 5,
      tags: [],
      imageSrc: "/heroes/Mo_&_Krill.png",
    },
  
    stats: {
      name: "Lockdown Brawler",
      description:
        "Built to dive into fights, disrupt enemies, survive pressure, and win close-range skirmishes.",
      rating: 3,
      tags: [],
      imageSrc: "/heroes/Mo_&_Krill.png",
    },
  }),

  makeHero("paige", "Paige", "/heroes/Paige.png", "/heronames/Paige_name.svg", {
    ability1: {
      name: "Bookwyrm",
      description:
        "Conjure a dragon that flies forward, dealing spirit damage and leaving a burning trail behind it.",
      rating: 6,
      tags: ["poke", "pressure"],
      imageSrc: "/abilities/Bookwyrm.png",
    },
  
    ability2: {
      name: "Plot Armor",
      description:
        "Grant an ally a barrier that also gives bonus weapon damage while the shield holds.",
      rating: 8,
      tags: ["utility", "sustain"],
      imageSrc: "/abilities/Plot_Armor.png",
    },
  
    ability3: {
      name: "Captivating Read",
      description:
        "Target an area with latent magic that slows enemies, then detonates to damage and immobilize them.",
      rating: 7,
      tags: ["CC"],
      imageSrc: "/abilities/Captivating_Read.png",
    },
  
    ultimate: {
      name: "Rallying Charge",
      description:
        "Send spectral knights across the city, healing allies, damaging enemies, and stunning enemies hit.",
      rating: 8,
      tags: ["teamfight", "utility", "sustain"],
      imageSrc: "/abilities/Rallying_Charge.png",
    },
  
    gun: {
      name: "Chapter's End",
      description:
        "Rapid Fire, Long Range, 70 DPS",
      rating: 3,
      tags: [],
      imageSrc: "/heroes/Paige.png",
    },
  
    stats: {
      name: "Backline Enchanter",
      description:
        "Excels at supporting allies, controlling space, and influencing fights from long range.",
      rating: 5,
      tags: [],
      imageSrc: "/heroes/Paige.png",
    },
  }),


  makeHero("paradox", "Paradox", "/heroes/Paradox.png", "/heronames/Paradox_name.svg", {
    ability1: {
      name: "Pulse Grenade",
      description:
        "Throw a grenade that pulses outward, damaging and a grenade that pulses outward, damaging and slowing enemies while increasing Paradox's damage against them.",
      rating: 7,
      tags: ["pressure"],
      imageSrc: "/abilities/Pulse_Grenade.png",
    },

    ability2: {
      name: "Time Wall",
      description:
        "Create a wall that stops enemy projectiles, empowers allied bullets, and slows that stops enemy projectiles, empowers allied bullets, and slows and silences enemies who pass through it.",
      rating: 7,
      tags: ["utility", "CC"],
      imageSrc: "/abilities/Time_Wall.png",
    },

    ability3: {
      name: "Kinetic Carbine",
      description:
        "Charge a powerful shot that deals heavy damage shot that deals heavy damage and briefly time-stops enemies hit.",
      rating: 8,
      tags: ["burst", "CC"],
      imageSrc: "/abilities/Kinetic_Carbine.png",
    },

    ultimate: {
      name: "Paradoxical Swap",
      description:
        "Fire a projectile that swaps your position with an enemy hero, damaging them and creating deadly and briefly time-stops enemies hit.",
      rating: 6,
      tags: ["burst", "CC"],
      imageSrc: "/abilities/Paradoxical_Swap.png",
    },

    gun: {
      name: "Trade Secret",
      description:
        "Burst Fire, Medium Range, 51 DPS",
      rating: 7,
      tags: [],
      imageSrc: "/heroes/Paradox.png",
    },

    stats: {
      name: "Time Controller",
      description:
        "Built around setup, displacement, projectile control, and converting precise hits into picks.",
      rating: 5,
      tags: [],
      imageSrc: "/heroes/Paradox.png",
    },
  }),

  makeHero("rem", "Rem", "/heroes/Rem.png", "/heronames/Rem_name.svg", {
    ability1: {
      name: "Pillow Toss",
      description:
        "Throw a pillow that damages, slows, and heavily knocks enemies back while reducing your other ability cooldowns on hit.",
      rating: 7,
      tags: ["poke", "utility"],
      imageSrc: "/abilities/Pillow_Toss.png",
    },
  
    ability2: {
      name: "Tag Along",
      description:
        "Jump to an ally and nap alongside them, healing both of you while becoming untargetable and redirecting self-casts to your ally.",
      rating: 9,
      tags: ["sustain", "utility"],
      imageSrc: "/abilities/Tag_Along.png",
    },
  
    ability3: {
      name: "Lil Helpers",
      description:
        "Send helpers to support allies, empower troopers, collect resources, buy items, and provide teamwide utility.",
      rating: 6,
      tags: ["utility", "farming", "sustain"],
      imageSrc: "/abilities/Lil_Helpers.png",
    },
  
    ultimate: {
      name: "Naptime",
      description:
        "Channel a wide gaze through terrain, slowing enemies and disabling movement before putting them to sleep and damaging them on wake.",
      rating: 7,
      tags: ["teamfight", "CC"],
      imageSrc: "/abilities/Naptime.png",
    },
  
    gun: {
      name: "Long Night",
      description:
        "Medium Range, Burst Fire, 62 DPS",
      rating: 4,
      tags: [],
      imageSrc: "/heroes/Rem.png",
    },
  
    stats: {
      name: "Dream Support",
      description:
        "Tiny, nimble.",
      rating: 7,
      tags: [],
      imageSrc: "/heroes/Rem.png",
    },
  }),

  makeHero("seven", "Seven", "/heroes/Seven.png", "/heronames/Seven_name.svg", {
    ability1: {
      name: "Lightning Ball",
      description:
        "Fire a ball of lightning that travels forward, damaging enemies in its radius and slowing down while hitting targets.",
      rating: 7,
      tags: ["pressure", "poke"],
      imageSrc: "/abilities/Lightning_Ball.png",
    },
  
    ability2: {
      name: "Static Charge",
      description:
        "Apply a delayed charge to an enemy hero that stuns and damages enemies around them after a short duration.",
      rating: 8,
      tags: ["CC"],
      imageSrc: "/abilities/Static_Charge.png",
    },
  
    ability3: {
      name: "Power Surge",
      description:
        "Empower your weapon so burst shots deal bonus shock damage that bounces between nearby enemies.",
      rating: 9,
      tags: ["pressure"],
      imageSrc: "/abilities/Power_Surge.png",
    },
  
    ultimate: {
      name: "Storm Cloud",
      description:
        "Channel a massive expanding storm that damages enemies in line of sight and can call down a knockback lightning strike.",
      rating: 7,
      tags: ["teamfight", "pressure"],
      imageSrc: "/abilities/Storm_Cloud.png",
    },
  
    gun: {
      name: "Cold Calculus",
      description:
        "Medium Range, Burst Fire, 63 DPS",
      rating: 8,
      tags: [],
      imageSrc: "/heroes/Seven.png",
    },
  
    stats: {
      name: "Storm Carry",
      description:
        "Built to scale into huge sustained damage, control crowded fights, and overwhelm enemies with electric pressure.",
      rating: 5,
      tags: [],
      imageSrc: "/heroes/Seven.png",
    },
  }),

  makeHero("silver", "Silver", "/heroes/Silver.png", "/heronames/Silver_name.svg", {
    ability1: {
      name: "Slam Fire",
      description:
        "Instantly reload and empower several shots, then in Lycan form slash enemies in front of you for missing-health damage and lifesteal.",
      rating: 7,
      tags: ["pressure", "burst"],
      imageSrc: "/abilities/Slam_Fire.png",
    },
  
    ability2: {
      name: "Boot Kick",
      description:
        "Dash forward and kick the first enemy hit, dealing melee damage while pushing yourself off and marking them.",
      rating: 4,
      tags: ["mobility", "engage"],
      imageSrc: "/abilities/Boot_Kick.png",
    },
  
    ability3: {
      name: "Entangling Bola",
      description:
        "Throw a bola, dealing  spirit damage, applying slow and preventing movement abilities or stamina.",
      rating: 6,
      tags: ["CC", "utility", "dueling"],
      imageSrc: "/abilities/Entangling_Bola.png",
    },
  
    ultimate: {
      name: "Lycan Curse",
      description:
        "Instantly transform, gaining increased max health, and stacking fire rate on enemy heroes, and replacing your abilities and weapon with their ferocious versions.",
      rating: 9,
      tags: ["dueling", "sustain", "scaling"],
      imageSrc: "/abilities/Lycan_Curse.png",
    },
  
    gun: {
      name: "Hair of the Dog",
      description:
        "A medium-range spreadshot weapon that transforms into a close-range cone attack with no ammo or reload.",
      rating: 6,
      tags: [],
      imageSrc: "/heroes/Silver.png",
    },
  
    stats: {
      name: "Feral Skirmisher",
      description:
        "Built to brawl aggressively, transform at the right moment, chase enemies down, and snowball through extended fights.",
      rating: 6,
      tags: [],
      imageSrc: "/heroes/Silver.png",
    },
  }),

  makeHero("sinclair", "Sinclair", "/heroes/Sinclair.png", "/heronames/Sinclair_name.svg", {
    ability1: {
      name: "Vexing Bolt",
      description:
        "Fire a bolt of magic that deals Spirit Damage, increasing as it travels. If you have an Assistant, they also cast Vexing Bolt at reduced damage. Able to be redirected.",
      rating: 5,
      tags: ["poke", "burst"],
      imageSrc: "/abilities/Vexing_Bolt.png",
    },
  
    ability2: {
      name: "Spectral Assistant",
      description:
        "Summon an Assistant that attacks when you fire, reloads your weapon, and lets you swap positions with it.",
      rating: 7,
      tags: ["utility", "mobility"],
      imageSrc: "/abilities/Spectral_Assistant.png",
    },
  
    ability3: {
      name: "Rabbit Hex",
      description:
        "Hex an area, transforming enemies into rabbits that cannot perform most actions and take increased damage.",
      rating: 6,
      tags: ["CC", "utility"],
      imageSrc: "/abilities/Rabbit_Hex.png",
    },
  
    ultimate: {
      name: "Audience Participation",
      description:
        "Copy the Ultimate of an enemy hero for a limited time. Reactivating the ability will use the Copied Ultimate instead.",
      rating: 7,
      tags: ["utility", "teamfight"],
      imageSrc: "/abilities/Audience_Participation.png",
    },
  
    gun: {
      name: "The Prestige",
      description:
        "Long Range, Burst Fire, Projectile, 48 DPS",
      rating: 4,
      tags: [],
      imageSrc: "/heroes/Sinclair.png",
    },
  
    stats: {
      name: "Trickster Mage",
      description:
        "Built around misdirection, long-range poke, clone pressure, disables, and flexible fight-changing plays.",
      rating: 4,
      tags: [],
      imageSrc: "/heroes/Sinclair.png",
    },
  }),

  makeHero("vindicta", "Vindicta", "/heroes/Vindicta.png", "/heronames/Vindicta_name.svg", {
    ability1: {
      name: "Stake",
      description:
        "Throw a stake that tethers enemies to its landing location, restricting their movement and limiting escape options.",
      rating: 6,
      tags: ["CC", "utility"],
      imageSrc: "/abilities/Stake.png",
    },
  
    ability2: {
      name: "Flight",
      description:
        "Leap into the air and fly, gaining bonus spirit damage on bullets and increased item range while airborne.",
      rating: 8,
      tags: ["mobility", "poke", "pressure"],
      imageSrc: "/abilities/Flight.png",
    },
  
    ability3: {
      name: "Crow Familiar",
      description:
        "Send your crow to damage an enemy, reduce their resists, and apply a current-health bleed with healing reduction upgrades.",
      rating: 6,
      tags: ["pressure", "anti-sustain"],
      imageSrc: "/abilities/Crow_Familiar.png",
    },
  
    ultimate: {
      name: "Assassinate",
      description:
        "Fire a long-range scoped shot that deals bonus damage to low-health enemies and grants permanent weapon damage on hero kills.",
      rating: 9,
      tags: ["finisher", "scaling"],
      imageSrc: "/abilities/Assassinate.png",
    },
  
    gun: {
      name: "Wallflower's Revenge",
      description:
        "Long Range, Rapid Fire, 53 DPS",
      rating: 8,
      tags: [],
      imageSrc: "/heroes/Vindicta.png",
    },
  
    stats: {
      name: "Aerial Sniper",
      description:
        "Built to fight from long range, control enemy movement, secure executions, and scale through pickoffs.",
      rating: 5,
      tags: [],
      imageSrc: "/heroes/Vindicta.png",
    },
  }),


  makeHero("viscous", "Viscous", "/heroes/Viscous.png", "/heronames/Viscous_name.svg", {
    ability1: {
      name: "Splatter",
      description:
        "Throw a bouncing ball of goo that damages enemies and leaves slowing puddles that allies can slide across faster.",
      rating: 7,
      tags: ["poke", "CC"],
      imageSrc: "/abilities/Splatter.png",
    },
  
    ability2: {
      name: "The Cube",
      description:
        "Encases yourself or an ally in restorative goo, preventing damage while increasing health regen.",
      rating: 9,
      tags: ["sustain", "utility", "escape"],
      imageSrc: "/abilities/The_Cube.png",
    },
  
    ability3: {
      name: "Puddle Punch",
      description:
        "Materialize a fist that knocks enemies up, slows them, and gives allies increased air control.",
      rating: 9,
      tags: ["CC", "teamfight", "poke"],
      imageSrc: "/abilities/Puddle_Punch.png",
    },
  
    ultimate: {
      name: "Goo Ball",
      description:
        "Morph into a large bouncing goo ball with strong resistances, stunning and damaging enemies on impact. Can use abilities while casting.",
      rating: 9,
      tags: ["mobility", "tankiness", "CC"],
      imageSrc: "/abilities/Goo_Ball.png",
    },
  
    gun: {
      name: "Deep Sea Interpreter",
      description:
        "Medium Range, Projectile, 49 DPS",
      rating: 6,
      tags: [],
      imageSrc: "/heroes/Viscous.png",
    },
  
    stats: {
      name: "Goo Playmaker",
      description:
        "Built around saves, displacement, slows, and chaotic mobility that makes fights hard to control.",
      rating: 5,
      tags: [],
      imageSrc: "/heroes/Viscous.png",
    },
  }),

  makeHero("warden", "Warden", "/heroes/Warden.png", "/heronames/Warden_name.svg", {
    ability1: {
      name: "Alchemical Flask",
      description:
        "Throw a flask that damages enemies while reducing their movement speed and weapon damage.",
      rating: 6,
      tags: ["poke", "utility", "CC"],
      imageSrc: "/abilities/Alchemical_Flask.png",
    },
  
    ability2: {
      name: "Willpower",
      description:
        "Gain a barrier and bonus movement speed, with later upgrades adding strong debuff resistance.",
      rating: 7,
      tags: ["tankiness", "mobility"],
      imageSrc: "/abilities/Willpower.png",
    },
  
    ability3: {
      name: "Binding Word",
      description:
        "Curse an enemy hero, forcing them to escape their starting position or become damaged and immobilized.",
      rating: 9,
      tags: ["CC", "dueling"],
      imageSrc: "/abilities/Binding_Word.png",
    },
  
    ultimate: {
      name: "Last Stand",
      description:
        "Channel powerful pulses that damage nearby enemies and heal you, while gaining massive bullet and spirit resistance.",
      rating: 8,
      tags: ["teamfight", "sustain", "tankiness"],
      imageSrc: "/abilities/Last_Stand.png",
    },
  
    gun: {
      name: "Freedom's Cost",
      description:
        "Medium Range, Projectile, 66 DPS",
      rating: 8,
      tags: [],
      imageSrc: "/heroes/Warden.png",
    },
  
    stats: {
      name: "Lockdown Juggernaut",
      description:
        "FACE ME AND DIE",
      rating: 8,
      tags: [],
      imageSrc: "/heroes/Warden.png",
    },
  }),


  makeHero("wraith", "Wraith", "/heroes/Wraith.png", "/heronames/Wraith_name.svg", {
    ability1: {
      name: "Card Trick",
      description:
        "Generate and throw cards that deal damage while applying suit-based effects like bonus damage, resist reduction, slow, or healing.",
      rating: 8,
      tags: ["pressure", "poke", "sustain"],
      imageSrc: "/abilities/Card_Trick.png",
    },
  
    ability2: {
      name: "Project Mind",
      description:
        "Teleport to a targeted location, giving Wraith strong repositioning, chase, and escape potential.",
      rating: 8,
      tags: ["mobility", "escape"],
      imageSrc: "/abilities/Project_Mind.png",
    },
  
    ability3: {
      name: "Full Auto",
      description:
        "Temporarily boost fire rate and add bonus spirit damage to your bullets for strong sustained weapon pressure.",
      rating: 8,
      tags: ["pressure", "dueling", "scaling"],
      imageSrc: "/abilities/Full_Auto.png",
    },
  
    ultimate: {
      name: "Telekinesis",
      description:
        "Lift an enemy hero into the air, then slam them toward a target location, stunning, slowing, and limiting movement options.",
      rating: 10,
      tags: ["CC", "dueling"],
      imageSrc: "/abilities/Telekinesis.png",
    },
  
    gun: {
      name: "The Rake",
      description:
        "Medium Range, Rapid Fire, 60 DPS",
      rating: 9,
      tags: [],
      imageSrc: "/heroes/Wraith.png",
    },
  
    stats: {
      name: "Mobile Gun Carry",
      description:
        "Built to teleport around fights, scale through weapon pressure, and delete isolated targets with lockdown.",
      rating: 6,
      tags: [],
      imageSrc: "/heroes/Wraith.png",
    },
  }),

  makeHero("yamato", "Yamato", "/heroes/Yamato.png", "/heronames/Yamato_name.svg", {
    ability1: {
      name: "Power Slash",
      description:
        "Charge a powerful sword strike that can be released early or fully charged for massive spirit damage.",
      rating: 9,
      tags: ["burst", "poke", "dueling"],
      imageSrc: "/abilities/Power_Slash.png",
    },
  
    ability2: {
      name: "Flying Slash",
      description:
        "Grapple toward an enemy, slashing them on arrival and slowing them to continue the chase.",
      rating: 8,
      tags: ["mobility", "engage"],
      imageSrc: "/abilities/Flying_Slash.png",
    },
  
    ability3: {
      name: "Crimson Slash",
      description:
        "Slash enemies in front of you, reducing their fire rate and healing yourself when enemy heroes are hit.",
      rating: 7,
      tags: ["sustain", "dueling", "utility"],
      imageSrc: "/abilities/Crimson_Slash.png",
    },
  
    ultimate: {
      name: "Shadow Transformation",
      description:
        "Transform with brief invincibility, refresh your abilities, cast faster, gain resistances, and extend the duration on hero kills.",
      rating: 10,
      tags: ["dueling", "tankiness", "scaling"],
      imageSrc: "/abilities/Shadow_Transformation.png",
    },
  
    gun: {
      name: "Sister's Lament",
      description:
        "Spreadshot, Close Range, 63 DPS",
      rating: 6,
      tags: [],
      imageSrc: "/heroes/Yamato.png",
    },
  
    stats: {
      name: "Shadow Duelist",
      description:
        "Built to dive targets, burst them down, sustain through close fights, and snowball during transformation windows.",
      rating: 7,
      tags: [],
      imageSrc: "/heroes/Yamato.png",
    },
  }),
];