import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import {addPostNew, subscribe, updateChangePostText} from "./Redux/state";
import state from'./Redux/state';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
let rerenderEntireTree:any = (state:any) =>{
    root.render(
        <React.StrictMode>
            <App state={state}
                 addPostNew={addPostNew}
                 updateChangePostText={updateChangePostText}/>
        </React.StrictMode>
    );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);