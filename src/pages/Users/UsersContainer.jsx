import React from 'react'
import Users from './Users.jsx'
import Loader from '../../controls/Loader/Loader.jsx'
import { connect } from 'react-redux'
import { follow, unfollow, 
         setCurrentPage,
         toggleFollowingProgress, 
         requestUsers} from '../../redux/reducers/users.reducer'
import { compose } from 'redux'
import { getPageSize, getUsers, getTotalUsersCount, getCurrentPage, getIsLoading, getFollowingInProgress } from '../../redux/selectors/users-selector.js'

class UsersContainer extends React.Component {
   componentDidMount () {
      const {currentPage, pageSize} = this.props
      this.props.requestUsers(currentPage, pageSize)
   }
   onPageChanged = (pageNumber) => {
      const {pageSize} = this.props

      this.props.setCurrentPage(pageNumber)
      this.props.requestUsers(pageNumber, pageSize)
   }

   render () {

      return (
         <>
            {this.props.isLoading ? <Loader /> : null}
            <Users 
               currentPage= {this.props.currentPage}
               totalUsersCount= {this.props.totalUsersCount}
               pageSize= {this.props.pageSize}
               onPageChanged= {this.onPageChanged}
               users= {this.props.users}
               unfollow= {this.props.unfollow}
               follow= {this.props.follow}
               followingInProgress={this.props.followingInProgress}
            /> 
         </>
      )
   }
}

let mapStateToProps = (state) => {
   return {
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isLoading: getIsLoading(state),
      followingInProgress: getFollowingInProgress(state),
   }
}

export default compose (
   connect (mapStateToProps, 
      { follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers })
)(UsersContainer)