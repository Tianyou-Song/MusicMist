import React from 'react';

import {
  openModal,
  closeModal
} from '../../actions/modal';
import Signin from './signin_container';
import Signup from './signup_container';
import Edit from '../song/edit_container';

class Modal extends React.Component {
  render() {
    if (!this.props.modal) {
      return null;
    }

    let component = null;
    switch (this.props.modal) {
      case 'signin':
        component = <Signin />;
        break;
      case 'signup':
        component = <Signup />;
        break;
      default:
        return null;
    }

    return (
      <div className='modal-screen' onClick={this.props.closeModal}>
        <div className='modal-x'>⨯</div>
        <div className='modal-form' onClick={e => e.stopPropagation()}>
          { component }
        </div>
      </div>
    );
  }
}

export default Modal;
