import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import {
  fetchUser
} from '../../actions/user';
import {
    searchSongs
} from '../../actions/song';

import {
  clearErrors
} from '../../actions/error';
import Show from './show';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    shownUser: state.entities.users[ownProps.match.params.id],
    users: state.entities.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: id => dispatch(fetchUser(id)),
    searchSongs: (params, limit) => dispatch(searchSongs(params, limit)),
    openModal: modal => dispatch(openModal(modal)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Show)
);