import React from 'react'
import style from './User.module.css'
import Pagination from '../../controls/FormsControls/Pagination/Pagination.jsx'
import User from './User.jsx'


const Users = ({currentPage, onPageChanged, totalItemsCount, pageSize, users, followingInProgress, unfollow, follow}) => {
   return (
      <div className={style.wrap}>
         <Pagination currentPage={currentPage} 
            onPageChanged={onPageChanged}
            totalItemsCount={totalItemsCount}
            pageSize={pageSize}
            />
         
            { users.map( u => 
               <User 
                  user={u} 
                  key={ u.id }
                  followingInProgress={followingInProgress}
                  unfollow={unfollow}
                  follow={follow}
               />  
            )}
      </div>
   ) 
}

export default Users