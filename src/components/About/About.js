import React from 'react';
import '../Fonts/Fonts.css';
import CardContent from '@material-ui/core/CardContent';
import Loader from '../Loader/Loader.gif';
import { Octokit } from '@octokit/rest';
import styles from '../About/About.module.css'

let octokit = new Octokit();

class About extends React.Component {

  state = {
    userName : '',
    avatarUrl : '',
    bio :'',
    isLoading: true,
    repoList: [],
    errorLoad: false,
    errorText: '' 
  }

  componentDidMount () {    
    octokit.repos.listForUser({
      username: '6thSencedfd'
    }).then(({ data }) => {
      this.setState({
        repoList: data,
        isLoading: false,
      })
    })
    .catch(error => (this.setState({
      isLoading: false,
      errorLoad: true,
      errorText: error.name
    })));

    octokit.users.getByUsername({
      username: '6thSence'
    }).then(( user ) => {
      this.setState({
        userName : user.data.login,
        avatarUrl : user.data.avatar_url,
        bio: user.data.bio
      })
      console.log(user)
    })
  }

  render() {
    let { isLoading, repoList,errorLoad,errorText,userName,avatarUrl,bio } = this.state;
    return(
      <CardContent className={styles.container}>
        <h1>
          { isLoading ? <img src={ Loader } alt="Загрузка..." /> : 'Обо мне' }
        </h1>
      
        { !isLoading &&
          <div>
            {errorLoad ? <p className={styles.error}>Ошибка загрузки: { errorText } </p> : 
              <div>
                <div className={styles.about}>
                  <div className={styles.bio}>
                    <p>Пользователь: { userName }</p>
                    <p>Информация о пользователе: { bio }</p>
                  </div>
                  <img src={avatarUrl} alt='foto' width='150' /> 
                </div>
                
                <h2>Мои репозитории</h2>
                <ol>
                  {repoList.map(repo => (
                    <li key = { repo.id }>
                    <a href={ repo.html_url } className={styles.link} target='blank' >{ repo.name }</a>
                    </li>
                  ))}
                </ol>
              </div>  
            }
          </div>
        }
      </CardContent>
    );
  }
}


export default About;