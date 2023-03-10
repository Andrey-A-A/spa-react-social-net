import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  postData: [
    { id: 1, message: 'Привет, как дела?', liksCount: '2', avatar: '/img/monkey1.jpg' },
    { id: 2, message: 'Это мой первый пост', liksCount: '5', avatar: '/img/monkey2.jpg' },
  ],
  newPostText: 'Привет лунатикам!',
  profile: null,
};

const profilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 6,
        message: state.newPostText,
        liksCount: 0,
        avatar: '/img/monkey6.jpg',
      };
      return {
        ...state,
        newPostText: '',
        postData: [...state.postData, newPost],
      };

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    default:
      return state;
  }
};

export const addPost = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostText = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};

//Далее описываются функции thunk
export const getUserProfile = (userId) => (dispatch) => {
  return profileAPI.getProfile(userId).then((data) => {
    dispatch(setUserProfile(data));
  });
};

export default profilePageReducer;
