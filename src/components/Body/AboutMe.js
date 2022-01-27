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
      weaknessIcon: "",
      description:
        "Spits fire that is hot enough to melt boulders. known to unintentionally cause forest fires.",
    },
    {
      rarity: "Basic",
      name: "Eevee",
      type: "normal",
      health: "70HP",
      icon: "./fire.png",
      picture: "./eevee.jpg",
      meta: `Flame Pokemon. Length: 5'7", Weight 200lbs.`,
      abilities: [
        { name: "Gnaw", description: "", damage: "10", icons: ["./fire.png"] },
        {
          name: "Tail Whap",
          description: "",
          damage: "20",
          icons: ["./fire.png", "./fire.png"],
        },
      ],
      weaknessIcon: "",
      description:
        "It has the ability to alter the composition of its body to suit its surrounding environment.",
    },
    {
      rarity: "Basic",
      name: "Horsea",
      type: "water",
      health: "50HP",
      icon: "./fire.png",
      picture: "./horsea.jpg",
      meta: `Dragon Pokemon. Length: 1'04", Weight 17.6lbs.`,
      abilities: [
        {
          name: "Smokescreen",
          description: "Spray smoke on opponent",
          damage: "10",
          icons: ["./fire.png"],
        },
        {
          name: "Reverse Thrust",
          description: "Switch Horsea with 1 of your benched Pokemon",
          damage: "10",
          icons: ["./fire.png"],
        },
      ],
      weaknessIcon: "",
      description:
        "It makes its nest in the shade of corals. If it senses danger, it spits murky ink and flees.",
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
