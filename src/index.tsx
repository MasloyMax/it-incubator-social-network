import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import store from "./Redux/redux-store";



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
let rerenderEntireTree:any = () =>{
    root.render(
        <React.StrictMode>
            <App dispatch={store.dispatch.bind(store)}
                 store={store}/>
        </React.StrictMode>
    );
}

rerenderEntireTree(() =>{
    let state = store.getState()
    rerenderEntireTree(state)
});

store.subscribe(rerenderEntireTree);