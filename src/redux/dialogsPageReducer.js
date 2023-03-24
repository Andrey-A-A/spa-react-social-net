const ADD_MESSAGE = 'ADD_MESSAGE';

let initialState = {
  messagesData: [
    { id: 1, message: 'Привет!', avatar: './img/monkey1.jpg', name: 'Иван' },
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
};

const dialogsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 6,
        message: action.newMessageText,
        avatar: './img/monkey6.jpg',
        name: 'Веня',
      };
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
      };
    default:
      return state;
  }
};

export const actionCreatorAddMessage = (newMessageText) => {
  return {
    type: ADD_MESSAGE,
    newMessageText
  };
};

export default dialogsPageReducer;
