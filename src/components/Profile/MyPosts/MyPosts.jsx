import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  //debugger;
  let postsElements = props.postData.map((p) => (
    <Post key={p.id} message={p.message} liksCount={p.liksCount} avatar={p.avatar} />
  ));

  const newPostElement = React.useRef('Введите сообщение');

  const onAddPost = () => {
    props.addPost();
  };

  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.postsBlock}>
      <h3>Мои посты</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        </div>
        <div>
          <button onClick={onAddPost}>Добавить пост</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
