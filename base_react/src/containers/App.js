import React, { Component } from "react"
import classes from "./App.css"
import Persons from "../components/Persons/Persons"
import Cockpit from "../components/Cockpit/Cockpit"
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { id: "asfa1", name: "Max", age: 28 },
        { id: "vasdf1", name: "Manu", age: 29 },
        { id: "asdf11", name: "Stephanie", age: 26 },
      ],
      otherState: "some other value",
      showPersons: true,
      showCockpit: true,
    }
    console.log("[App.js] constructor")
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[App.js] shouldComponentUpdate ==================")
  //   return true
  // }

  // static getDerivedStateFromProps(props, state) {
  //   console.log("[App.js] getDerivedStateFromProps", props, state)
  //   return state
  // }

  // componentDidMount() {
  //   console.log("[App.js] componentDidMount ==================")
  // }

  // getSnapshotBeforeUpdate = (prevProps, prevState) => {
  //   console.log("[App.js] getSnapshotBeforeUpdate", prevState)
  //   return { message: "Snapshot!" }
  // }

  componentDidUpdate(prevProps, prevState, snapShort) {
    console.log("[App.js] componentDidUpdate", prevState)
    // console.log("[App.js] componentDidUpdate snapShort", snapShort)
    // console.log("[App.js] componentDidUpdate ==================")
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex],
    }

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({ persons: persons })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({ persons: persons }, () => {
      console.log("[App.js] state realy change")
    })
    console.log("[App.js] deletePersonHandler", this.state)
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  render() {
    console.log("[App.js] render", this.state)
    let persons = null

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          deletePersonHandler={this.deletePersonHandler}
          nameChangedHandler={this.nameChangedHandler}
        />
      )
    }

    const assignedClasses = []
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red) // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold) // classes = ['red', 'bold']
    }
    return (
      <div className={classes.App}>
        <button
          onClick={() => {
            this.setState({ showCockpit: !this.state.showCockpit })
          }}
        >
          SHOW COCKPIT
        </button>
        {this.state.showCockpit && (
          <Cockpit
            personsLength={this.state.persons.length}
            togglePersonsHandler={this.togglePersonsHandler}
            showPersons={this.state.showPersons}
          />
        )}
        {persons}
      </div>
    )
  }
}

export default App
