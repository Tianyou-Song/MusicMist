import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import Intro from './intro';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

export default connect(mapStateToProps, null)(Intro);
