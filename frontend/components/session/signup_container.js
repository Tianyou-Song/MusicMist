import { connect } from 'react-redux';
import {
  createNewUser
 } from '../../actions/session';
import {
  clearErrors
} from '../../actions/error';
import Signup from './signup';

const mapDispatchToProps = dispatch => {
  return {
    clearErrors: () => dispatch(clearErrors()),
    createNewUser: formUser => dispatch(createNewUser(formUser))
  };
};

export default connect(null, mapDispatchToProps)(Signup);
