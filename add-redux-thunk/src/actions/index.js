import jsonPlaceholder from "../apis/jsonPlaceholder"
import _ from "lodash"
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts")
  dispatch({
    type: "FETCH_POSTS",
    payload: response.data,
  })
}
export const fetchUsers = (id) => async (dispatch, getState) => {
  const response = await jsonPlaceholder.get(`/users/${id}`)
  dispatch({
    type: "FETCH_USERS",
    payload: response.data,
  })
}

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts())
  const objectUserId = {}
  const userIds = getState().posts.reduce((result, post) => {
    if (!objectUserId[post.userId]) {
      objectUserId[post.userId] = post
      result.push(post.userId)
    }
    return result
  }, [])
  userIds.forEach((id) => {
    dispatch(fetchUsers(id))
  })
}
