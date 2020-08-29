import React, { useEffect } from "react"
import classes from "./Cockpit.css"
function Cockpit({ personsLength, togglePersonsHandler, showPersons }) {
  useEffect(() => {
    console.log("[Cockpit.js] 1nd useEffect")
    // const timeout = setTimeout(() => {
    //   alert("settimeout in useEffect.")
    // }, 2000)
    return () => {
      // clearTimeout(timeout)
      console.log("[Cockpit.js] 1nd clean up.")
    }
  })

  // useEffect(() => {
  //   console.log("[Cockpit.js] 2nd useEffect")
  //   return () => {
  //     console.log("[Cockpit.js] clean work in 2nd.")
  //   }
  // })
  const assignedClasses = []
  let btnClass = ""
  if (showPersons) {
    btnClass = classes.red
  }
  if (personsLength <= 2) {
    assignedClasses.push(classes.red) // classes = ['red']
  }
  if (personsLength <= 1) {
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
// export default React.memo(Cockpit)
export default Cockpit
