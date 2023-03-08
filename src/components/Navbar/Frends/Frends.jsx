import React from 'react';
import s from './Frends.module.css';
import Frend from './Frend/Frend';

const Frends = (props) => {
  //let state = props.frendsData;
  //debugger;
  let frendsElements = props.frendsData.map((f) => (
    <Frend key={f.id} avatar={f.avatar} name={f.name} />
  ));

  return (
    <div className={s.container}>
      <h3>Друзья</h3>
      <div className={s.frends}>{frendsElements}</div>
    </div>
  );
};

export default Frends;
