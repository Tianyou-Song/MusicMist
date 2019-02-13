import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import { play, pause, stop, playNew } from '../../actions/player'; 

import Player from './player';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    playing: state.ui.player.playing,
    song: state.ui.player.currentSong,
    songs: state.entities.songs,
    songPage: state.entities.songs[ownProps.match.params.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    play: () => dispatch(play()),
    pause: () => dispatch(pause()),
    stop: () => dispatch(stop()),
    playNew: track => dispatch(playNew(track))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Player));
