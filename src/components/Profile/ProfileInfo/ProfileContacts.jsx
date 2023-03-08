import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileContacts = (props) => {
  let filtration = ([key, value]) => {
    if (value === null) {
      return false;
    }
    return [key, value];
  };

  let filtered = Object.entries(props.contacts).filter(filtration);

  return filtered.map(([key, value]) => {
    return (
      <div key={key} className={classes.contacts__item}>
        <a
          target="_blank"
          href={`https://${value}`}
          rel="nofollow noopener noreferrer"
          className={classes.contacts__link}>
          {`${value}`}
        </a>
      </div>
    );
  });
};

export default ProfileContacts;
