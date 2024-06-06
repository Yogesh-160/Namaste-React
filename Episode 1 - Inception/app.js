// All React Code

/*const heading = React.createElement(
    "h1", 
    {id:"heading", style: {color: "red"}},
     "Hello World from React!!"
    );


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);*/


// Creating nested div in react

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(

        "div", { id: "child" },
        React.createElement
        ("h1", 
        {style:{color:'green',fontSize:"45px", textAlign:"center"}}, 
        "I am H1 Tag"
    )));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);