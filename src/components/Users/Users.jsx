import React from 'react';
import styles from './Users.module.css';
import userAvatar from '../../assets/img/users1.png';
import { NavLink } from 'react-router-dom';

const Users = (props) => {
  
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  if (pagesCount > 10) {
    if (props.currentPage > 5) {
      for (let i = props.currentPage - 4; i <= props.currentPage + 5; i++) {
        pages.push(i);
        if (i === pagesCount) break;
      }
    } else {
      for (let i = 1; i <= 10; i++) {
        pages.push(i);
        if (i === pagesCount) break;
      }
    }
  } else {
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
  }

  let users = props.users;
  /* Здесь я попытался ограничить вывод только пользователей имеющих фотографию, но надо подумать как не отображать страницы со списком пользователей, которые не прошли фильтр 
  
  const onlyWithPhotos = (person) => {
    return person.photos.small !== null;
  };
  //debugger;

  const withPhotos = (users) => {
    return users.filter(onlyWithPhotos);
  };
  let coders = withPhotos(users);
  */
  // const nextPage = () => props.setCurrentPage((prev) => prev + 1);
  // const previousPage = () => props.setCurrentPage((prev) => prev - 1);

  return (
    <div className={styles.users}>
      <div className={styles.pagination}>
        {pages.map((p) => {
          //debugger;
          return (
            <div
              className={props.currentPage === p ? styles.selectedPage : styles.unselectedPage}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
              key={p.toString()}>
              {p}
            </div>
          );
        })}
      </div>
      {/* <button className={styles.btn} onClick={previousPage}>
        Назад
      </button>
      <button className={styles.btn} onClick={nextPage}>
        Вперед
      </button> */}

      {users.map((u) => {
        let keyU = u.id.toString();
        //debugger;
        return (
          <div key={keyU} className={styles.user}>
            <div className={styles.user__left}>
              <div>
                <NavLink to={'/profile/' + u.id}>
                  <img
                    src={u.photos.small != null ? u.photos.small : userAvatar}
                    alt={u.name}
                    className={styles.userPhoto}
                  />
                </NavLink>
              </div>
              <div>
                {u.followed ? (
                  <button
                    disabled={props.followingInProgress.some((id) => id === u.id)}
                    onClick={() => {
                      props.unfollow(u.id);
                    }}>
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgress.some((id) => id === u.id)}
                    onClick={() => {
                      props.follow(u.id);
                    }}>
                    Follow
                  </button>
                )}
              </div>
            </div>
            <div className={styles.user__right}>
              <div>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </div>
              <div>
                <div>{'u.location.city'}</div>
                <div>{'u.location.country'}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
