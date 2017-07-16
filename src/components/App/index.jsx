import React, {Component} from 'react'

import styles from './app.css'
import UserProfile from '../UserProfile'

class App extends Component {
  constructor () {
    super()

    this.state = {
      githubProfile: {}
    }
  }

  componentWillMount () {
    fetch('https://api.github.com/users/MarioTerron')
      .then(response => {
        return response.json()
      }).then(user => {
        this.setState({githubProfile: user})
        console.log(this.state.githubProfile)
      })
  }

  render () {
    return (
      <UserProfile user={this.state.githubProfile} />
    )
  }
}
export default App
