import React, {Component} from 'react'

import styles from './profile.css'

class Profile extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className={styles.root}>
        <div className={styles.info}>
          <a href="#">
            <img src={this.props.user.avatar_url} alt="Profile image" />
          </a>
          <h2>
            <a href={this.props.user.html_url}>{this.props.user.name}</a>
          </h2>
          <h3>{this.props.user.location}</h3>
        </div>
        <div className={styles.state}>
          <ul>
            <li>
              <a href="#">
                <i>{this.props.user.followers}</i>
                <span>Followers</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i>{this.props.user.public_repos}</i>
                <span>Repositories</span>
              </a>
            </li>
            <li>
              <a href="#">
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

export default Profile
