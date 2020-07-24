import React, { useEffect } from "react"
import { connect } from "react-redux"
import { fetchPostsAndUsers } from "../actions"
import UserHeader from "./UserHeader"
const PostList = ({ fetchPostsAndUsers, posts }) => {
  useEffect(() => {
    fetchPostsAndUsers()
  }, [fetchPostsAndUsers])
  const renderList = () => {
    return (
      posts &&
      posts.map((post) => {
        return (
          <div className="item" key={post.id}>
            <i className="large middle aligned icon user"></i>
            <div className="content">
              <div className="description">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
              <UserHeader id={post.userId}></UserHeader>
            </div>
          </div>
        )
      })
    )
  }
  return <div className="ui relaxed divied list">{renderList()}</div>
}

const mapStateToProps = (state) => ({
  posts: state.posts,
})

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList)
