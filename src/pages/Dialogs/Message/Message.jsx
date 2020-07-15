import React from 'react'
import style from './Message.module.css'

const Message = ({text}) => {
   return <div 
      className={style.message}
   >{text}</div>
}

export default Message
