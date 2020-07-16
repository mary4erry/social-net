import React, { Suspense } from 'react';
import Loader from '../controls/Loader/Loader';

export const WithSuspense = (Component) => {
   return (props) => {
      return <Suspense fallback={<Loader/>} >
         <Component {...props} /> 
      </Suspense>
   } 
}