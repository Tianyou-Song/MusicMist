import React from 'react';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
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
        <h2>Sign in</h2>
        <form>
          <label>Username:
            <input type='string' value={this.state.username}
              onChange={this.handleInput('username')} />
          </label>

          <label>Password:
            <input type='password' value={this.state.password}
              onChange={this.handleInput('password')} />
          </label>

          <button onClick={this.handleSubmit}>Sign in</button>
        </form>
      </div>
    );
  }
}

export default Signin;
