import classes from "./Person.css"
import React, { Component } from "react"
export default class Person extends Component {
  // constructor(props) {
  //    super(props)
  // }
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Person.js] getDerivedStateFromProps.")
  //   return { init: "OK" }
  // }
  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.name !== this.props.name ||
      nextProps.age !== this.props.age
    ) {
      return true
    }
    return false
  }

  render() {
    console.log("[Person.js] render.")
    return (
      <div className={classes.Person}>
        <p onClick={this.props.deletePersonHandler}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.nameChangedHandler}
          value={this.props.name}
        />
      </div>
    )
  }
}
