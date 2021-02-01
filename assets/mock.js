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
        id: 3212131,
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
        id: 2423324,
        name: "Vara fixe",
        icon: "wand",
        attributes: [
          { type: "sabiduria", points: 10 },
          { type: "intuicion", points: 3 },
        ],
        combat: [],
        description:
          "Lorem ipsum dolor sit.  In cursus at urna in gravida. Nullam sodales",
        resistances: [
          {
            name: "Hielo",
            description: "Viene del equipamiento",
          },
        ],
      },
    ],
    backpack: [
      {
        id: 34663,
        name: "Escudo ligero",
        icon: "shield",
        description: "Lorem ipsum dolor sit.",
        attributes: [],
        combat: [{ type: "armadura", points: 8 }],
        resistances: [],
      },
      {
        id: 4342,
        name: "Botas de cuero",
        icon: "boots",
        description: "Lorem ipsum dolor sit.",
        attributes: [],
        combat: [{ type: "evasion", points: 2 }],
        resistances: [],
      },
      {
        id: 71575,
        name: "Capa",
        icon: "cape",
        description: "Lorem ipsum dolor sit.",
        attributes: [{ type: "destreza", points: 3 }],
        combat: [{ type: "armadura", points: 1 }],
        resistances: [],
      },
      {
        id: 9906,
        name: "Collar cuático",
        icon: "necklace",
        description: "Lorem ipsum dolor sit.",
        attributes: [{ type: "sabiduria", points: 3 }],
        combat: [],
        resistances: [
          {
            name: "Hielo",
            description: "Viene del equipamiento",
          },
        ],
      },
      {
        id: 7435,
        name: "Casco brigido",
        icon: "helmet",
        description: "Lorem ipsum dolor sit.",
        attributes: [],
        combat: [{ type: "armadura", points: 3 }],
        resistances: [],
      },
      {
        id: 346631,
        name: "Escudo ligero",
        icon: "shield",
        description: "Lorem ipsum dolor sit.",
        attributes: [],
        combat: [{ type: "armadura", points: 8 }],
        resistances: [],
      },
      {
        id: 43421,
        name: "Botas de cuero",
        icon: "boots",
        description: "Lorem ipsum dolor sit.",
        attributes: [],
        combat: [{ type: "evasion", points: 2 }],
        resistances: [],
      },
      {
        id: 715751,
        name: "Capa",
        icon: "cape",
        description: "Lorem ipsum dolor sit.",
        attributes: [{ type: "destreza", points: 3 }],
        combat: [{ type: "armadura", points: 1 }],
        resistances: [],
      },
      {
        id: 99061,
        name: "Collar cuático",
        icon: "necklace",
        description: "Lorem ipsum dolor sit.",
        attributes: [{ type: "sabiduria", points: 3 }],
        combat: [],
        resistances: [
          {
            name: "Hielo",
            description: "Viene del equipamiento",
          },
        ],
      },
      {
        id: 74351,
        name: "Casco brigido",
        icon: "helmet",
        description: "Lorem ipsum dolor sit.",
        attributes: [],
        combat: [{ type: "armadura", points: 3 }],
        resistances: [],
      },
    ],
  },
};
