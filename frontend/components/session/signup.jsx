import React from 'react';
import ErrorsContainer from '../errors/errors_container';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleInput(type) {
    return (e) => {
      this.setState({[type]: e.target.value});
    };
  }

  handleSubmit(e) {
    this.props.clearErrors();
    e.preventDefault();
    this.props.createNewUser(this.state)
      .then(() => this.props.history.push('/stream'));
  }

  render() {
    return (
      <div className='session-form-container'>
        <div className='session-form'>
          <div className='session-form-logo' />
          <h2>Create your MusicMist account</h2>
          <form className='signup-form'>
            <label>Your Email:
              <input type='string' value={this.state.email}
                onChange={this.handleInput('email')} />
            </label>

            <label>Choose a Username:
              <input type='string' value={this.state.username}
                onChange={this.handleInput('username')} />
            </label>

            <label>Choose a Password:
              <input type='password' value={this.state.password}
                onChange={this.handleInput('password')} />
            </label>

            <button onClick={this.handleSubmit}>Continue</button>
          </form>
          <ErrorsContainer />
        </div>
      </div>
    );
  }
}

export default Signup;
