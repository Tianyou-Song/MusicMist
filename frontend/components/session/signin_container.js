import { connect } from 'react-redux';
import { login } from '../../actions/session';
import Signin from './signin';

const mapDispatchToProps = dispatch => {
  return {
    signin: formUser => dispatch(login(formUser))
  };
};

export default connect(null, mapDispatchToProps)(Signin);
