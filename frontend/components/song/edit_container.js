import { connect } from 'react-redux';

import Edit from './edit';

import {
  fetchSong,
  updateSong
} from '../../actions/song';
import {
  clearErrors
} from '../../actions/error';
import { openModal } from '../../actions/modal';

const mapStateToProps = state => {
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
    openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
