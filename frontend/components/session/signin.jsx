import React from 'react';
import ErrorsContainer from '../errors/errors_container';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  handleInput(type) {
    return (e) => {
      this.setState({[type]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signin(this.state)
      .then(() => this.props.history.push('/'));
  }

  guestLogin() {
    this.setState({
      username: 'guest',
      password: 'password'
    }, function() {this.props.signin(this.state)
      .then(() => this.props.history.push('/'));});
  }

  render() {
    return (
      <div className='session-form-container'>
        <div className='session-form'>
          <div className='session-form-logo' />
          <form className='login-form'>
            <input type='string' value={this.state.username}
              onChange={this.handleInput('username')}
              placeholder='Your Username' />

            <input type='password' value={this.state.password}
              onChange={this.handleInput('password')}
              placeholder='Your Password' />

            <button onClick={this.handleSubmit}>Sign in</button>
          </form>

          <button className='demo-button'
            onClick={this.guestLogin}>
            Demo Sign in</button>

          <ErrorsContainer />
        </div>
      </div>
    );
  }
}

export default Signin;
