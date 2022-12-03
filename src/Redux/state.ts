const ADD_POST = 'ADD-POST'
const ADD_POST_CHANGE = 'ADD-POST-CHANGE'
const ON_CHANGE_MASSAGE = 'ON-CHANGE-MASSAGE'

let store = {
    _state: {
        profilePage: {
            postsPage: [
                {id: 1, text: 'i am web developer is react and TypeScript', like: '1'},
            ],//данные постов
            newPostText: 'Helllo',
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
                {massage: 'Hello HelloHello HelloHello HelloHello HelloHello Hello', id: '7'},
                {massage: 'Hello HelloHello HelloHello HelloHello HelloHello Hello', id: '8'},
                {massage: 'Hello HelloHello HelloHello HelloHello HelloHello Hello', id: '8'},
                {massage: 'Hello HelloHello HelloHello HelloHello HelloHello Hello', id: '8'},
                {massage: 'Hello HelloHello HelloHello HelloHello HelloHello Hello', id: '8'},
                {massage: 'Hello HelloHello HelloHello HelloHello HelloHello Hello', id: '8'},
                {massage: 'Hello HelloHello HelloHello HelloHello HelloHello Hello', id: '8'},
            ],//данные сообщений
        },
        newMassageObj:{},
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
        if (action.type === ADD_POST) {
            let newPost: any = {
                id: 10,
                text: this._state.profilePage.newPostText,
                like: 0
            };
            this._state.profilePage.postsPage.push(newPost);
            this._callSubscriber(this._state);
        } else if (action.type === ADD_POST_CHANGE) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if(action.type === ON_CHANGE_MASSAGE){
            let newMassage:any = {
                id: 10,
                massages: this._state.newMassageObj
            }
            this._state.massagesPage.massages.push(newMassage);
            this._callSubscriber(this._state);
        }
    },
}
export const massageCrator = (text: any) => {
    return {type: ON_CHANGE_MASSAGE}
}

export const addPostActionCreator = () => {
    return {type: ADD_POST}
}

export const addPostChange = (text: any) => {
    return {type: ADD_POST_CHANGE, newText: text}
}

export default store;