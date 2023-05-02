import React from 'react'

function SelectedBot({bot, handleDelete}) {
    const {name, health, damage, armor, bot_class, catchphrase, avatar_url, created_at, updated_at } = bot
  return (
    <div onClick={() => handleDelete(bot)}>
        <div>
            <h2>{name}</h2>
            <img src={avatar_url} alt='bot avatar' />
            <p>Health: {health}</p>
            <p>Damage: {damage}</p>
            <p>Armor: {armor}</p>
            <p>Bot_Class: {bot_class}</p>
            <p style={{color:'#617d98', fontSize: '0.75rem',marginTop:'0.25rem' }}>Catch Phrase: {catchphrase}</p>
            <p>Created at: {created_at}</p>
            <p>Updated at: {updated_at}</p>
        </div>
    </div>
  )
}

export default SelectedBot