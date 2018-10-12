import { connect } from 'react-redux';
import {
  login,
  clearErrors
 } from '../../actions/session';
import Signin from './signin';

const mapStateToProps = state => {
  return {
    formType: 'signin'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearErrors: () => dispatch(clearErrors()),
    signin: formUser => dispatch(login(formUser))
  };
};

export default connect(null, mapDispatchToProps)(Signin);
