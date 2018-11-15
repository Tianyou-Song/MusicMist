import React from 'react';

class SongIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { songs: [] }
    }

    componentWillMount() {
        this.props.searchSongs({}, 12).then(res => {
            this.setState({ songs: res.songs })
        })
    }

    render() {
        return (
            <p>asdf</p>
        );
    }
}

export default SongIndex;