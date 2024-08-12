/************************** First React Code*************************** */

/* 
 const heading = React.createElement("h1",{
    id:"heading" },"its come from app.js file");;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
*/


/******************  Nested Element in the REACT***************** */
/* example
* <div id:parent>
*     <div id= "child"> 
*           <h2> i am h1 tag</h1>
*     </div>   
* </div>
*/

/*
const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
    React.createElement("h1",{}," i am h1 tag and nested tag")));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
*/
// to create sibling of h1 tag we need to assing array liki square bracket []

/**
 const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},[React.createElement("h1",{}," i am h1 tag"),React.createElement("h2",{},"i am h22 tag")]
    ));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
 */


// to create sibling of child  tag we need to assing array like square bracket []
const parent = React.createElement("div",{id:"parent"},[ React.createElement("div",{id:"child"},[React.createElement("h1",{}," i am h1 tag"),React.createElement("h2",{},"i am h22 tag")]
),React.createElement("div",{id:"child2"},[React.createElement("h1",{}," i am h1 tag of child 2"),React.createElement("h2",{},"i am h2 tag of child2")])]
   );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
