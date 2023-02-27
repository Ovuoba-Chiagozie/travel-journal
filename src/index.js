import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";

let example = document.getElementById('root')
let root = ReactDOM.createRoot(example)

const App = () => {

    return(

        <div className="app">

            <Header />
            <Body />

        </div>
    )

}

root.render(<App />)




