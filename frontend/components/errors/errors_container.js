import { connect } from 'react-redux';
import Errors from './errors';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.sessionErrors
  };
};

export default connect(mapStateToProps, null)(Errors);
