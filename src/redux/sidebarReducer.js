const ADD_FREND = 'ADD_FREND';

let initialState = {
  frendsData: [
    { id: 1, avatar: '/img/monkey3.jpg', name: 'Таня' },
    { id: 2, avatar: '/img/monkey4.jpg', name: 'Паша' },
    { id: 3, avatar: '/img/monkey5.jpg', name: 'Миша' },
  ],
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FREND:
      return state;

    default:
      return state;
  }
};

export default sidebarReducer;
