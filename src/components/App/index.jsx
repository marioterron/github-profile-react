import React, {Component} from 'react'

import styles from './app.css'
import SearchProfile from '../SearchProfile'
import Profile from '../Profile'
import Footer from '../Footer'


const URL = `https://api.github.com/users`

class App extends Component {
  constructor () {
    super()

    this.state = {
      username: 'MarioTerron',
      name: '',
      avatar: '',
      location: '',
      repos: '',
      followers: '',
      following: '',
      homeUrl: '',
      notFound: ''
    }
  }

  fetchProfile (username) {
    fetch(`${URL}/${username}`)
      .then(response => {
        return response.json()
      })
      .then(user => {
        this.setState({
          username: user.login,
          name: user.name,
          avatar: user.avatar_url,
          location: user.location,
          repos: user.public_repos,
          followers: user.followers,
          following: user.following,
          homeUrl: user.html_url,
          notFound: user.message })
      })
      .catch(err => console.log('Oops! An error ocurred.'))
  }

  componentWillMount () {
    this.fetchProfile(this.state.username)
  }

  render () {
    return (
      <div>
        <section id={styles.card}>
          <SearchProfile fetchProfile={this.fetchProfile.bind(this)} />
          <Profile user={this.state} />
        </section>
        <Footer />
      </div>
    )
  }
}
export default App
