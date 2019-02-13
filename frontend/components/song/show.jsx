import React from 'react';
import ModalContainer from './modal_container';
import ErrorsContainer from '../errors/errors_container';
import SongShowTop from './show_top';

import {
  RECEIVE_SONG,
  RECEIVE_ERRORS
} from '../../actions/song';

class Show extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillMount() {
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
    this.props.clearErrors();
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
      return <ErrorsContainer />;
    }

    return (
      <div className='session-form-container'>
        <SongShowTop
          song = {this.props.song}
          playing = {this.props.playing}
          currentSong = {this.props.currentSong}
          play = {this.props.play}
          pause = {this.props.pause}
          playNew = {this.props.playNew}
        />
        <div className='song-show-bot'>
          {this.editInfo()}
          <div className='song-show-description'>
            { this.props.song.description === 'undefined' ? '' : this.props.song.description }
          </div>
          <ErrorsContainer />
        </div>
        <ModalContainer />
      </div>
    );
  }
}

export default Show;
