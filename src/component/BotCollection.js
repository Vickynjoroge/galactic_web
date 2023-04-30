import React from 'react'
import '../componentCSS/BotCollection.css'

function BotCollection({name, health, damage, armor, bot_class, catchphrase, avatar_url, created_at, updated_at }) {
    function handleClick(){
        handleAddBotToArmy({name, health, damage, armor, bot_class, catchphrase, avatar_url, created_at, updated_at })

    }
  return (
    <div className='botCard' onClick={handleClick}>
        <img src={avatar_url} alt='bot image' />
        <h2>{name}</h2>
        <p>Health: {health}</p>
        <p>Damage: {damage}</p>
        <p>Armor: {armor}</p>
        <p>Bot_Class: {bot_class}</p>
        <p>Catch Phrase: {catchphrase}</p>
        <p>Created at: {created_at}</p>
        <p>Updated at: {updated_at}</p>
    </div>
  )
}

export default BotCollection