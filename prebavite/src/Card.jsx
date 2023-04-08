import React from 'react'
import Button from './Button'
export default function Card({imgUrl, nick, name}) {
  return (
    <div className=' flex justify-around items-center'>
        <div className=' flex justify-center items-center '>
            <img className=' rounded-full w-16' src={imgUrl} alt="photo"/>
            <div className=' flex flex-col p-2 gap-1'>
                <span className=' font-bold text-white text-2xl'>{name}</span>
                <p className=' text-xl text-white font-extralight'>{nick}</p>
            </div>
        </div>
        <Button />
    </div>
  )
}
