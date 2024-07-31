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




const heading = React.createElement(
    "h1",
    {id:"heading"},
    "Hello from ReactJs"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);