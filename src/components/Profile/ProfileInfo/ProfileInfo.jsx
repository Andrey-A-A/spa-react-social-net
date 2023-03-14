import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css';
import ProfileContacts from './ProfileContacts';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  
  return (
    <>
      <div className={classes.descriptionBlock}>
        <h1>Профиль пользователя {props.profile.fullName}</h1>
        <img src={props.profile.photos.large} alt={props.profile.fullName} />
        <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
        <div>Коротко обо мне: {props.profile.aboutMe}</div>
        <div>Использую в работе: {props.profile.lookingForAJobDescription}</div>
        <div>
          В поиске работы: {props.profile.lookingForAJob ? <span>Да</span> : <span>Нет</span>}
        </div>
        <div>
          Мои контакты:
          <ul>
            <li>facebook: {props.profile.contacts.facebook}</li>
            <li>
              сайт:{' '}
              {props.profile.contacts.website ? (
                <span>{props.profile.contacts.website}</span>
              ) : (
                <span>Нет</span>
              )}
            </li>
            <li>
              ВКонтакте:{' '}
              {props.profile.contacts.vk ? (
                <span>{props.profile.contacts.vk}</span>
              ) : (
                <span>Нет</span>
              )}
            </li>
            <li>
              instagram:{' '}
              {props.profile.contacts.instagram ? (
                <span>{props.profile.contacts.instagram}</span>
              ) : (
                <span>Нет</span>
              )}
            </li>
            <li>
              youtube:{' '}
              {props.profile.contacts.youtube ? (
                <span>{props.profile.contacts.youtube}</span>
              ) : (
                <span>Нет</span>
              )}
            </li>
            <li>
              github:{' '}
              {props.profile.contacts.github ? (
                <span>{props.profile.contacts.github}</span>
              ) : (
                <span>Нет</span>
              )}
            </li>
            <li>
              главная ссылка:{' '}
              {props.profile.contacts.mainLink ? (
                <span>{props.profile.contacts.mainLink}</span>
              ) : (
                <span>Нет</span>
              )}
            </li>
          </ul>
        </div>
        <ProfileContacts contacts={props.profile.contacts} />
      </div>
    </>
  );
};

export default ProfileInfo;
