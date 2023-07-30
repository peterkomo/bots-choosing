import React from "react";
import BotsCards from "./BotsCards";

const BotArmy = ({ yourBotArmy, releaseBot, dischargeBot }) => {
    return (
        <div className="container-fluid">
          <div className="row">
            {yourBotArmy.map((bot) => (
              <BotCard
                key={bot.id}
                bot={bot}
                releaseBot={releaseBot}
                dischargeBot={dischargeBot}
                isEnlisted={true}
              />
            ))}
            </div>
    </div>
  );
};

export default YourBotArmy;
