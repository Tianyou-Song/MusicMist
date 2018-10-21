import React from 'react';

import {
  openModal,
  closeModal
} from '../../actions/modal';
import Edit from './edit_container';

class Modal extends React.Component {
  render() {
    if (!this.props.modal) {
      return null;
    }

    let component = null;
    switch (this.props.modal) {
      case 'edit':
        component = <Edit />;
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
