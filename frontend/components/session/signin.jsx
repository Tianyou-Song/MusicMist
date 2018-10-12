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
      .then(() => this.props.history.push('/')); //need other routes
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
      </div>
    );
  }
}

export default Signin;
