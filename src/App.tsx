import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./comoponents/Header/Header";
import NavMenu from "./comoponents/NavMenu/NavMenu";
import Profile from "./comoponents/Profile/Profile";
import Dialogs from "./comoponents/Dialogs/Dialogs";
import Music from "./comoponents/Music/Music";
import News from "./comoponents/News/News";
import Settings from "./comoponents/Settings/Settings";
import DialogsReduserType from "./Redux/Reduser/dialogsReduser"
import ProfileReduserType from "./Redux/Reduser/dialogsReduser"

// type AppType = {
//     dialogs: typeof DialogsReduserType
//     profile: typeof ProfileReduserType
//     callBack: () => void
// }
function App(props: any) {
    console.log(props)
    let dialogCompany = <Dialogs dispatch={props.dispatch}
                                 state={props.store.getState().dialogsReduser.massagesPage}/>
    let profileCompany = <Profile state={props.store.getState().profileReduser}
                                  dispatch={props.dispatch}/>
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
