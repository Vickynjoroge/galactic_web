import React from 'react'
import '../componentCSS/YourBotArmy.css'
import SelectedBot from './SelectedBot'

function YourBotArmy({myBots, handleDelete}) {    
  return (
    <div className='army'>
            {myBots.map((bot) => (
                <SelectedBot key={bot.id} bot={bot} handleDelete={handleDelete}/>                   
                
            ))}
      </div>
       
   
    
  )
}


export default YourBotArmy