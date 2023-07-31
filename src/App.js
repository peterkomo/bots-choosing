import React,{useState,useEffect} from "react";
import BotsCards from "./components/BotsCards";
import BotArmy from "./components/BotArmy";


const App = () => {
// State variables to hold the list of all bots and the bots enlisted in yourBotArmy
const [bots, setBots] = useState([]);
const [yourBotArmy, setYourBotArmy] = useState([]);

 // useEffect hook to fetch bots from the backend on component mount
 useEffect(() => {
  // Fetch bots from the backend
  fetch("https://api.npoint.io/725e93b04b51723612b0/bots")
  .then((resp) => resp.json())
  .then((data) => setBots(data))
  .catch((error) => {
    console.error("Error fetching bots:", error);
  });
}, []);
//The component uses the useState hook to manage two pieces of state: bots (containing all bots) and yourBotArmy (containing enlisted bots).
// The useEffect hook is used to fetch the list of bots from the backend when the component mounts for the first time. It performs an HTTP GET request to the provided API endpoint using fetch.
