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
    this.props.createNewUser(this.state)
      .then(() => this.props.history.push('/')); //need other routes
  }

  render () {
    return (
      <div className='session-form'>
        <ErrorsContainer />
        <h2>Create account</h2>
        <form>
          <label>Username:
            <input type='string' value={this.state.username}
              onChange={this.handleInput('username')} />
          </label>

          <label>Email:
            <input type='string' value={this.state.email}
              onChange={this.handleInput('email')} />
          </label>

          <label>Password:
            <input type='password' value={this.state.password}
              onChange={this.handleInput('password')} />
          </label>

          <button onClick={this.handleSubmit}>Create account</button>
        </form>
      </div>
    );
  }
}

export default Signup;
