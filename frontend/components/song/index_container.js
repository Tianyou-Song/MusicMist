import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import {
  searchSongs
} from '../../actions/song';
import {
  clearErrors
} from '../../actions/error';
import Index from './index';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    songs: state.entities.songs,
    users: state.entities.users,
    params: ownProps.params
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchSongs: (params, limit) => dispatch(searchSongs(params, limit)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Index)
);
