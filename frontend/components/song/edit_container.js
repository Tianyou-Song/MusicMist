import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Edit from './edit';

import {
  fetchSong,
  updateSong
} from '../../actions/song';
import {
  fetchUser
} from '../../actions/user';
import {
  clearErrors
} from '../../actions/error';
import { openModal } from '../../actions/modal';

const mapStateToProps = (state, ownProps) => {
  debugger;
  return {
    currentUser: state.session.currentUser,
    song: state.entities.songs[ownProps.match.params.id],
    formType: 'edit'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSong: id => dispatch(fetchSong(id)),
    updateSong: song => dispatch(updateSong(song)),
    clearErrors: () => dispatch(clearErrors()),
    openModal: modal => dispatch(openModal(modal)),
    fetchUser: id => dispatch(fetchUser(id))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Edit)
);
