import { connect } from 'react-redux';
import {
  login
} from '../../actions/session';
import {
  clearErrors
} from '../../actions/error';
import Signin from './signin';
import { openModal } from '../../actions/modal';

const mapStateToProps = state => {
  return {
    formType: 'signin'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearErrors: () => dispatch(clearErrors()),
    signin: formUser => dispatch(login(formUser)),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(null, mapDispatchToProps)(Signin);
