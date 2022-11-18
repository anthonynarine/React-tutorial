// 1) Import the React and ReactDOM Libraries
import React from 'react'; 
import ReactDOM from "react-dom/client";

// 2) Get a refrence to the div with id root
const el = document.getElementById("root");

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// //4)  Create a component
// function App() {
//  //only returned elements will show up in the browser
//     return <h1>Hi there!</h1>
// }
//5) Show the component on the screen. 
root.render(<App/>);


// instead of hard coding hi there 
// lets do some computation and decide 
// what to show on the screen. 

//4)  Create a component  // Modifying from above
// function App() {
//     let message = "Goodbye!"
//     if (Math.random() > 0.5) {
//         message = "Hell there"
//     }
//        return <h1>{message}</h1>  //note the syntax 
    //The curly braces tell React to go find the inserted varialbe
//    }
//refreshing the screen will toggle between hello there and good //4)  Create a component


// function App() {
//  //only returned elements will show up in the browser \\
//     return <h1>Hi there!</h1>
// }


// DISPLAYING YOUR LOCAL TIME COMPONENT \\

// function App() {
//     const date = new Date();
//     const time = date.toLocaleTimeString(); 
//         return <h1>{time}</h1>
// }


// //Refractoring code to \\

// function App() {
//     return <h1>{new Date().toLocaleTimeString()}</h1>
// }


// DISPLAYING MORE THAN ONE VARIABLE + TEXT IN A COMPONENT \\

// function App() {
//     const name = "Julia";
//     const age = 2;

//     return <h1>Hi, my name is {name} im {age} years old</h1>
// }


// REQUESTONG A NUMBER INPUT FROM USER IN A COMPONENT \\

function App() {
    const inputType = "number";
    const minValue = 5;

    return <input style={{border: "3px solid red"}}
            type={inputType} 
            min={minValue} 
        />;
}
// Setting the min value to 5 here will never allow the 
//value to go below 5 in the browser. try in broswer. 

// // the varialbe can also be written directly in the return statement
// return <input type="number" min={5} />;


