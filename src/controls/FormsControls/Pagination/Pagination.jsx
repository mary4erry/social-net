import React from 'react'
import style from './Pagination.module.css'

const Pagination = (props) => {

   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
   let pages = []
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)  
   }
 
   return <div className={style.pages}>
            { pages.map( p => 
               <span 
                  className={props.currentPage === p ? style.selectedPage : style.pageNum} key={p}
                  onClick={() => { props.onPageChanged(p)}}> {p}
               </span>
            )}
         </div>
}

export default Pagination