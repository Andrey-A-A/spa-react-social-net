import React from 'react';
import preloader from './../../../assets/img/preloader.svg';
import styles from './Preloader.module.css';

let Preloader = (props) => {
  //debugger;
  return (
    <div>
      <img
        src={preloader}
        // id={styles['preloader']}
        className={styles[props.addClasses]}
        alt="идет загрузка..."
      />
    </div>
  );
};

export default Preloader;
