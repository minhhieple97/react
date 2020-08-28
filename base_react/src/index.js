// import React from "react"
// import ReactDOM from "react-dom"
// import "./index.css"
// import App from "./containers/App.js"
// import registerServiceWorker from "./registerServiceWorker"

import React, { useEffect } from "react"
import { render } from "react-dom"
//===================================
const myContainerStyle = {
  maxWidth: "200px",
  margin: "5px auto 0",
  padding: "5px 0",
  backgroundColor: "#ddd",
  textAlign: "center",
  border: "1px solid #000",
  fontSize: "16px",
  fontFamily: "Helvetica",
}
//===================================
const MyUseEffect = ({ myTestProps }) => {
  useEffect(() => {
    console.log("useEffect")
  }, [myTestProps])
  return <div>{myTestProps}</div>
}
//===================================
const MyApp = ({ myProps }) => {
  return (
    <div style={myContainerStyle}>
      See the console
      <MyUseEffect myTestProps="My test" />
    </div>
  )
}
render(<MyApp />, document.getElementById("root"))

// ReactDOM.render(
//   <App initProps="Hello App.js" />,
//   document.getElementById("root")
// )
// registerServiceWorker()
