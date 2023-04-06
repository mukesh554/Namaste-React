import React from 'react';
import ReactDOM from "react-dom/client";
const Title =() =>(
  <h1 id = 'title' key ="h2">Namaste React</h1>
)
const TitleComponent = <h>Hello</h>

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
//root.render(HeaderComponent()); will work 
root.render(TitleComponent); //Recommended

