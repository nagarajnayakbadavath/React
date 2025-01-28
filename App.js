import React from "react";
import ReactDOM from "react-dom/client";

// const JsxHeading=()=>(
//     <div>
//         <h1 id="heading">Hello Man!</h1>
//     </div>
// );

//Make a react title

const title=(
    <div>
        <h1>Hey This is React Element</h1>
    </div>
);

const Head=()=>(
    <div>
        <h1>Hello Man I am making the functional react to access in three different ways</h1>
    </div>
);

//create a react function
const Heading=()=>(
    <div>
        {Head()}
        <Head/>
        <Head></Head>
        <h1>Hey I am Created React Function</h1>
    </div>
);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>);