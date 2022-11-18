# React-tutorial
Modern React with Redux course notes


JSX NUMBER INPUTS IN COMPONENTS

function App() {
    retrun <input type = "number" min={5} max={10} />
}

type - is the name of the property we want to customize
number - is the value for the property


          ~ Props ~

 ~ can refer to a varialbe using the same curley braces syntax

function App() {
    const inputType = "number"
    const minValue = 5;

    return (
        <input type={inputType} min={minValue} />
    );
}
// // the varialbe can also be written directly in the return statement
// return <input type="number" min={5} />;

~ Pros do not have to be defined as variables
   INSTEAD Strings can be wrapped in double quotes "number"
           Numbers can be wrapped in curley braces {}

// RETURNING ARRYAS, OBJECTS AND VARIALBE IN A COMPONENT

function App() {
    const message = "Enter your age";

    return(
        <input
            type="number"
            min={5}
            max={10}
            list={[1,2,3]}            //Array
            style={{color: "red"}}    //Object
            alt={message}             //Variable
        />
    );
}

Note tyring to display an object dosent work

function App() {
    const config = {color: "red"}

    return (
        <div>
            <h1>{config}</h1>        // This will not work
            
            <input abc={config} />   // providing an object as a prop will
        </div>
        );
    }

    Rules to converting HTML to JSX 
    
1. All prop names follow camelCase
2. Numbers attributes use curley braces
3. Boolean "true" can be writeen with just the property name
   "false" should be written with curly braces
4. The "class" attribute is written as "className"
5  In-line styles are provided as objects.