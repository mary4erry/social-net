export const required = value => {
   if (value) return undefined

   return 'Field is required'
   
}


export const maxLengthCreator = (maxLength) => (value) => {
   if (value.length > maxLength) return `Max length is ${maxLength} simbols`
   
   return undefined   
}
// export const minLength2 = value => {
//    if (value && value.lenght > 30) return 'Min Length is 30 simbols'
   
//    return undefined 
// }