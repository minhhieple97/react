import React, { Component } from "react"
import Person from "./Person/Person"

export default class Persons extends Component {
  constructor(props) {
    super(props)
    this.state = {
      init: "true",
    }
    console.log("[Persons.js] constructor")
  }

  // componentDidMount() {
  //   console.log("[Persons.js] componentDidMount ==================")
  // }

  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons.js] getDerivedStateFromProps")
  //   return state
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate")
    if (nextProps.persons !== this.props.persons) {
      return true
    }
    return false
  }
  // getSnapshotBeforeUpdate = (prevProps, prevState) => {
  //   console.log("[Persons.js] getSnapshotBeforeUpdate")
  //   return null
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("[Persons.js] componentDidUpdate")
  //   console.log("[Persons.js] componentDidUpdate ==================")
  // }
  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount")
  }

  render() {
    console.log("[Persons.js] render")
    return this.props.persons.map((person, index) => (
      <Person
        key={index}
        deletePersonHandler={this.props.deletePersonHandler}
        name={person.name}
        age={person.age}
        nameChangedHandler={(event) =>
          this.props.nameChangedHandler(event, person.id)
        }
      />
    ))
  }
}
