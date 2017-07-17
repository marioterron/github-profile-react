import React, {Component} from 'react'

import styles from './profile.css'

class Profile extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    if (this.props.user.notFound === 'Not Found')
     return (
       <div className={styles.root}>
         <div className={styles.info}>
           <div className={styles.notFound}>
             <h2>Oops!</h2>
             <p>Can't find this user. Try again.</p>
           </div>
         </div>
       </div>
     )
    else {
      return (
        <div className={styles.root}>
          <div className={styles.info}>
            <a href="#">
              <img src={this.props.user.avatar} alt="Profile image" />
            </a>
            <h2>
              <a href={this.props.user.homeUrl}>{this.props.user.name}</a>
            </h2>
            <h3>{this.props.user.location}</h3>
          </div>
          <div className={styles.state}>
            <ul>
              <li>
                <a href="#" target="_blank">
                  <i>{this.props.user.followers}</i>
                  <span>Followers</span>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i>{this.props.user.repos}</i>
                  <span>Repositories</span>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i>{this.props.user.following}</i>
                  <span>Following</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )
    }
  }
}

export default Profile
