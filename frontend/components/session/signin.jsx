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
    this.setState({username: 'g'});
    this.setState({username: 'gu'});
    this.setState({username: 'gus'});
    this.setState({username: 'guest'});
    this.setState({password: 'p'});
    this.setState({password: 'pa'});
    this.setState({password: 'pas'});
    this.setState({password: 'pass'});
    this.setState({password: 'passw'});
    this.setState({password: 'passwo'});
    this.setState({password: 'passwor'});
    this.setState({password: 'password'});
    this.handleSubmit();
  }

  render() {
    return (
      <div className='session-form'>
        <ErrorsContainer />
        <form className='login-form'>
          <input type='string' value={this.state.username}
            onChange={this.handleInput('username')}
            placeholder='Your Username' />

          <input type='password' value={this.state.password}
            onChange={this.handleInput('password')}
            placeholder='Your Password' />

          <button onClick={this.handleSubmit}>Sign in</button>
        </form>

        <button onClick={this.guestLogin}>Demo Sign in</button>
      </div>
    );
  }
}

export default Signin;
