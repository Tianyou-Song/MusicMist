import React from 'react';
import {Link} from 'react-router-dom';
import ErrorsContainer from '../errors/errors_container';
import SongIndexContainer from '../song/index_container';

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
            <div className='session-form-container'>
                <div className='user-show-top'>
                    <div className='user-show-name'>{this.props.shownUser.username}</div>
                </div>
                <div className='user-show-bot'>
                    <div className='user-show-bot-header'>
                        <div className='user-show-bot-header-title'>
                            <div className='user-show-bot-header-title-track'>
                                Tracks
                            </div>
                        </div>
                    </div>
                    <div className='user-show-song-list'>
                        <SongIndexContainer params={{'user': this.props.shownUser}} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Show;