import React from 'react'
import style from './User.module.css'
import userPhoto from '../../assets/userpic.png'
import { NavLink } from 'react-router-dom'

const User = ({user, followingInProgress, unfollow, follow}) => {
   return (
      <div className={style.userItem}>
         <span>
            <div>
               <NavLink to={'/profile/' + user.id}>
                  <img 
                     src={ user.photos.small !== null ? user.photos.small : userPhoto } 
                     className={style.photoUrl} alt=""/>
               </NavLink>                        
            </div>
            
         </span> 
         <div  className={style.userInfo}>
            <div>
               <div  className={style.userInfo_name}>{user.name}</div>
               <div>{user.status}</div>
            </div>
            <div>
               <div>{'user.location.country'}</div>
               <div>{'user.location.city'}</div>
            </div>
         </div>           
         <div className={style.button_follow}>
            { user.followed 
               ? <button disabled={followingInProgress
                  .some(id => id ===user.id)}   
                  onClick={() => {unfollow(user.id)}}>
                     Unfollow</button> 

               : <button disabled={followingInProgress
                  .some(id => id ===user.id)} 
                  onClick={() => {follow(user.id)}}>
                     Follow</button> 
            }
         </div>
      </div>
   ) 
}

export default User