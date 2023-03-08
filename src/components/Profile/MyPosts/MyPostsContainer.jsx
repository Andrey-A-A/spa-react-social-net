//import React from 'react';
import { addPost, updateNewPostText } from '../../../redux/profilePageReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux/es/exports';

//const MyPostsContainer = () => {
//закомментирую пока эту часть компонента для использования context, так
/*
  let state = props.store.getState();
  const addPost = () => {
    props.store.dispatch(actionCreatorAddPost())
  }

  const onPostChange = (text) => {
    props.store.dispatch(actionCreatorUpdateNewPostText(text));
  }
  */

//Закомментирую этот вывод для подключения контекста
/*return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={addPost}
      postData={state.profilePage.postData}
      newPostText={state.profilePage.newPostText}
    />
  )*/

//   return (
//     <StoreContext.Consumer>
//       {
//         (store) => {
//           let state = store.getState();
//           const addPost = () => {
//             store.dispatch(actionCreatorAddPost())
//           }
//           const onPostChange = (text) => {
//             store.dispatch(actionCreatorUpdateNewPostText(text));
//           }
//           return <MyPosts
//             updateNewPostText={onPostChange}
//             addPost={addPost}
//             postData={state.profilePage.postData}
//             newPostText={state.profilePage.newPostText}
//           />
//         }
//       }

//     </StoreContext.Consumer>

//   );
// }

let mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(updateNewPostText(text));
    },
    addPost: () => {
      dispatch(addPost());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
