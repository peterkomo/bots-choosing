import React from "react";
import BotsCards from "./BotsCards";

const CollectionOfBots = ({ bots, enlistBot, yourBotArmy }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        {bots.map(
          (
            bot //iterating throughe each botand and rendered a botscards componene
            ) => (
              <BotsCards
              key={bot.id} // A unique identifier for each bot card (using the bot's ID).
              bot={bot} // The individual bot object, containing all bot details.
              enlistBot={enlistBot}
              yourBotArmy={yourBotArmy}
              />
              )
              )}
              </div>
      </div>
  );
};
export default CollectionOfBots;
