import { connect } from 'react-redux';

import { logout } from '../../actions/session';
import { openModal } from '../../actions/modal';
import Greeting from './greeting';

const mapStateToProps = (state) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
