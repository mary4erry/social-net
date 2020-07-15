import { usersAPI } from "../../API/api"
import {updateObjectInArray} from "../../utils/object.helper"


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_LOADING ='TOGGLE_IS_LOADING'
const TOGGLE_IS_FOLLOWING_PROGRESS ='TOGGLE_IS_FOLLOWING_PROGRESS'


let initialState = {
   users: [],
   pageSize: 10,
   totalItemsCount: 0,
   currentPage: 1,
   isLoading: true,
   followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW: {
         return {
            ...state,
            users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
         }
      }
      case UNFOLLOW: {
         return {
            ...state,
            users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
         }
      }
      case SET_USERS: {
         return { ...state, users: action.users }
      }
      case SET_CURRENT_PAGE: {
         return { ...state, currentPage: action.currentPage}
      }
      case SET_TOTAL_USERS_COUNT: {
         return { ...state, totalItemsCount: action.count}
      }
      case TOGGLE_IS_LOADING: {
         return { ...state, isLoading: action.isLoading}
      }
      case TOGGLE_IS_FOLLOWING_PROGRESS: {
         return { ...state, 
            followingInProgress: action.isLoading 
               ? [...state.followingInProgress, action.userId] 
               : state.followingInProgress.filter(id => id !== action.userId)
         }
      }
      default:   
         return state
   }
}

export const followSuccess = (userId) => ({ type: 'FOLLOW', userId})
export const unfollowSuccess = (userId) =>  ({type: 'UNFOLLOW', userId})
export const setUsers = (users) =>  ({type: 'SET_USERS', users})
export const setCurrentPage = (currentPage) =>  ({type: 'SET_CURRENT_PAGE', currentPage})
export const setTotalItemsCount = (totalItemsCount) =>  ({type: 'SET_TOTAL_USERS_COUNT', count: totalItemsCount})
export const toggleIsLoading = (isLoading) =>  ({type: 'TOGGLE_IS_LOADING', isLoading})
export const toggleFollowingProgress = (isLoading, userId) =>  ({type: 'TOGGLE_IS_FOLLOWING_PROGRESS', isLoading, userId})

export const requestUsers = (requestPage, pageSize) => {
   return async (dispatch) => {
      dispatch(toggleIsLoading(true))
      dispatch(setCurrentPage(requestPage))

      const data = await usersAPI.requestUsers(requestPage, pageSize)
      dispatch(toggleIsLoading(false))
      dispatch(setUsers(data.items))
      dispatch(setTotalItemsCount(data.totalCount))
   }
} 

const followUnfollofFlow = async (dispatch, userId, apiMethod, actionCreator) => {
   dispatch(toggleFollowingProgress(true, userId)) 
      const response = await apiMethod(userId) 
      if (response.data.resultCode === 0) {
         dispatch(actionCreator(userId))
      }
      dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (userId) => {
   return async (dispatch) => {
      followUnfollofFlow(dispatch, userId, usersAPI.follow, followSuccess)
   }
} 
export const unfollow = (userId) => {
   return async (dispatch) => {
      followUnfollofFlow(dispatch, userId, usersAPI.unfollow, unfollowSuccess)
   }
}

export default usersReducer
