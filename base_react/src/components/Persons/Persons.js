import React from "react"
import Person from "./Person/Person"
export default function Persons({
  persons,
  deletePersonHandler,
  nameChangedHandler,
}) {
  return persons.map((person, index) => (
    <Person
      key={index}
      deletePersonHandler={deletePersonHandler}
      name={person.name}
      age={person.age}
      nameChangedHandler={(event) => nameChangedHandler(event, person.id)}
    />
  ))
}
