import { combineReducers } from "redux"
import postsReducers from "./postsReducer"
import usersReducers from "./usersReduce"
export default combineReducers({
  posts: postsReducers,
  users: usersReducers,
})
