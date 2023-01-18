import {combineReducers, Dispatch, legacy_createStore as createStore} from "redux";
import dialogsReduser, {DialogsActionType} from "./Reduser/dialogsReduser";
import profileReduser, {ActionType} from "./Reduser/profileReduser";
import sideBarReduser from "./Reduser/sideBarReduser";

export let reduCer = combineReducers({
    dialogsReduser,
    profileReduser,
    sideBarReduser
})
let store = createStore(reduCer)

export type AppStateType = ReturnType<typeof reduCer>
export type AppstoreType = typeof store
export type AppDispatchType = Dispatch<AppActions>

export type AppActions = DialogsActionType | ActionType
export default store