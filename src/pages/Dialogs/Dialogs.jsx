import React from 'react'
import DialogItem from './DialogItem/DialogItem.jsx'
import style from './Dialogs.module.css'
import Message from './Message/Message.jsx'
import { Redirect } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../../controls/FormsControls/FormsControls.js'
import { required, maxLengthCreator } from '../../utils/validators/validator.js'

const maxLength100 = maxLengthCreator(100)

const AddMessageForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <Field
            className={style.message_form}
            name='newMsgText'
            component={Textarea}
            placeholder="Enter your message..."
            validate={[required, maxLength100]}
         />
         <div>
            <button> Send message</button>
         </div>
      </form>
   )
}

const AddMessageReduxForm = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)

const Dialogs = (props) => {
   let state = props.dialogsPage

   let dialogsElements = state.dialogs.map(dialog => 
      <DialogItem 
         user={dialog.userName} 
         id={dialog.id} 
         key={dialog.id}
         userpic={dialog.userpic}/>
   )

   let msgElements = state.msgs.map(msg => 
      <Message 
         text={msg.text} 
         id={msg.id} key={msg.id}/>
   )            

   const addNewMessage = (data) => {
      props.sendMessage(data.newMsgText);
   }

   if (!props.isAuth) return <Redirect to={'/login'}/>
   
   return (
      <div className={style.dialogs}>
         <div className={style.dialogs_items}>

            {dialogsElements}
         </div>
         <div className={style.messages}>

            {msgElements}
            <AddMessageReduxForm onSubmit={addNewMessage}/>
         </div>
      </div>
   )
}

export default Dialogs
