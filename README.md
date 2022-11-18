# React-tutorial
Modern React with Redux course notes


JSX NUMBER INPUTS IN COMPONENTS

function App() {
    retrun <input type = "number" min={5} max={10} />
}

type - is the name of the property we want to customize
number - is the value for the property


~ Props can refer to a varialbe using the same curley braces syntax

function App() {
    const inputType = "number"
    const minValue = 5;

    return (
        <input
            type={inputType}
            min={minValue}
    )
}