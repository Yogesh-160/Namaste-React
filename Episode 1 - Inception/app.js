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
    [React.createElement(

        "div", { id: "child0" },
        [React.createElement
        ("h1", 
        {id:0,style:{color:'green', textAlign:"center"}}, 
        "I am H1 Tag"
    ),React.createElement
    ("h2", 
    {id:1,style:{color:'green', textAlign:"center"}}, 
    "I am H2 Tag"
)]),React.createElement(

    "div", { id: "child1" },
    [React.createElement
    ("h1", 
    {id:0,style:{color:'green', textAlign:"center"}}, 
    "I am H1 Tag"
),React.createElement
("h2", 
{id:1,style:{color:'green', textAlign:"center"}}, 
"I am H2 Tag"
)])]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);

// Note: **React element at the end of the day is Object => This react object becomes html that the browser understands**