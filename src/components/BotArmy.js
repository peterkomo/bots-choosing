import React from "react";
import BotsCards from "./BotsCards";

const YourBotArmy = ({ yourBotArmy, releaseBot, dischargeBot }) => {
    return (
        <div >
          <div >
            {yourBotArmy.map((bot) => (
              <BotsCards
                key={bot.id}
                bot={bot}
                releaseBot={releaseBot}
                dischargeBot={dischargeBot}
                isEnlisted={true}// aboolian value set
              />
            ))}
            </div>
    </div>
  );
};

export default YourBotArmy;
