import React from 'react';
import {Link} from 'react-router-dom';
import ErrorsContainer from '../errors/errors_container';

class Show extends React.Component {

    componentWillMount() {
        this.props.fetchUser(this.props.match.params.id)
          .then(res => {
            const user = res.user;
            this.props.searchSongs({user: user}, 16);
          });
      }

    render() {
        if (!this.props.shownUser) {
            return <ErrorsContainer />
        }
        
        return(
            <p>{this.props.shownUser.username}</p>
        )
    }
}

export default Show;