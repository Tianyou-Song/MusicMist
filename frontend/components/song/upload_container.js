import { connect } from 'react-redux';

import {
  createSong
} from '../../actions/song';
import {
  clearErrors
} from '../../actions/error';
import Upload from './upload';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createSong: song => dispatch(createSong(song)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
