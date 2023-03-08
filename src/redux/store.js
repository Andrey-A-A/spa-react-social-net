import dialogsPageReducer from './dialogsPageReducer';
import profilePageReducer from './profilePageReducer';
import sidebarReducer from './sidebarReducer';

let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: 'Привет, как дела?', liksCount: '2', avatar: './img/monkey1.jpg' },
        { id: 2, message: 'Это мой первый пост', liksCount: '5', avatar: './img/monkey2.jpg' },
      ],
      newPostText: 'Привет лунатикам!',
    },
    dialogsPage: {
      messagesData: [
        { id: 1, message: 'Привет!', avatar: './img/monkey1.jpg', name: "Иван" },
        { id: 2, message: 'Как дела?', avatar: './img/monkey2.jpg', name: 'Семен' },
        { id: 3, message: 'Учусь понемногу', avatar: './img/monkey3.jpg', name: 'Таня' },
        { id: 4, message: 'Интересно', avatar: './img/monkey4.jpg', name: 'Паша' },
        { id: 5, message: 'Скорей бы найти работу!', avatar: './img/monkey5.jpg', name: 'Миша' },
      ],
      dialogsData: [
        { id: 1, name: 'Иван', avatar: './img/monkey1.jpg' },
        { id: 2, name: 'Семен', avatar: './img/monkey2.jpg' },
        { id: 3, name: 'Таня', avatar: './img/monkey3.jpg' },
        { id: 4, name: 'Паша', avatar: './img/monkey4.jpg' },
        { id: 5, name: 'Миша', avatar: './img/monkey5.jpg' },
      ],
      newMessageText: 'Миру быть!',
    },
    sidebar: {
      frendsData: [
        { id: 1, avatar: './img/monkey3.jpg', name: 'Таня' },
        { id: 2, avatar: './img/monkey4.jpg', name: 'Паша' },
        { id: 3, avatar: './img/monkey5.jpg', name: 'Миша' },
      ],
    }
  },
  _callSubscriber() {
    console.log('state changed');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profilePageReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);

  }
}





export default store;

window.store = store;