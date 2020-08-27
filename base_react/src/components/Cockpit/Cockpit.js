import React, { useEffect } from "react"
import classes from "./Cockpit.css"
export default function Cockpit({
  persons,
  togglePersonsHandler,
  showPersons,
}) {
  useEffect(() => {
    console.log("[Cockpit] useEffect")
  })
  const assignedClasses = []
  let btnClass = ""
  if (showPersons) {
    btnClass = classes.red
  }
  if (persons.length <= 2) {
    assignedClasses.push(classes.red) // classes = ['red']
  }
  if (persons.length <= 1) {
    assignedClasses.push(classes.bold) // classes = ['red', 'bold']
  }
  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={togglePersonsHandler}>
        Toggle Persons
      </button>
    </div>
  )
}
