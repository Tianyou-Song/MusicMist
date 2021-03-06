import { connect } from 'react-redux';
import {
  createNewUser
 } from '../../actions/session';
import {
  clearErrors
} from '../../actions/error';
import Signup from './signup';
import {
  openModal,
  closeModal
} from '../../actions/modal';

const mapDispatchToProps = dispatch => {
  return {
    clearErrors: () => dispatch(clearErrors()),
    createNewUser: formUser => dispatch(createNewUser(formUser)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(null, mapDispatchToProps)(Signup);
