import React from "react"

import ReactDOM from "react-dom/client"

// Create nested React Elements
const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Episode 02 H1"
)
const heading1 = React.createElement(
  "h2",
  {
    id: "title",
  },
  "Episode 02 H2"
)

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading1]
)

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"))
// passing react element inside root
root.render(container)
