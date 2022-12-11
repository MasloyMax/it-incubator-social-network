import {combineReducers, legacy_createStore as createStore} from "redux";
import dialogsReduser from "./Reduser/dialogsReduser";
import profileReduser from "./Reduser/profileReduser";
import sideBarReduser from "./Reduser/sideBarReduser";

export let reduCer = combineReducers({
    dialogsReduser,
    profileReduser,
    sideBarReduser
})

let store = createStore(reduCer)

export default store