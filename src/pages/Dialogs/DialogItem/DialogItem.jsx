import React from 'react'
import style from '../Dialogs.module.css'

import { NavLink } from 'react-router-dom'

const DialogItem = ({id, userpic, user}) => {
   let path = '/dialogs/' + id
   return (
      <div className={style.dialogItem}>
         <img src={userpic} className={style.userpic} alt="userpic"/>
         <NavLink className={style.userName} to={path}>{user}</NavLink>
      </div>
   )
}

export default DialogItem
