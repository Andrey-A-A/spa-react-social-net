import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

const setActive = ({ isActive }) => isActive ? s.activeLink : s.item;

const DialogItem = (props) => {
  let path = `/dialogs/${props.id}`;

  return (
    <div className={s.dialog}>
      <img src={props.avatar} alt={props.name} />
      <NavLink to={path} className={setActive}>{props.name}</NavLink>
    </div>
  )
};

export default DialogItem;