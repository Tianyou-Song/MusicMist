import React from 'react';
import ErrorsContainer from '../errors/errors_container';
import {Link} from 'react-router-dom';

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      artist: '',
      audioUrl: '',
      audio: null,
      coverUrl: '',
      cover: null,
      background: null,
      ready: ''
    };

    // this.state.title = this.props.song.title;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAudio = this.handleAudio.bind(this);
    this.handleCover = this.handleCover.bind(this);
  }

  componentDidMount() {
    this.props.fetchSong(this.props.match.params.id)
      .then(res => {
        const song = Object.values(res.song)[0];
        this.props.fetchUser(song.uploader_id);
        this.setState({
          title: song.title,
          artist: song.artist,
          coverUrl: song.cover_url,
          audioUrl: song.audio_url,
          background: `url(${song.cover_url})`
        });
        if (song.description) {
          this.setState({
            description: song.description
          });
        }
      });
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleAudio(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () => {
      this.setState({audio: file, audioUrl: reader.result});
      this.setState({ready: 'Ready. Click Save to post this track.'});
      const dotI = this.state.audio.name.indexOf('.');
      this.setState({title: this.state.audio.name.slice(0, dotI)});
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({audioURL: '', audio: null});
    }
  }

  handleCover(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () => {
      this.setState({cover: file, coverUrl: reader.result});
      this.setState({background: `url(${this.state.coverUrl})`});
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({coverUrl: '', cover: null});
    }
  }

  handleInput(type) {
    return e => {
      this.setState({[type]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const saveButton = document.getElementById('song-form-save-button');
    saveButton.disabled = true;
    saveButton.classList.add('disabled');
    this.props.clearErrors();
    const formData = new FormData();
    formData.append('song[title]', this.state.title);
    formData.append('song[description]', this.state.description);
    formData.append('song[uploader_id]', this.props.currentUser.id);
    formData.append('song[id]', this.props.song.id);

    if (this.state.cover) {
      formData.append('song[cover]', this.state.cover);
    }

    if (this.state.audio) {
      formData.append('song[audio]', this.state.audio);
    }

    this.props.updateSong(formData).then(res => {
      const songId = Object.keys(res.song)[0];
      return this.props.history.push(`/tracks/${songId}`);
    });
  }

  render() {
    return (<div className='session-form-container'>
      <form className='song-edit-form'>
        <div className='song-info-container'>
          <div className='song-edit-audio'>
            <label className='song-edit-audio-button'>Replace file
              <input className='hidden' type='file' accept='audio/*' onChange={this.handleAudio}/>
            </label>
          </div>
          <div className='song-info-subcontainer'>
            <div className='song-info-title'>
              <h1 className='song-info-title-main'>Track info</h1>
              <div className='song-info-title-fill'/>
            </div>
            <div className='song-info'>
              <div className='form-cover-container'>
                <div className='cover-container'>
                  <div className='cover' style={{
                      backgroundImage: this.state.background
                    }}>
                    <label className='upload-image-button'>Update image
                      <input className='hidden' type='file' accept='image/*' onChange={this.handleCover}/>
                    </label>
                  </div>
                </div>
              </div>

              <div className='form-fields-container'>
                <label>Title<span className='orange'>*</span>
                  <input type='string' value={this.state.title} onChange={this.handleInput('title')} placeholder='Name your track'/>
                </label>
                <label>Description
                  <textarea value={this.state.description} onChange={this.handleInput('description')} placeholder='Describe your track'/>
                </label>
              </div>
            </div>
          </div>

          <div className='song-form-bottom'>
            <div className='require-notice'>
              <span className='orange'>*</span>
              Required fields
            </div>
            <div className='song-form-buttons'>
              <Link to='/stream'>Cancel</Link>
              <button id='song-form-save-button' onClick={this.handleSubmit}>Save changes</button>
            </div>
          </div>
        </div>
        <ErrorsContainer/>
      </form>
    </div>);
  }
}

export default Edit;
