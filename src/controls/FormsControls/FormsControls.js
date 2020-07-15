import React from 'react'
import styles from './FormsControls.module.css'
import { Field } from 'redux-form'

export const Element =  Element => ({input, meta: {touched, error}, ...props}) => {
   const isError = touched && error
   return (
      <div className={styles.formControl + ' ' + (isError && styles.error)}>
         <div>
            <Element {...input} {...props}/>
         </div>
         {isError && <span>{error}</span>}
      </div>
   )
}

export const createField = (placeholder, name, component, validate, props={}, text= ' ') => (
   <div>
      <Field 
      placeholder={placeholder} 
      name={name} 
      component={component} 
      validate={validate}
      {...props}/> 
      {text}
   </div>
)