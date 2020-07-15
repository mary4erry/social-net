import React from 'react'
import style from './User.module.css'
import Pagination from '../../controls/FormsControls/Pagination/Pagination.jsx'
import User from './User.jsx'


const Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {
   return (
      <div className={style.wrap}>
         <Pagination currentPage={currentPage} 
            onPageChanged={onPageChanged}
            totalUsersCount={totalUsersCount}
            pageSize={pageSize}
            />
         
            { users.map( u => 
               <User 
                  user={u} 
                  key={ u.id }
                  followingInProgress={ props.followingInProgress}
                  unfollow={ props.unfollow}
                  follow={ props.follow}
               />  
            )}
      </div>
   ) 
}

export default Users