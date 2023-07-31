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
      // Function to handle the discharge of a bot
  const handleDischarge = () => {
    if (window.confirm(`Are you sure you want to discharge ${name}?`)) {
      dischargeBot(id); // Confirm with the user and then discharge the bot
    }
  };
// components jsx that will be rendared
   return(
    <div onClick={handleClick} >
        <div>
        <img
         src={avatar_url}
         alt={name}
        
        />
         <h3>Name: {name}</h3>
          <p>Class: {bot_class}</p>
          <p>Health: {health}</p>
          <p>Damage: {damage}</p>
          <p>Armor: {armor}</p>
          <p>Catchphrase: {catchphrase}</p>
          {isEnlisted?(
            <button onclick={handleDischarge}>
                X
            </button>
            ) : (
                <button onClick={handleClick}>Enlist</button>
              )}
            
          

        </div>

    </div>

   ) 
      }
            
export default BotsCards;
