import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../utils/validators/validator'
import { Element } from '../../controls/FormsControls/FormsControls'
import { connect } from 'react-redux'
import { login } from '../../redux/reducers/auth.reducer'
import { Redirect } from 'react-router-dom'
import style from '../../controls/FormsControls/FormsControls.module.css'

// const maxLength10 = maxLengthCreator(10)
const Input = Element('input')

const LoginForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field 
               placeholder={'Email'} 
               name={'email'} 
               component={Input} 
               type="text"
               validate={[required]}/>
         </div>
         <div>            
            <Field 
               placeholder={'Password'} 
               name={'password'} 
               component={Input} 
               type={'password'}
               validate={[required]}/>
         </div>
         <div>
            <Field 
               name={'rememberMe'} 
               component={Input} 
               type="checkbox"
            /> Remember me
         </div>
         { props.error && <div className={style.formSummaryError}>
            {props.error}
         </div>}
         <div>
            <button>Login</button>
         </div>
      </form>
   )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
   const onSubmit = (formData) => {
      props.login(formData.email, formData.password, formData.rememberMe)
   }
   if (props.isAuth) {
      return <Redirect to={'/profile'}/>
   }
   
   return <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
   </div>
}
const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)


 