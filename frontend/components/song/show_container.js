import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import {
  fetchSong,
  deleteSong
} from '../../actions/song';
import {
  fetchUser
} from '../../actions/user';
import {
  clearErrors
} from '../../actions/error';
import { openModal } from '../../actions/modal';
import Show from './show';
import { 
  play, 
  pause, 
  playNew 
} from "../../actions/player";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    song: state.entities.songs[ownProps.match.params.id],
    users: state.entities.users,
    playing: state.ui.player.playing,
    currentSong: state.ui.player.currentSong
  };
};

const mapDispatchToProps = dispatch => {
  return {
    play: () => dispatch(play()),
    pause: () => dispatch(pause()),
    playNew: track => dispatch(playNew(track)),
    fetchSong: id => dispatch(fetchSong(id)),
    deleteSong: id => dispatch(deleteSong(id)),
    fetchUser: id => dispatch(fetchUser(id)),
    openModal: modal => dispatch(openModal(modal)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Show)
);
