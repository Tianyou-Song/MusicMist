import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import Player from './player';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Player));
