import { usersAPI } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWWING_PROGRESS = 'TOGGLE_IS_FOLLOWWING_PROGRESS';
const ADD_CLASSES = 'ADD_CLASSES';

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  addClasses: 'visible',
  followingInProgress: [],
};

const usersPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case SET_USERS: {
      // if (state.users.length > 0) {
      //   return state;
      // }

      return {
        ...state,
        //users: [...state.users, ...action.users],
        //users: [...action.users],
        users: action.users,
      };
    }

    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }

    case SET_TOTAL_COUNT: {
      return {
        ...state,
        totalUsersCount: action.count,
      };
    }

    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }

    case TOGGLE_IS_FOLLOWWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    }

    case ADD_CLASSES: {
      return {
        ...state,
        addClasses: action.addClasses,
      };
    }

    default:
      return state;
  }
};

//Далее идет перечень функций actionCreator, которые возвращают action
export const followSuccess = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};

export const unfollowSuccess = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  };
};

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage, // это тоже самое, но сокращенно - currentPage: currentPage
  };
};

export const setTotalUsersCount = (totalUsersCount) => {
  return {
    type: SET_TOTAL_COUNT,
    count: totalUsersCount,
  };
};

export const toggleIsFatching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  };
};

export const toggleFollowingProgress = (isFetching, userId) => {
  return {
    type: TOGGLE_IS_FOLLOWWING_PROGRESS,
    isFetching,
    userId,
  };
};

export const addClasses = (addClasses) => {
  return {
    type: ADD_CLASSES,
    addClasses,
  };
};

/** далее идут функции thunk Creators */

export const getUsers = (currentPage, pageSize, pageNumber) => {
  return (dispatch) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(toggleIsFatching(true));
    dispatch(addClasses('visible'));
    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(toggleIsFatching(false));
      dispatch(addClasses('hidden'));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  };
};


export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.unfollowUser(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
      }
      dispatch(toggleFollowingProgress(false, userId));
    });
  };
};

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.followUser(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(followSuccess(userId));
      }
      dispatch(toggleFollowingProgress(false, userId));
    });
  };
};

export default usersPageReducer;
