import React, { useState } from 'react'
// import ReactDom from 'react-dom'

import style from './ProfileInfo.module.css'
import ProfilePhoto from '../../../assets/userpic.png'
import Loader from '../../../controls/Loader/Loader'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import ProfileDataForm from './ProfileDataForm.jsx'

const ProfileInfo = ({ saveProfile, profile, status, updateStatus, isOwner, savePhoto }) => {
   let [editMode, setEditMode] = useState(false)

   if (!profile) {
      return <Loader />
   }
   const profilePhotoSelectHandler = (e) => {
      if (e.target.files.length) {
         savePhoto(e.target.files[0])
      }
   }
   const onSubmit = (formData) => {
      saveProfile(formData).then(
         () => {
             setEditMode(false)
         }
      )
   }
   return (
      <div className={style.profileInfo}>
         {/* <div className={style.bgPhoto}>
            <img
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTueDqN7PI3oDcOWB2Y-RB-7CViMGHY9WurWemhCStStiFAhtVv&usqp=CAU"
               alt=""
            />
         </div> */}
         <div className={style.profilePhotoBlock}>
            <img className={style.ava_big} src={profile.photos.large || ProfilePhoto } alt=""/>
            {isOwner && 
               <div>
                  <input type={'file'}
                     onChange={(e) => {profilePhotoSelectHandler(e)}}></input>
               </div>}
         </div>
         <ProfileStatusWithHooks 
            status={status}
            updateStatus={updateStatus} />
         {editMode 
            ? <ProfileDataForm profile={profile}
               initialValues={profile}
               isOwner={isOwner}
               onSubmit={onSubmit}
               /> 
            : <ProfileData profile={profile}
               isOwner={isOwner}
               status={status}
               updateStatus={updateStatus}
               activateEditMode={() => {setEditMode(true)}}
               />
         }
      </div>
   )
}
export default ProfileInfo

const ProfileData = ({profile, status, updateStatus, isOwner, activateEditMode}) => {
   return <div className={style.description}>   
         
         {isOwner && <div><button onClick={activateEditMode}>Edit profile info</button></div>}
         <b>{profile.fullName}</b>
         <div> <b>About me: </b> {profile.aboutMe} </div>
         {profile.lookingForAJob 
            && <div> <b>Looking for a job: </b> {profile.lookingForAJobDescription} </div>}
         <div>
            <b> Contacts: </b> {Object.keys(profile.contacts).map(key => { 
               return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/> })}
         </div>
      </div>
}

const Contact = ({contactTitle, contactValue}) => {
   return <div className={style.contact}><b>{contactTitle} :</b>{contactValue} </div>
}