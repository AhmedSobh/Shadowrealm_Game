const creatures = [
  {
    name: "Shadow Revenant",
    img: "shadowRevenant.png",
    atk: 2500,
    def: 2000,
    type: "Melee Attacker",
    description:
      "A mysterious shadow warrior who feeds on fear, striking swiftly in close combat.",
  },
  {
    name: "Demon Lizard",
    img: "demonLizard.png",
    atk: 1950,
    def: 500,
    type: "Ranged (Fire)",
    description:
      "A demonic reptile that spews infernal flames from afar, wearing enemies down before they reach him.",
  },
  {
    name: "Light Assassin",
    img: "lightAssassin.png",
    atk: 3200,
    def: 1500,
    type: "Melee Attacker",
    description:
      "A swift killer who channels the speed of light to pierce enemy defenses with a single decisive strike.",
  },
  {
    name: "Solar Guardian",
    img: "solarGardian.png",
    atk: 2000,
    def: 3000,
    type: "Support / Defense",
    description:
      "A radiant guardian who shields allies and emits light auras that weaken foes.",
  },
  {
    name: "Abyss Serpent",
    img: "abyssSerpent.png",
    atk: 2800,
    def: 2200,
    type: "Ranged",
    description:
      "A massive sea serpent that attacks with torrents of crushing water, disrupting enemy formations.",
  },
  {
    name: "Flame Wraith",
    img: "flameWraith.png",
    atk: 3100,
    def: 1000,
    type: "Ranged",
    description:
      "A destructive fire spirit that engulfs enemies in unquenchable hellfire.",
  },
  {
    name: "Terra Colossus",
    img: "terraColossus.png",
    atk: 3500,
    def: 4000,
    type: "Tank / Defense",
    description:
      "A towering stone giant who moves only to crush enemies beneath unstoppable force.",
  },
  {
    name: "Sylph Windblade",
    img: "sylphWindblade.png",
    atk: 1800,
    def: 1200,
    type: "Fast Melee",
    description:
      "An agile fighter who moves with the speed of wind, striking and vanishing before retaliation.",
  },
];

const container = document.querySelector(".creatures-grid");

creatures.forEach((creature) => {
  const card = `
        <div class="creature-card">
      <h1 class="creature-icon"><img src="${creature.img}" alt="${creature.name}"></h1>
      <h3>${creature.name}</h3>
      <div class="creature-status">
        <p>ATK: ${creature.atk}</p>
        <p>DEF: ${creature.def}</p>
      </div>
      <p class="type">Type: ${creature.type}</p>
      <p>${creature.description}</p>
    </div>
    `;

  container.innerHTML += card;
});
