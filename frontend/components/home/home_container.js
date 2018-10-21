import { connect } from 'react-redux';

import { createNewUser } from '../../actions/session';
import { closeModal } from '../../actions/modal';
import Home from './home';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
