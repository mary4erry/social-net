// import React from 'react'
import {connect} from 'react-redux'

import Dialogs from './Dialogs'
import { sendMessage } from '../../redux/reducers/dialogs.reducer'
import { WithAuthRedirect } from '../../HOC/WithAuthRedirect'
import { compose } from 'redux'

let mapStateToProps = (state) => {
   return {
      dialogsPage: state.dialogsPage,
   }
}

export default compose(
   connect(mapStateToProps, {sendMessage,}),
   WithAuthRedirect
)(Dialogs)
