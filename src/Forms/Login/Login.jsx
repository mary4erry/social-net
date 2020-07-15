import React from 'react'
import { reduxForm } from 'redux-form'
import { required } from '../../utils/validators/validator'
import { Element, createField } from '../../controls/FormsControls/FormsControls'
import { connect } from 'react-redux'
import { login } from '../../redux/reducers/auth.reducer'
import { Redirect } from 'react-router-dom'
import style from '../../controls/FormsControls/FormsControls.module.css'
import styles from './Login.module.css'

// const maxLength10 = maxLengthCreator(10)
const Input = Element('input')

const LoginForm = ({handleSubmit, error}) => {
   return (
      <form onSubmit={handleSubmit}>
         {createField('Email','email', Input, [required])}
         {createField('Password','password', Input, [required], {type: 'password'})}
         {createField(null,'rememberMe', Input, null,  {type: 'checkbox'}, 'Remember me')}
         { error && <div className={style.formSummaryError}>
            {error}
         </div>}
         <div>
            <button>Login</button>
         </div>
      </form>
   )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = ({login, isAuth}) => {
   const onSubmit = (formData) => {
      login(formData.email, formData.password, formData.rememberMe)
   }
   if (isAuth) {
      return <Redirect to={'/profile'}/>
   }
   
   return <div className={styles.formBlock} >
      <h1 className={styles.formH1} >LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
   </div>
}
const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)


 