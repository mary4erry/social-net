import React, { useState, useEffect } from 'react'

const ProfileStatusWithHooks = (props) => {

   let [editMode, setEditMode] = useState(false)
   let [status, setStatus] = useState(props.status)

   // const toggleEditMode = () => {
   //    !setEditMode() ? setEditMode (false) && props.updateStatus(status) : setEditMode(true)
   // }

   useEffect( () => { //вызывается после отрисовки
      setStatus(props.status)
   }, [props.status]) //зависимость

   const activateEditMode = () => {
      setEditMode(true)
   }
   const deactivateEditMode = () => {
      setEditMode(false)
      props.updateStatus(status);
   };

   const onStatusChange = (e) => {
      setStatus(e.currentTarget.value);
   };

   return (
      <div> {editMode 
         ? (<div>
               <input
                  onChange={onStatusChange}
                  onBlur={deactivateEditMode}
                  value={status}
                  type="text"
                  autoFocus={true} />
            </div>) 
         : (<div>
               <span onDoubleClick={activateEditMode} >
                  {props.status || "---"}
               </span>
            </div>)}
      </div>
   );
}

export default  ProfileStatusWithHooks