import { connect } from 'react-redux';
import {
  createNewUser,
  login,
  clearErrors
 } from '../../actions/session';
import Modal from './modal';

const mapDispatchToProps = dispatch => {
  return {
    createNewUser: formUser => dispatch(createNewUser(formUser)),
    signin: formUser => dispatch(login(formUser)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(null, mapDispatchToProps)(Modal);
