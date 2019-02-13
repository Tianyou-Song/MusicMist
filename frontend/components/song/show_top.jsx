import React from 'react';
import { Link } from 'react-router-dom';

class SongShowTop extends React.Component {
    constructor(props) {
        super(props);
        this.handlePlayButton = this.handlePlayButton.bind(this);
    }

    handlePlayButton() {
        if (this.props.currentSong === this.props.song) {
            if (this.props.playing) {
                
                this.props.pause();
            } else {
                
                this.props.play();
            };
        } else {
            this.props.playNew(this.props.song);
        }
    }

    render() {
        const beingPlayed = this.props.currentSong === this.props.song ? true : false;
        const playButtonClass = beingPlayed && this.props.playing ? 'song-show-top-pause' : 'song-show-top-play';

        return (
            <div className='song-show-top'>
                <button
                    className={playButtonClass}
                    onClick={() => this.handlePlayButton()}
                />
                <div className='song-show-info'>
                    <div>
                        <Link to={'/users/' + this.props.song.uploader_id} className='song-show-owner-username'>{this.props.song.uploader}</Link>
                    </div>
                    <div>
                        <div className='song-show-title'>{this.props.song.title}</div>
                    </div>
                </div>
                <div className='song-show-cover-container'>
                    <div className='cover-container'>
                        <div className='cover' style={{
                            backgroundImage: `url(${this.props.song.cover_url})`
                        }}>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SongShowTop;