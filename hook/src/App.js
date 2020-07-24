import React, { useEffect, useState } from "react"
import "./App.scss"

function App() {
  const [todo, setTodo] = useState()
  // console.log(todo)
  console.log("Ok")
  // useEffect(() => {
  //   console.log("OK")
  //   const getData = async () =>
  //     fetch("https://jsonplaceholder.typicode.com/todos/1")
  //       .then((response) => response.json())
  //       .then((data) => setTodo(data))
  //       .catch((error) => console.log(error.message))
  //   getData()
  // }, [])

  return (
    <div className="app">
      <h1>Welcome to React Hooks!</h1>
      {/* <h1>{todo && todo.title}</h1> */}
    </div>
  )
}

export default App
