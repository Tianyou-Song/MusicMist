import React from 'react';

class Home extends React.Component {
  componentDidMount() {
    this.props.closeModal();
  }

  render() {
    return (
      <div className='home'>
        <h2>Welcome home {this.props.currentUser.username}</h2>
      </div>
    );
  }
}

export default Home;
