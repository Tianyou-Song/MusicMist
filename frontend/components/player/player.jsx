import React from 'react';
import { Link } from 'react-router-dom';
import {Howl, Howler} from 'howler';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: '0:00',
      progress: '0:00'
    };
    this.audio = {
      once: () => null,
      volume: () => null,
      fade: () => null,
      duration: () => null,
      seek: () => null,
      state: () => null
    };
    this.volume = 1.0;
    this.currentSong = { id: null };
    this.playing = this.props.playing;
  }

  newHowler() {
    this.audio = new Howl({
      src: this.currentSong.audio_url,
      preload: true,
      onpause: () => clearInterval(this.time),
      onplay: () => {
        this.setState({
          duration: this.durationToString(this.audio.duration())
        });
        this.time = setInterval(() => {
          this.setState({
            progress: this.durationToString(this.audio.seek())
          })
        }, 1000);
      },
      onend: () => {
        this.pause();
      }
    });
  }

  durationToString(duration) {
    if (isNaN(duration)) {
      return "-:-";
    }

    let hours = Math.floor(duration / 3600);
    let minutes = Math.floor((duration - (hours * 3600)) / 60);
    let seconds = Math.floor(duration - (hours * 3600) - (minutes * 60));

    if (hours > 0) {
      hours = `${hours}:`;
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
    } else {
      hours = '';
    }

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return `${hours}${minutes}:${seconds}`;
  }

  play() {
    if (!this.audio.playing()) {
      this.playing = true;

      this.audio.play();
    }
  }

  pause() {
    if (this.audio.state() === null) {
      return
    }
    this.playing = false;
    this.audio.pause();
  }

  stop() {
    this.playing = false;
    this.audio.stop();
    this.props.stop();
    this.audio = {
      once: () => null,
      volume: () => null,
      fade: () => null,
      duration: () => 0,
      seek: () => 0,
      state: () => null
    };
    this.setState({
      duration: '0:00',
      progress: '0:00'
    });
  }

  getSong() {
    const song = this.props.songs[this.props.song.id]

    if (this.currentSong.id !== song.id) {
      this.pause();
      this.currentSong = song;
      this.newHowler();
    } else {
      this.currentSong = song;
    }

    return song;
  }
  
  nullSong() {
    return {
      title: ''
    };
  }

  handlePlayButton() {
    if (this.currentSong.id === null) {
      return null;
    }
    this.playing ? this.props.pause() : this.props.play();
  }

  calculateProgress() {
    const percent = (this.audio.seek() / this.audio.duration()) * 100;
    return `${percent}`;
  }

  render () {
    console.log(this.playing);
    const playButtonText = this.playing ? "player-pause" : "player-play";
    const song = this.props.song ? this.getSong() : this.nullSong();
    const hiddenInfo = this.props.song ? null : { visibility: 'hidden'};
    if (this.props.playing) {
      this.play();
    } else {
      this.pause();
    }

    return (
      <footer>
        <div className='player-container'>
          <div className='player-controlls'>
            <button 
              disabled={
                this.audio.state() === null
              } 
              className={playButtonText} 
              onClick={() => this.handlePlayButton()}
            />
          </div>
          <p className='player-seek'>{this.state.progress}</p>
          <div className='player-progress'>
              <div 
                style={{ width: this.calculateProgress() }}
                className='player-progress-moving'
              />
          </div>
          <p className='player-duration'>{this.state.duration}</p>

          <div className='player-info' style={hiddenInfo}>
              <Link to={`/tracks/${song.id}`}>
                <div className='player-cover-container'>
                  <div className='cover-container'>
                    <div className='cover' style={{
                      backgroundImage: `url(${song.cover_url})`
                    }}>
                    </div>
                  </div>
                </div>
              </Link>
          </div>
        </div>
      </footer>
    );
  }
}

export default Player;
