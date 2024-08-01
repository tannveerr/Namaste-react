import React from "react";
import ReactDOM from "react-dom/client";
// To create nested tags we can pass the whole statement React.createElement(
    // "h1",
    // {id:"heading"}, as the third parameter and provide the details .
    // To create siblings of tag like h1 and h2 in the same div we can create array by using [] in the argument like
    // const heading = React.createElement([
    //     "h1",
    //     {id:"heading"},
    //     "Hello from ReactJs",
    //     "h2",
    //     {id:"subheading"},
    //     "Hello from ReactJs Part 2"
    // ]
    // );
// If things get complicated with React you have JSX as hero!!
//Bye React.createElement() from now :(((

//Note React element is an object and render() converts to html element which is understood by browser

// const heading = React.createElement(
//     "h1",
//     {id:"heading"},
//     "Hello from ReactJs Parcel"
// );

//  const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// ! React Element

//JSX - NOT HTML IN JS , it has HTML like syntax or like XML.
// Prevents crossSite Scripting too by sanitizing.

const jsxHeading = (<h1 className="head" tabIndex = "1"> 

Namaste React Using JSX

</h1> );

//If you have to give attributes to JSX use camelCase.

//JSX - First transpiled into React.createElement and then to object and finally to html element(render).

//Babel basically takes all JSX code and converts it into React.createElement()

// Babel is a JavaScript Compiler.


// ! React Component

// Two types of Components in react

// ? 1. Class Based Component  - OLD

// ? 2. Functional Based Component  - NEW
     // Just a normal JS function (always start with uppercase) that returns some piece of JSX code.

// ? How to insert React element to Functional Component ?
// => Treat it as normal js code and insert it within {}.

const title = (
    <h1>react Element</h1>
);

const HeadingComponent1 = () => {
    return <h1 className = "header" > Hey there!</h1>;
}

const Title = () => (
    <h1 className="head" tabIndex="1"> This is Tanveer. </h1>
);


//Another way of writing the above piece of code.
//! Component Composition
// {} --> any js code can be written
const num = 1000;
const HeadingComponent = () => (
    <div id = "container">
    <Title /> 
    <h2>{num}</h2>
    {title}
    <h1>React Functional Component</h1>
    </div>
);

//<Title/> and <Title></Title> are same or simply call {Title()} within {}.
//Note for single line return statement JS  has feature to use fnc like
// ? const fn = () => Single_Line_Expression_without_curly_braces;


const root = ReactDOM.createRoot(document.getElementById("root"));

//! To render a React Functional component u cannot use the below way.
root.render(jsxHeading);

//? Instead use this

root.render(<HeadingComponent />);