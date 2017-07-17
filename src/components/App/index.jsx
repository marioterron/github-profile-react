import React, {Component} from 'react'
import styles from './app.css'
import Profile from '../Profile'

const URL = `https://api.github.com/users/MarioTerron`

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: {}
    }
  }

  componentWillMount () {
    fetch(`${URL}`)
      .then(response => {
        return response.json()
      })
      .then(user => {
        this.setState({ user })
      })
      .catch(err => console.log('Oops! An error ocurred.'))
  }

  render () {
    return (
      <div>
        <section id={styles.card}>
          <Profile user={this.state.user} />
        </section>
        <div className={styles.footer}>Made with <span className="fa fa-heart"></span> by <a href="http://www.twitter.com/MarioTerron">Mario Terron</a></div>
      </div>

    )
  }
}
export default App
