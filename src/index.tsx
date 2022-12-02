import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import store from "./Redux/state";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
let rerenderEntireTree:any = (state:any) =>{
    root.render(
        <React.StrictMode>
            <App state={store.getState()}
                 addPostNew={store.addPostNew}
                 updateChangePostText={store.updateChangePostText}/>
        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);