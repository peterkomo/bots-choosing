import React,{useState,useEffect} from "react";
//import BotsCards from "./components/BotsCards";
import BotArmy from "./components/BotArmy";
import CollectionOfBots from "./components/CollectonOfBots";


const App = () => {
// State variables to hold the list of all bots and the bots enlisted in yourBotArmy
const [bots, setBots] = useState([]);
const [yourBotArmy, setYourBotArmy] = useState([]);

 // useEffect hook to fetch bots from the backend on component mount
 useEffect(() => {
  // Fetch bots from the backend
  fetch(" http://localhost:3000/bots")
  .then((resp) => resp.json())
  .then((data) => setBots(data))
  .catch((error) => {
    console.error("Error fetching bots:", error);
  });
}, []);
//The component uses the useState hook to manage two pieces of state: bots (containing all bots) and yourBotArmy (containing enlisted bots).
// The useEffect hook is used to fetch the list of bots from the backend when the component mounts for the first time. It performs an HTTP GET request to the provided API endpoint using fetch.

//enlisting realising,and discharging chat bots
const enlistBot = (botId) => {
  const botToEnlist = bots.find((bot) => bot.id === botId);
  if (botToEnlist && !yourBotArmy.some((bot) => bot.id === botId)) {
    setYourBotArmy([...yourBotArmy, botToEnlist]);
  }
};
//find is for geting a specific charachter
//some is to give a specific charachter an action
// Function to release a bot from yourBotArmy
const releaseBot = (botId) => {
  const updatedBotArmy = yourBotArmy.filter((bot) => bot.id !== botId);
  setYourBotArmy(updatedBotArmy);
};
// Function to discharge a bot (remove from yourBotArmy and backend)
const dischargeBot = (botId) => {
  // Delete the bot from the backend
  fetch(`http://localhost:3000/bots/${botId}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        // If successfully deleted from the backend, remove the bot from yourBotArmy state
        const updatedBotArmy = yourBotArmy.filter((bot) => bot.id !== botId);
        setYourBotArmy(updatedBotArmy);
      } else {
        console.error("Error discharging bot:", response);
      }
    })
    .catch((error) => {
      console.error("Error discharging bot:", error);
    });
};
//enlistBot function is used to add a bot to yourBotArmy. It first checks if the bot with the specified ID exists in the list of all bots (bots) and whether it is not 
// rendering components with the correct props 
return (
  <div>
    <h1 className="mt-3">TRANSFORMARS ARMY BOTS</h1>
    <h2>BOTS 2.O</h2>
    <BotArmy
      yourBotArmy={yourBotArmy}
      releaseBot={releaseBot}
      dischargeBot={dischargeBot}
    />
    <h2 className="text-center">ARMYTRICKS</h2>
    <CollectionOfBots
      bots={bots}
      enlistBot={enlistBot}
      yourBotArmy={yourBotArmy}
      releaseBot={releaseBot} // Pass the releaseBot function to BotCollection
      dischargeBot={dischargeBot} // Pass the dischargeBot function to BotCollection
    />
  </div>
);
};
export default App
