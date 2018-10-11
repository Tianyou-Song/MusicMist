import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import Home from './home';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

export default connect(mapStateToProps, null)(Home);
