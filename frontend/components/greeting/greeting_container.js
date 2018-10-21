import { connect } from 'react-redux';

import { logout } from '../../actions/session';
import { openModal } from '../../actions/modal';
import Greeting from './greeting';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    isSplash: ownProps.location.pathname === '/'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Greeting));
