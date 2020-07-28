import React from 'react'
import style from './ProfileInfo.module.css'
import styleAction from '../../../controls/FormsControls/FormsControls.module.css'
import { reduxForm } from 'redux-form'

// import Input from '../../../Forms/Login/Login'
import { createField, Element } from '../../../controls/FormsControls/FormsControls'

const Input = Element('input')
const Textarea = Element('textarea')

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
   return <form onSubmit={handleSubmit} 
               className={style.profileEditForm}>
      <div> <b>Full name</b> 
         {createField('Full name', 'fullName', Input)}
      </div>
      <div> <b>About me: </b>  
         {createField('About me', 'AboutMe', Textarea)}
         </div>
      <div> <b>Looking for a job: </b> 
         {createField('', 'LookingForAJob', Input, [ ], {type: 'checkbox'})} 
         </div>
      <div> <b>My professional skils:  </b> 
         {createField('My professional skils', 'lookingForAJobDescription', Textarea, [])}
         </div>
      <div>
         <b> Contacts: </b> {Object.keys(profile.contacts).map(key => { 
            return <div className={style.contact} key={key}>
               <b>{key}: </b> {createField(key, 'contacts.' + key, Input)}
            </div>}
         )}
            
      </div> 
      { error && <div className={styleAction.formSummaryError}>
            {error}
         </div>} 
      <div><button>Save</button></div>  
   </form>
}
const ProfileDataFormReduxForm = reduxForm({ form: 'editProfileInfo' })(ProfileDataForm)
export default ProfileDataFormReduxForm 