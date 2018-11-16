import React from 'react';
import { Link } from 'react-router-dom';

class SongGrid extends React.Component {
    render() {
        return (
            <ul class='grid-ul'>
                {Object.values(this.props.songs).map(song => {
                    return (
                        <li class='grid-li' key={`${song.id}`}>
                            <Link to={`/tracks/${song.id}`}>
                                <div className='grid-cover-container'>
                                        <div className='cover-container'>
                                            <div className='cover' style={{
                                                backgroundImage: `url(${song.cover_url})`
                                                }}>
                                            </div>
                                        </div>
                                </div>
                                <p class='grid-song-title'>{song.title}</p>
                            </Link>
                            <Link to={`/`}>
                                <p class='grid-song-uploader'>{song.uploader}</p>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default SongGrid