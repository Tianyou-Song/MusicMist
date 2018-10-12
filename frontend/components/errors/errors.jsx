import React from 'react';

class Errors extends React.Component {
  render () {
    return (
      <ul className='errors'>
        {this.props.errors.map(error => {
          return (
            <li>{error}</li>
          );
        })}
      </ul>
    );
  }
}

export default Errors;
