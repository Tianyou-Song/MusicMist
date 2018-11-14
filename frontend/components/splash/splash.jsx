import React from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { SongIndexContainer } from '../song/index_container';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='session-form-container'>
          <div className='splash-top'>
            <div className='splash-top-content'>
              <div className='splash-top-title'>
                What's next in music is first on MusicMist
              </div>
              <div className='splash-top-body'>
                Upload your first track and begin your journey. MusicMist gives you space to create, find your fans, and connect with other artists.
              </div>
              <Link to='/signup' className='splash-top-signup'>Create an account today</Link>
            </div>
          </div>
          <div className='splash-bottom'>
            <ul className='splash-song-list'>
              <SongIndexContainer />
            </ul>
          </div>
      </div>
    );
  }
}

export default Splash;
