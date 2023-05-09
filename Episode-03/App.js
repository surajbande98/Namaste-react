import React from "react"

import ReactDOM from "react-dom/client"

// JSX (HTML like syntax) => (PARCEL>BABEL) transpile to React.createElement() => Js Object (React element) => HTML element (Render)
// JSX Attributes are in camcelCase
// JSX sanitize data before pass to further
// JSX can have only one parent
// React element
const Title = () => (
  <h1 className="head" tabIndex="1">
    I am a title function
  </h1>
)

const subtitle = <h2>I am subtitle variable</h2>

// Functional component > normal js function > return JSX
// Putting one component inside another is component composition
const HeadingComponent = () => (
  <div className="container">
    {Title()}
    <Title />
    <Title></Title>
    {subtitle}
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent />)
