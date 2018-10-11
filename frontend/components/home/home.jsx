import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        <h2>Welcome home {this.props.currentUser.username}</h2>
      </div>
    );
  }
}

export default Home;
