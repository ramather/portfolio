import React from "react";

import PokemonCard from "./AboutComponents/PokemonCard";
const AboutMe = () => {
  const pokemonList = [
    {
      rarity: "Evolves from Charmeleon",
      name: "Charizard",
      type: "fire",
      health: "150HP",
      icon: "./fire.png",
      picture: "./charizard.png",
      meta: `Flame Pokemon. Length: 5'7", Weight 200lbs.`,
      abilities: [
        {
          name: "Fire Spin",
          description: "",
          damage: "150",
          icons: ["./fire.png"],
        },
        {
          name: "Blast Burn",
          description: "Discard 2 Energy cards attached to Charizard",
          damage: "100",
          icons: ["./fire.png", "./fire.png", "./fire.png", "./fire.png"],
        },
      ],
      weakness: "./water.png",
      description:
        "Spits fire that is hot enough to melt boulders. known to unintentionally cause forest fires.",
    },
    {
      rarity: "Basic",
      name: "Eevee",
      type: "normal",
      health: "70HP",
      icon: "./normal.png",
      picture: "./eevee.jpg",
      meta: `Evolution Pokemon. Length: 1', Weight 14lbs.`,
      abilities: [
        { name: "Gnaw", description: "", damage: "10", icons: ["./normal.png"] },
        {
          name: "Tail Whap",
          description: "",
          damage: "20",
          icons: ["./normal.png", "./normal.png"],
        },
      ],
      weakness: "./fight.png",
      cost: "./normal.png",
      description:
        "It has the ability to alter the composition of its body to suit its surrounding environment.",
    },
    {
      rarity: "Basic",
      name: "Horsea",
      type: "water",
      health: "50HP",
      icon: "./water.png",
      picture: "./horsea1.jpg",
      meta: `Dragon Pokemon. Length: 1'04", Weight 17.6lbs.`,
      abilities: [
        {
          name: "Smokescreen",
          description: "Spray smoke on opponent",
          damage: "10",
          icons: ["./water.png"],
        },
        {
          name: "Reverse Thrust",
          description: "Switch Horsea with 1 of your benched Pokemon",
          damage: "10",
          icons: ["./water.png"],
        },
      ],
      weakness: "./electric.png",
      cost: "./normal.png",

      description:
        "It makes its nest in the shade of corals. If it senses danger, it spits murky ink and flees.",
    },{
      rarity: "Basic",
      name: "Pikachu",
      type: "electric",
      health: "40HP",
      icon: "./electric.png",
      picture: "./pikachu.jpg",
      meta: `Mouse Pokemon. Length: 1'04", Weight 13lbs.`,
      abilities: [
        {
          name: "Gnaw",
          description: "",
          damage: "10",
          icons: ["./normal.png"],
        },
        {
          name: "Thunder Jolt",
          description: "Flip a coin. if tails, Pikachu does 10 damage to itself",
          damage: "30",
          icons: ["./normal.png","./electric.png"],
        },
      ],
      weakness: "./ground.png",
      cost: "./normal.png",

      description:
        "When several of these Pokemon gather, their electricity can cause lightning storms.",
    },
  ];

  return (
    <div className="about">
      {pokemonList.map((pokemon) => (
        <PokemonCard pokemon={pokemon} />
      ))}
    </div>
  );
};

export default AboutMe;
