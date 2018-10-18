import React from 'react';
import {Link} from 'react-router-dom';

import {
  RECEIVE_SONG,
  RECEIVE_ERRORS
} from '../../actions/song';

class Show extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchSong(this.props.match.params.id)
      .then(res => {
        const song = res.song;
        this.props.fetchUser(Object.values(song)[0].uploader_id);
      });
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id != newProps.match.params.id) {
      return this.props.fetchSong(newProps.match.params.id)
        .then(res => this.props.fetchUser(Object.values(res.song)[0].uploader_id));
    }
  }

  handleDelete() {
    if (this.props.currentUser && this.props.currentUser.id === this.props.song.uploader_id) {
      return (
        this.props.deleteSong(this.props.song.id)
        .then(() => this.props.history.push('/stream'))
      );
    }
  }

  editInfo() {
    if (this.props.currentUser && this.props.currentUser.id === this.props.song.uploader_id) {
      return (
        <div className='song-show-buttons'>
          <button className='song-show-edit-button' onClick={() => this.props.openModal('edit')}>Edit</button>
          <button className='song-show-delete-button' onClick={this.handleDelete}>Delete track</button>
        </div>
      );
    }
  }

  render() {
    if (!this.props.song) {
      return null;
    }

    return (
      <div className='session-form-container'>
        <div className='song-show-top'>
          <div className='song-show-info'>
            <div>
              <div className='song-show-owner-username'>{this.props.song.uploader}</div>
            </div>
            <div>
              <div className='song-show-title'>{this.props.song.title}</div>
            </div>
          </div>
          <div className='song-show-cover-container'>
            <div className='cover-container'>
              <div className='cover' style={{
                  backgroundImage: `url(${this.props.song.cover_url})`,
                  zIndex: 1
                }}>
              </div>
            </div>
          </div>
        </div>
        <div className='song-show-bot'>
          {this.editInfo()}
        </div>
      </div>
    );
  }
}

export default Show;
