import React from "react";
import PlayingCardList from "./PlayingCardList";
import PokeDex from "./PokeDex";
import "./CardTable.css";

/* Main component. Renders card lists for
 * playing cards and pokemon. */
function CardTable() {
  return (
    <div className="CardTable">
      <main>
        <PlayingCardList />
        <PokeDex />
      </main>
    </div>
  );
}

export default CardTable;
