// 1) Import the React and ReactDOM Libraries
import React from 'react'; 
import ReactDOM from "react-dom/client";

// 2) Get a refrence to the div with id root
const el = document.getElementById("root");

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// //4)  Create a component
function App() {
 //only returned elements will show up in the browser
    return <h1>Hi there!</h1>
}
//5) Show the component on the screen. 
root.render(<App/>);






