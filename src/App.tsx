import React, {Dispatch} from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./comoponents/Header/Header";
import NavMenu from "./comoponents/NavMenu/NavMenu";
import Profile from "./comoponents/Profile/Profile";
import Dialogs from "./comoponents/Dialogs/Dialogs";
import Music from "./comoponents/Music/Music";
import News from "./comoponents/News/News";
import Settings from "./comoponents/Settings/Settings";
import {AppDispatchType, AppStateType, AppstoreType} from "./Redux/redux-store";
import DialogsContainer from "./comoponents/Dialogs/DialogsContainer";

type AppPropsType = {
    dispatch: AppDispatchType
    store: AppstoreType
}

function App(props: AppPropsType) {
    let dialogCompany = <DialogsContainer dispatch={props.dispatch}
                                 store={props.store}/>
    let profileCompany = <Profile store={props.store}/>
    let newsCompany = <News/>
    let musicCompany = <Music/>
    let settingCompany = <Settings/>
    let nawMenuCompany = <NavMenu store={props.store}/>;
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                {nawMenuCompany}
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/dialogs/*" element={dialogCompany}/>
                        <Route path="/profile/*" element={profileCompany}/>
                        <Route path='/news/*' element={newsCompany}/>
                        <Route path='/music/*' element={musicCompany}/>
                        <Route path='/settings/*' element={settingCompany}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
