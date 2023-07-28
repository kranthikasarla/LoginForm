// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showErrorMsg: false,
    errorMsg: '',
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.setState({
        showErrorMsg: true,
        errorMsg: data.error_msg,
      })
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, showErrorMsg, errorMsg} = this.state
    return (
      <div className="login-page-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-image"
        />
        <div className="login-container">
          <form onSubmit={this.submitForm}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="login-logo"
            />
            <div className="username-container">
              <label htmlFor="username" className="label-text">
                USERNAME
              </label>
              <input
                type="text"
                id="username"
                className="input-text"
                placeholder="Enter UserName"
                value={username}
                onChange={this.onChangeUsername}
              />
            </div>
            <div className="password-container">
              <label htmlFor="password" className="label-text">
                PASSWORD
              </label>
              <input
                type="password"
                id="password"
                className="input-text"
                placeholder="Enter Password"
                value={password}
                onChange={this.onChangePassword}
              />
              <button type="submit" className="login-button">
                Login
              </button>
            </div>
            {showErrorMsg ? <p className="error-msg">{`*${errorMsg}`}</p> : ''}
          </form>
        </div>
      </div>
    )
  }
}
export default LoginForm
