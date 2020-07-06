import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../utils/validators/validator'
import { Input } from '../../controls/FormsControls/FormsControls'

// const maxLength10 = maxLengthCreator(10)

const LoginForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field 
               placeholder={'Login'} 
               name={'login'} 
               component={Input} 
               type="text"
               validate={[required]}/>
         </div>
         <div>            
            <Field 
               placeholder={'Password'} 
               name={'Password'} 
               component={Input} 
               type="text"
               validate={[required]}/>
         </div>
         <div>
            <Field 
               name={'RememberMe'} 
               component={Input} 
               type="checkbox"
            /> Remember me!
         </div>
         <div>
            <button>Login</button>
         </div>
      </form>
   )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = () => {
   const onSubmit = (formData) => {
      console.log(formData);
   }
   return <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
   </div>
}
export default Login


 