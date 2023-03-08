import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  //debugger;
  return (
    <div className={s.item}>
      <img className={s.pic} src={props.avatar} alt="" />
      <p>{props.message}</p>
      <div>
        <span>like {props.liksCount}</span>
      </div>
    </div>
  );
};

export default Post;
