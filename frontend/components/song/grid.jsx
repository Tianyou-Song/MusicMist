import React from 'react';
import { Link } from 'react-router-dom';

class SongGrid extends React.Component {
    shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    render() {
        return (
            <ul className='grid-ul'>
                {this.shuffle(Object.values(this.props.songs)).map(song => {
                    return (
                        <li className='grid-li' key={`${song.id}`}>
                            <Link to={`/tracks/${song.id}`}>
                                <div className='grid-cover-container'>
                                        <div className='cover-container'>
                                            <div className='cover' style={{
                                                backgroundImage: `url(${song.cover_url})`
                                                }}>
                                            </div>
                                        </div>
                                </div>
                                <p className='grid-song-title'>{song.title}</p>
                            </Link>
                            <Link to={`/users/` + song.uploader_id}>
                                <p className='grid-song-uploader'>{song.uploader}</p>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default SongGrid