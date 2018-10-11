import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import Signup from './signup';

// const mapStateToProps = (state) => {
//   return {
//     errors: state.errors.sessionErrors
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    createNewUser: formUser => dispatch(createNewUser(formUser))
  };
};

export default connect(null, mapDispatchToProps)(Signup);
