import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, text: 'i am web developer is react and TypeScript', like: '1'},
    {id: 2, text: 'My name is Max', like: '2'},
    {id: 4, text: 'hello, my social network!', like: '3'},
    {id: 4, text: 'hello, my social network!', like: '3'},
    {id: 4, text: 'hello, my social network!', like: '3'},
    {id: 4, text: 'hello, my social neffftwork!', like: '3'}
]

let PropsProfile = {
    name:'masloyMax',
    city:'Voronizh',
    education:'Heaigth',
    website: "it's him"
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App posts={posts} PropsProfile={PropsProfile}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
