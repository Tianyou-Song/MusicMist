import React from 'react';
import SongGrid from './grid';

class SongIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { songs: {} }
    }

    componentWillMount() {
        this.props.searchSongs(this.props.params, 12).then(res => {
            this.setState({ songs: res.songs })
        })
    }

    render() {
        return (
            <SongGrid songs={this.state.songs} />
        );
    }
}

export default SongIndex;