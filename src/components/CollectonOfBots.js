import React from "react";
import BotsCards from "./BotsCards";
 
const CollectionOfBots=({bots,enlist,yourBotArmy})=>{
    return(
        <div>
            <div>
                {bots.map((bot) =>(//iterating throughe each botand and rendered a botscards componene
                    <BotsCards
                    key={bot.id}// A unique identifier for each bot card (using the bot's ID).
                    bot={bot}// The individual bot object, containing all bot details.
                    enlistBot={enlistBot}//A function to enlist the bot into the user's army.
                    yourBotArmy={yourBotArmy}/>//A boolean value indicating whether the bot is enlisted in the user's army. 
               
               ))}
            </div>
        </div>
    )
}
export default CollectionOfBots