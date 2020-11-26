import React from 'react';
import PropTypes from 'prop-types';
import styles from '../AboutRepos/AboutRepos.module.css';
import star from '../Images/Star.svg';
import fork from '../Images/Stroke.svg';


let AboutRepos = ({repoList,getMonth,colorLanguage}) => (
  <div className={styles.repo}>
    <h3 className={styles.title}>Репозитории на github.com</h3>
    <ul className={styles.list}>
      {repoList.map(repo => (
        <li key = { repo.id } className={styles.item}>
          <p className={styles.text}><a href={ repo.html_url } className={styles.linkText} target='blank' >{ repo.name }</a></p>
          <ul className={styles.info}>
            <li className={styles.itemInfo}>
                {repo.language != null ?
                  <div>
                    <span style={{ backgroundColor: colorLanguage(repo.language)}} className={styles.color}></span>{repo.language}
                  </div> 
                  : 'Язык неопределен'}
            </li>
            <li className={styles.itemInfo}>
              <img src={star} alt='картинка'/>
              <span
                className={styles.star}>
                  {repo.stargazers_count}
              </span>
            </li>
            <li className={styles.itemInfo}>
              <img src={fork} alt='картинка'/>
              <span
                className={styles.fork}>
                {repo.forks}
              </span>
            </li>
            <li className={styles.itemInfo}>
              <span className={styles.data}>
                обновлено {getMonth(repo.updated_at.slice(5,7))} {repo.updated_at.slice(8,10)}, {repo.updated_at.slice(0,4)}
              </span>
            </li>
          </ul>
        </li>
      ))}
    </ul>
  </div>
);

AboutRepos.propTypes = {
  repoList: PropTypes.array.isRequired,
  getMonth: PropTypes.func,
  colorLanguage: PropTypes.func
};

export default AboutRepos;