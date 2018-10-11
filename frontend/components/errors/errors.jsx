import React from 'react';

class Errors extends React.Component {
  render () {
    return (
      <ul>
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
