import React from "react";

const AboutCard = () => {
  return (
    <div className="main">
      <div className="pokemon-card">
        <section className="title-row">
          <p className="rarity">Evolves from Charmeleon</p>
          <h1 className="name">Charizard</h1>
          <p className="health">150hp</p>
          <img alt="ywa" className="element-icon" src="./fire.png"></img>
        </section>
        <section className="character-img">
          <img alt="ywa" src="./charizard.png"></img>
        </section>
        <section className="character-meta">
          <p>Flame Pokemon. Length: 5'7", Weight 200lbs.</p>
        </section>
        <section className="character-ability">
          <span class="ability-cost">
            <img alt="ywa" src="./fire.png"></img>
          </span>
          <span className="ability-description">
            <span className="ability-name">Fire Spin</span>
          </span>
          <span className="ability-damage">150</span>
        </section>
        <section className="character-ability">
          <span class="ability-cost">
            <img  alt="ywa" className="element-icon"  src="./fire.png"></img>
            <img alt="ywa" className="element-icon"  src="./fire.png"></img>
            <img alt="ywa" className="element-icon"  src="./fire.png"></img>
            <img alt="ywa" className="element-icon"  src="./fire.png"></img>
          </span>
          <span className="ability-description">
            <span className="ability-name">Blast Burn</span>
            <p>Discard 2 Energy cards attached to Charizard.</p>
          </span>
          <span className="ability-damage">100</span>
        </section>
        <section className="character-stats">
          <span className="character-stat">
            <p>weakness</p>
            <img alt="ywa" className="element-icon" src="./fire.png"></img>
          </span>
          <span className="character-stat">
            <p>resistence</p>
          </span>{" "}
          <span className="character-stat">
            <p>retreat cost</p>
            <img alt="ywa" className="element-icon"  src="./fire.png"></img>
          </span>
        </section>
        <section className="character-description">
            <p>Spits fire that is hot enough to melt boulders. known to unintentionally cause forest fires.</p>
        </section>
        <section></section>
      </div>
    </div>
  );
};

export default AboutCard;
