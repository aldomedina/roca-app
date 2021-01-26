export default {
  id: 9,
  slug: "chorizo-print",
  name: "Chorizo Print",
  party: "misterios-de-los-iliadis",
  class: "Druide",
  color: "blue",
  stats: {
    level: 2,
    hp: { total: 55, active: 17 },
    attributes: {
      fuerza: { points: 2, ts: false },
      destreza: { points: 0, ts: true },
      intuicion: { points: 0, ts: false },
      constitucion: { points: -1, ts: true },
      sabiduria: { points: 3, ts: false },
      carisma: { points: 4, ts: false },
    },
    combat: {
      evasion: 6,
      armadura: 8,
      iniciativa: 3,
      golpe: 1,
    },
    resistances: [
      {
        name: "Fuego",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus at urna in gravida. Nullam sodales porta sapien nec convallis.",
      },
      {
        name: "Muerte",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus at urna in gravida. Nullam sodales porta sapien nec convallis.",
      },
    ],
    skills: [
      {
        name: "Misil arcano",
        dices: 3,
        dice: 4,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus at urna in gravida. Nullam sodales porta sapien nec convallis.",
      },
      {
        name: "Abanico arcano",
        dices: 3,
        dice: 4,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus at urna in gravida. Nullam sodales porta sapien nec convallis.",
      },
    ],
  },
  items: {
    active: [
      {
        name: "Armadura de cuero",
        icon: "armor",
        attributes: [
          { type: "intuicion", points: 3 },
          { type: "carisma", points: -1 },
        ],
        combat: [{ type: "armadura", points: 10 }],
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur placeat nam ratione ab harum quam, maiores libero at.",
        resistances: [
          {
            name: "Hielo",
            description: "Viene del equipamiento",
          },
          {
            name: "Muerte",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus at urna in gravida. Nullam sodales porta sapien nec convallis.",
          },
        ],
      },
      {
        name: "Vara fixe",
        icon: "wand",
        attributes: [{ type: "sabiduria", points: 10 }],
        combat: [],
        description:
          "Lorem ipsum dolor sit.  In cursus at urna in gravida. Nullam sodales",
        resistances: [],
      },
    ],
    backpack: [
      {
        name: "Escudo ligero",
        icon: "shield",
        attributes: [],
        combat: [{ type: "armadura", points: 8 }],
        description: "Lorem ipsum dolor sit.",
        resistances: [],
      },
      {
        name: "Botas de cuero",
        icon: "boots",
        attributes: [],
        combat: [{ type: "evasion", points: 2 }],
        description: "Lorem ipsum dolor sit.",
        resistances: [],
      },
      {
        name: "Capa",
        icon: "cape",
        attributes: [{ type: "destreza", points: 3 }],
        combat: [{ type: "armadura", points: 1 }],
        description: "Lorem ipsum dolor sit.",
        resistances: [],
      },
      {
        name: "Collar cuático",
        icon: "necklace",
        attributes: [],
        attributes: [{ type: "sabiduria", points: 3 }],
        description: "Lorem ipsum dolor sit.",
        resistances: [
          {
            name: "Hielo",
            description: "Viene del equipamiento",
          },
        ],
      },
      {
        name: "Casco brigido",
        icon: "helmet",
        attributes: [],
        combat: [{ type: "armadura", points: 3 }],
        description: "Lorem ipsum dolor sit.",
        resistances: [],
      },
    ],
  },
};
