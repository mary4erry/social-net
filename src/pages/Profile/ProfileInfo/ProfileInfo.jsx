import React from 'react'
// import ReactDom from 'react-dom'

import style from './ProfileInfo.module.css'
import Loader from '../../../controls/Loader/Loader'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

const ProfileInfo = (props) => {
   if (!props.profile) {
      return <Loader />
   }
   
   return (
      <div>
         {/* <div className={style.bgPhoto}>
            <img
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTueDqN7PI3oDcOWB2Y-RB-7CViMGHY9WurWemhCStStiFAhtVv&usqp=CAU"
               alt=""
            />
         </div> */}
         <div className={style.description}>
            <img className={style.ava_big} src={props.profile.photos.large} alt=""/>
            
            <ProfileStatusWithHooks 
               status={props.status}
               updateStatus={props.updateStatus} />
            <div> {props.profile.fullName} </div>
            {props.profile.aboutMe 
               && <div> О себе: {props.profile.aboutMe} </div>}
            
            {props.profile.lookingForAJob 
               && <div> Рассмотрю предложения о работе: {props.profile.lookingForAJobDescription}</div>}
            <div>
               Contacts: 
               {/* {props.profile.contacts.map( c => 
                  <span>{c}</span>
               )} */}
               {/* {props.profile.contacts.github} */}
            </div>
         </div>
      </div>
   )
}
export default ProfileInfo
