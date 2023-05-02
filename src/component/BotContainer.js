import React, {useState, useEffect} from 'react'
import BotCollectionlist from './BotCollectionlist';
import YourBotArmy from './YourBotArmy';



function BotContainer() {
  // state variables to manage the bots
  const [bots, setBots] = useState([]);
  const [myBots, setMyBots] = useState([])
  // const [selectedBot, setSelectedBot] = useState({});

  // fetch bots data from API when components mounts
  useEffect(() => {
    fetch("http://localhost:3000/bots")
    .then(resp => resp.json())
    .then(data => setBots(data));
  }, []);

  //Add an individual bot to my army by clicking on it
  function handleBotclick(bot){
    const index = myBots.findIndex(x => x.id === bot.id);
    if (index !== -1) {
      const newbot= [...myBots];
      newbot[index] = { ...myBots[index], army: bot.army};
      setMyBots(newbot);
    } else {
        setMyBots([...myBots, bots]);
      }
    }

    function handleDelete(bot) {
    const newBots = myBots.filter(x => x.id !== bot.id);
    setMyBots(newBots);
  } 
    
  //render BotCollectionList
  return (
    <div>
      <YourBotArmy myBots={myBots} handleDelete={handleDelete}/>
      <BotCollectionlist bots={bots} handleBotclick= {handleBotclick} />
      
    </div>
  )

  }
export default BotContainer