
//  List of simple components \\\


function App() {
    let message = "Goodbye!"
    if (Math.random() > 0.5) {
        message = "Hell there"
    }
//        return <h1>{message}</h1>  //note the syntax 
    //The curly braces tell React to go find the inserted varialbe
//    }
//refreshing the screen will toggle between hello there and good //4)  Create a component


function App() {
//  //only returned elements will show up in the browser \\
    return <h1>Hi there!</h1>
}


// DISPLAYING YOUR LOCAL TIME COMPONENT \\

function App() {
    const date = new Date();
    const time = date.toLocaleTimeString(); 
        return <h1>{time}</h1>
}


// //Refractoring code to \\

function App() {
    return <h1>{new Date().toLocaleTimeString()}</h1>
}


// DISPLAYING MORE THAN ONE VARIABLE + TEXT IN A COMPONENT \\

function App() {
    const name = "Julia";
    const age = 2;

    return <h1>Hi, my name is {name} im {age} years old</h1>
}


// REQUESTONG A NUMBER INPUT FROM USER IN A COMPONENT \\

function App() {
    const inputType = "number";
    const minValue = 5;

    return <input style={{border: "3px solid red"}}  // style is an object 
            type={inputType}     
            min={minValue} 
        />;
}
// Setting the min value to 5 here will never allow the 
//value to go below 5 in the browser. try in broswer. 

// // the varialbe can also be written directly in the return statement
// return <input type="number" min={5} />;


// Component to AUTOFOCUS IN A TEXT AREA using boolean true
function App() {
    return <textarea autoFocus spellcheck={false}/>    // NOTE the syntax
}
// NOTE for boolean false curley braces MUST be used
//    autoFocus={false}

// Component to spellCheck
function App() {
    return <input spellCheck />;
}