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

let names = [{name: 'Dimysh', id: '1'},
    {name: 'Tanya', id: '2'},
    {name: 'KOla', id: '3'},
    {name: 'Misha', id: '4'},
    {name: 'Valera', id: '5'},
    {name: 'Dima', id: '6'}
]//данные имён

let massages = [
    {massage: 'Hello', id: '1'},
    {massage: 'Hello Hello', id: '2'},
    {massage: 'Hello Hello Hello Hello', id: '3'},
    {massage: 'Hello HelloHello HelloHello Hello', id: '4'},
    {massage: 'Hello HelloHello HelloHello HelloHello Hello', id: '5'},
    {massage: 'Hello HelloHello HelloHello HelloHello HelloHello Hello', id: '6'},
]//данные сообщений

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App posts={posts} PropsProfile={PropsProfile} names={names} massages={massages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
