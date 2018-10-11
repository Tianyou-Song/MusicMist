import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import Splash from './splash';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

export default connect(mapStateToProps, null)(Splash);
