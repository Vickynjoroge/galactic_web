import React, {useState, useEffect} from 'react'
import BotCollectionlist from './BotCollectionlist';
import YourBotArmy from './YourBotArmy';

function BotContainer() {
  // state variables to manage the bots
  const[bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  // fetch bots data from API when components mounts
  useEffect(() => {
    fetch("http://localhost:3000/bots")
    .then(resp => resp.json())
    .then(data => setBots(data));
  }, []);

  //Add an individual bot to my army by clicking on it
  function handleAddBotToArmy(bot){
    if (!army.includes(bot)) {
      setArmy([...army, bot]);
    }
  }
  //render BotCollectionList
  return (
    <div>
      <YourBotArmy ary={army}/>
      <BotCollectionlist bots={bots} handleAddBotToArmy={handleAddBotToArmy}/>
    </div>
  )
}

export default BotContainer