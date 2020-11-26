import React from 'react';
import '../Fonts/Fonts.css';
import Loader from '../Images/Loader.gif';
import { Octokit } from '@octokit/rest';
import styles from '../About/About.module.css';
import error from '../Images/eror.png';
import AboutInfo from '../AboutInfo/AboutInfo'
import AboutRepos from '../AboutRepos/AboutRepos';

let octokit = new Octokit();

class About extends React.Component {

  state = {
    userName : '',
    avatarUrl : '',
    bio :'',
    mail:'gurevaleksey@yandex.ru',
    tel:'+79817931299',
    location:'',
    isLoading: true,
    repoList: [],
    errorLoad: false,
  }

  getMonth = (month) => {
    let rusMonth = '';
    switch (month) {
      case '01' :
        rusMonth = 'январь';
        break;
      case '02' :
        rusMonth = 'февраль';
        break; 
      case '03' :
        rusMonth = 'март';
      break;
      case '04' :
        rusMonth = 'апрель';
      break;
      case '05' :
        rusMonth = 'май';
      break;
      case '06' :
        rusMonth = 'июнь';
      break;
      case '07' :
        rusMonth = 'июль';
      break;
      case '08' :
        rusMonth = 'август';
      break;
      case '09' :
        rusMonth = 'сентябрь';
      break;
      case '10' :
        rusMonth = 'отктябрь';
      break;
      case '11' :
        rusMonth = 'ноябрь';
      break;
      case '12' :
        rusMonth = 'декабрь';
      break;
      default:      
    }
    return rusMonth
  }

  colorLanguage = (language) => {
    let color = '';
    switch (language) {
      case 'JavaScript' :
        color = '#f1e05a';
        break;
      case 'HTML' :
        color = '#e34c26';
        break; 
      case 'CSS' :
        color = '#563d7c';
      break;
      default:
        color = '#fff';     
    }
    return color
  };


  componentDidMount () {
    octokit.repos.listForUser({
      username: '6thSence'
    }).then(({ data }) => {
      this.setState({
        repoList: data,
        isLoading: false,
      })
      // console.log(data)
    })
    .catch(error => (this.setState({
      isLoading: false,
      errorLoad: true,
      errorText: error.name
    })));

    octokit.users.getByUsername({
      username: 'AlekseyGurev'
    }).then(( user ) => {
      this.setState({
        userName : user.data.name,
        avatarUrl : user.data.avatar_url,
        bio: user.data.bio,
        location: user.data.location
      })
      // console.log(user)
    })
  }

  render() {
    let { isLoading, repoList,errorLoad,userName,avatarUrl,bio,mail,location,tel} = this.state;

    return(
        <div className={styles.loader}>
          { isLoading ? <img src={ Loader } className={styles.imageLoader} alt="Загрузка..." /> : 
            <div className={styles.container}>
              { !isLoading &&
                <div>
                  {errorLoad ? 
                    <div className={styles.image}>
                      <img src={error} alt='картинка'/>
                      <p>Что-то пошло не так...</p>
                      <p>Попробуйте <a href='.'>загрузить </a> ещё раз</p>
                    </div>: 
                    <div>
                      <AboutInfo
                        userName = {userName}
                        avatarUrl = {avatarUrl}
                        bio= { bio }
                        mail= { mail }
                        tel= { tel }
                        location = {location}
                      />
                     
                     {repoList == null? 
                      <div className={styles.image}>
                        <img src={error} alt='картинка'/>
                        <p>Репозитории отсутствуют.</p>
                        <p>Добавьте как минимум один репозиторий на <a href='https://github.com' target='_blank' rel="noopener noreferrer">github.com</a></p>
                      </div>:
                        <AboutRepos
                          repoList = {repoList}
                          getMonth = {this.getMonth}
                          colorLanguage = {this.colorLanguage}
                        />
                      }
                    </div>  
                  }
                </div>
              }
            </div>
          }
        </div>
    );
  }
}

export default About;