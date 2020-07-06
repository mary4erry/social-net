import React from 'react'
import styles from './FormsControls.module.css'

export const Element =  Element => ({input, meta, ...props}) => {
   const isError = meta.touched && meta.error
   return (
      <div className={styles.formControl + ' ' + (isError && styles.error)}>
         <div>
            <Element {...input} {...props}/>
         </div>
         {isError && <span>{meta.error}</span>}
      </div>
   )
}

// export const FormControl = ({input, meta, ...props}) => {
//    const isError = meta.touched && meta.error
//    return (
//       <div className={styles.formControl + ' ' + (isError && styles.error)}>
//          <div>
//             {props.children}
//          </div>
//          {isError && <span>{meta.error}</span>}
//       </div>
//    )
// }

// export const Textarea = (props) => {
//    const {input, meta, children, ...restProps} = props
//    return <FormControl {...props}> <textarea {...input} {...restProps} /> </FormControl>
// }
// export const Input = (props) => {
//    const {input, meta, children, ...restProps} = props
//    return <FormControl {...props}> <input {...input} {...restProps} /> </FormControl>
// }