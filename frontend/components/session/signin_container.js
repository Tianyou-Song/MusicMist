import { connect } from 'react-redux';
import {
  login
} from '../../actions/session';
import {
  clearErrors
} from '../../actions/error';
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
