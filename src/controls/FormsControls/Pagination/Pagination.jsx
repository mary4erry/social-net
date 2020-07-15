import React, {useState} from 'react'
import style from './Pagination.module.css'

const Pagination = ({totalItemsCount, pageSize, currentPage, onPageChanged}) => {

   let pagesCount = Math.ceil(totalItemsCount / pageSize)
   let pages = []
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)  
   }
   const portionSize = 10

   const portionCount = Math.ceil(pagesCount / portionSize)
   const [portionNumber, SetPortionNumber] = useState(1)
   const leftPortionNumber = (portionNumber - 1) * portionSize + 1
   const rigntPortionNumber = portionNumber * portionSize

   return <div className={style.pages}>
            { portionNumber > 1 &&
            <button onClick={ () => {SetPortionNumber(portionNumber- 1) }}>PREV</button>}
            { pages
               .filter( p => p > leftPortionNumber && p < rigntPortionNumber )
               .map( p => 
               <span 
                  className={currentPage === p ? style.selectedPage : style.pageNum} 
                  key={p}
                  onClick={() => { onPageChanged(p) }}> {p}
               </span>
            )}
            { portionCount > portionNumber &&
               <button onClick={ () => { SetPortionNumber(portionNumber + 1) }}>NEXT</button>}
         </div>
}

export default Pagination