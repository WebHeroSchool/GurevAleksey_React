import React from 'react';
import PropTypes from 'prop-types';
import styles from '../AboutInfo/AboutInfo.module.css';
import instagramm from '../Images/instagram.svg';
import linkedin from '../Images/linkedin.svg';
import vk from '../Images/vk.svg';

let AboutInfo = ({bio,mail,tel,location,avatarUrl,userName}) => (
  <div className={styles.about}>
    <img src={avatarUrl} className={styles.avatar} alt='foto' />
    <div className={styles.bio}>
      <h1 className={styles.title}>{ userName }</h1>
      <p className={styles.description}>{ bio }</p>
      <p className={styles.description}><a href={'malito:'+ {mail}} className={styles.link}>{mail}</a></p>
      <p className={styles.description}><a href={'tel:'+ {tel}} className={styles.link}>{tel}</a></p>                        
      <p className={styles.description}>{location}</p>
    </div>
    <div className={styles.socioal}>
      <div className={styles.socialList}>
        <a className={styles.socialItem} href='https://www.instagram.com/alekseygurev' target='_blank' rel="noopener noreferrer"><img src={instagramm} alt='иконка инстаграмм'/> </a>
        <a className={styles.socialItem} href='www.linkedin.com/in/алексей-гурьев-bb06ab80' target='_blank' rel="noopener noreferrer"><img src={linkedin} alt='иконка LinkedIn'/> </a>
        <a className={styles.socialItem} href='https://vk.com/alleksey' target='_blank' rel="noopener noreferrer"><img src={vk} alt='иконка vk'/> </a>
      </div> 
    </div>
  </div>
);

AboutInfo.propTypes = {
  bio: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired
};

export default AboutInfo;