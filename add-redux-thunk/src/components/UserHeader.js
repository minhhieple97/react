import React, { Component, useEffect } from "react"
import { connect } from "react-redux"
import { fetchUsers } from "../actions"
const UserHeader = ({ user }) => {
  return <div className="header">{user && user.name}</div>
}

const mapStateToProps = (state, ownProps) => {
  const user = state.users.find((user) => user.id === ownProps.id)
  return {
    user,
  }
}

export default connect(mapStateToProps)(UserHeader)
