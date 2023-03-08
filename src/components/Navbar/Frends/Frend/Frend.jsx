import React from 'react';
import s from './../Frends.module.css';

const Frend = (props) => {
  return (
    <div className={s.frend}>
      <img src={props.avatar} alt={props.name} />
      <p>{props.name}</p>
    </div>
  )
}

export default Frend;