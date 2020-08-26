import React from "react"

import classes from "./Person.css"

const Person = (props) => {
  return (
    <div className={classes.Person}>
      <p onClick={props.deletePersonHandler}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input
        type="text"
        onChange={props.nameChangedHandler}
        value={props.name}
      />
    </div>
  )
}

export default Person
