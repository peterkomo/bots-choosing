import React from "react";
// botsCard componenet reseaving many props
const BotsCards = ({ bot, enlistBot, releaseBot, dischargeBot, isEnlisted }) => {
    // destructuring the properties of the bot passed  as a prop
    const {
        id,
        name,
        health,
        damage,
        armor,
        bot_class,
        catchphrase,
        avatar_url,
      } = bot;
    // function to handle click on the bot card
      const handleClick = () => {
        if (isEnlisted) {
          releaseBot(id); // If already enlisted, release the bot
        } else {
          enlistBot(id); // If not enlisted, enlist the bot
        }
      };
