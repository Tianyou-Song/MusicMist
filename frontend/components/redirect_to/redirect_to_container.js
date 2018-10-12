import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import RedirectTo from './redirect_to';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

export default connect(mapStateToProps, null)(RedirectTo);
