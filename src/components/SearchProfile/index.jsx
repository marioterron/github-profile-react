import React, {Component} from 'react'

import styles from './search-profile.css'

class SearchProfile extends Component {
  constructor (props) {
    super(props)
  }

  handleForm (e) {
    e.preventDefault()
    let username = this.refs.username.value
    this.props.fetchProfile(username)
    this.refs.username.value = ''
  }

  render () {
    return (
      <div className={styles.root}>
        <form onSubmit={this.handleForm.bind(this)}>
          <label><input type="search" ref="username" placeholder="Type Username + Enter" /></label>
        </form>
      </div>
    )
  }
}

export default SearchProfile
