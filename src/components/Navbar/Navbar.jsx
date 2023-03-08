import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import FrendsContainer from './Frends/FrendsContainer';

/* 
classes - это объект содержащий свойства - сопоставимые названию классов и их значения, которые и будут подставлятся взамен названий этих классов, таким образом будет достигаться инкапсуляция, и мы можем использовать одинаковые названия классов, которые могут встречаться где-то ещё на проекте, но из-за уникальных значений для свойств эти классы не будут сквозными. а будут действовать только в рамках конкретного модуля
let classes = {
  'nav': 'Navbar_nav__54de3',
  'item': 'Navbar_item__3qaF3', 
  'active': 'Navbar_active__234Os',
}
если нам нужно использовать двойное или тройное именоване класса, например div с классом item active, то className={`${classes.item} ${classes.active}`} то есть записываем как бы через пробел эти классы с использованием ES6 синтаксиса.
*/
const setActive = ({ isActive }) => (isActive ? s.activeLink : s.item);

const Navbar = (props) => {
  return (
    <nav className={s.nav}>
      <div>
        <div className={`${s.item} ${s.activeLink}`}>
          <NavLink to="/profile" className={setActive}>
            Профиль
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/dialogs" className={setActive}>
            Сообщения
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/users" className={setActive}>
            Пользователи
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/news" className={setActive}>
            Новости
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/music" className={setActive}>
            Музыка
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/settings" className={setActive}>
            Настройки
          </NavLink>
        </div>
      </div>
      <FrendsContainer />
      {/* <StoreContext.Consumer>
        {
          (store) => {
            let state = store.getState();
            return <Frends frendsData={state.sidebar.frendsData} />
          }
        }
      </StoreContext.Consumer> */}

      {/* Закомментирую этот вывод для подключения контекста */}
      {/* <Frends frendsData={props.frendsData} /> */}
    </nav>
  );
};

export default Navbar;
