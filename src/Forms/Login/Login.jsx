import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import { login } from '../../redux/reducers/auth.reducer'
import { Element, createField } from '../../controls/FormsControls/FormsControls'
import { required } from '../../utils/validators/validator'

import style from '../../controls/FormsControls/FormsControls.module.css'
import styles from './Login.module.css'

const Input = Element('input')

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
   return <form onSubmit={handleSubmit}>
            {createField('Email','email', Input, [required])}
            {createField('Password','password', Input, [required], {type: 'password'})}
            {createField(null,'rememberMe', Input, null,  {type: 'checkbox'}, 'Remember me')}
            {captchaUrl && <div>
               <img src={captchaUrl} alt='capture'/>
               {createField('Symbols from image','captcha', Input, [required])}</div>
            }
            { error && <div className={style.formSummaryError}>
               {error} </div>}
            <div>
               <button>Login</button>
            </div>
         </form>
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = ({login, isAuth, captchaUrl}) => {
   const onSubmit = (formData) => {
      login(formData.email, formData.password, formData.rememberMe, formData.captcha)
   }
   if (isAuth) {
      return <Redirect to={'/profile'}/>
   }
   
   return <div className={styles.formBlock} >
      <h1 className={styles.formH1} >LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
   </div>
}

const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
   captchaUrl: state.auth.captchaUrl,
})

export default connect(mapStateToProps, {login})(Login)


 