import dialogsReduser from "./Reduser/dialogsReduser";
import profileReduser from "./Reduser/profileReduser";

let store = {
    _state: {
        profilePage: {
            postsPage: [
                {id: 1, text: 'i am web developer is react and TypeScript', like: '1'},
            ],//данные постов
            newPostText: '',
            propsProfile: [
                {name: 'masloyMax'},
                {data: '12.01.1994'},
                {city: 'Voronizh'},
                {education: 'Heaigth'},
                {website: "it's him"},
            ],//данные профиля
        },
        massagesPage: {
            names: [{name: 'Dimysh', id: '1'},
                {name: 'Tanya', id: '2'},
                {name: 'KOla', id: '3'},
                {name: 'Misha', id: '4'},
                {name: 'Valera', id: '5'},
                {name: 'Dima', id: '6'},
                {name: 'Masha', id: '7'},
                {name: 'kasha', id: '8'},
                {name: 'kasha', id: '9'},
                {name: 'kasha', id: '10'},
                {name: 'kaadsfsha', id: '11'},
                {name: 'kafasha', id: '12'},
                {name: 'kzfdasha', id: '13'}
            ],//данные имён
            massages: [
                {massage: 'Hello', id: '1'},
                {massage: 'Hello Hello', id: '2'},
                {massage: 'Hello Hello Hello Hello', id: '3'},
                {massage: 'Hello HelloHello HelloHello Hello', id: '4'},
                {massage: 'Hello HelloHello HelloHello HelloHello Hello', id: '5'},
                {massage: 'Hello HelloHello HelloHello HelloHello HelloHello Hello', id: '6'},
            ],//данные сообщений
            newMassageBody: '',
        },
        sitebar: {
            namesFriends: [
                {name: 'Andrew'},
                {name: 'Sasha'},
                {name: 'Sveta'},
            ]
        }
    },
    _callSubscriber: function (props: any) {
        console.log('ss')
    },
    getState: function () {
        return this._state
    },
    subscribe: function (observer: any) {
        this._callSubscriber = observer //паттерн обсервер
    },
    dispatch: function (action: any) {
        this._state.profilePage = profileReduser(this._state.profilePage, action)
        this._state.massagesPage = dialogsReduser(this._state.massagesPage, action)
        this._callSubscriber(this._state)
    },
}

export default store;