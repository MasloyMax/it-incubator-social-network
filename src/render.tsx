import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import  {addPostNew} from "./Redux/state";
import state from'./Redux/state';

export let rerenderEntireTree:any = () =>{
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );
    root.render(
            <React.StrictMode>
                <App state={state} addPostNew={addPostNew}/>
            </React.StrictMode>
    );
}
