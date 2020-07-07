import React from 'react'
// import ReactDom from 'react-dom'
import style from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
   return (
      <header className={style.header}>
         <img
            src="https://cdn4.iconfinder.com/data/icons/nature-line-01/512/mountain-512.png"
            alt=""
         />
         <div className={style.loginBlock}>
            {props.isAuth 
               ? (<>
                     <div className={style.userName}>
                        {props.login}
                     </div>
                     <button onClick={props.logout}>LOGOUT</button> 

                  </>)
               : <NavLink to={'/login'}>Login</NavLink>}
            
         </div>
      </header>
   )
}
export default Header
