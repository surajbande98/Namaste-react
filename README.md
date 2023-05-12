# React learnings ![image](https://user-images.githubusercontent.com/64318247/236808474-a80874c7-2a4e-4e20-af8f-2d60e9e38bdd.png)
>**EP-03**
// JSX (HTML like syntax) => (PARCEL>BABEL) transpile to React.createElement() => Js Object (React element) => HTML element (Render)
// JSX Attributes are in camcelCase
// JSX sanitize data before pass to further
// JSX can have only one parent
// React fragment to add empty parent
// Functional component > normal js function > return JSX
// Putting one component inside another is component composition

EP-03
/**
 *
 * Header
 * - Logo
 * - Nav items
 * Body
 * - Search
 * - Restro container
 *  - Restro card
 * - Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

Ep-04
![image](https://github.com/surajbande98/Namaste-react/assets/64318247/abb45b07-b771-45c1-937f-122fa7a6a938)

EP-05
* Hooks are JS utility functions
  - useState
  - useEffect
* Reconsilation algo(React fibre)
 - Virtual DOM - representation of actual DOM.
 - Diff algo -> efficient update of the DOM by comparing old and new vdom(objects).
 - DOM updates and DOM re-rendering happens everytime when state variable change.
