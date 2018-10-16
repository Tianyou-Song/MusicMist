import React from 'react';
import ErrorsContainer from '../errors/errors_container';
import {
  Link
} from 'react-router-dom';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      artist: '',
      uploader_id: this.props.currentUser.id,
      audioUrl: '',
      audio: null,
      coverUrl: '',
      cover: null,
      background: 'linear-gradient(135deg,#8e8485,#846170)'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAudio = this.handleAudio.bind(this);
    this.handleCover = this.handleCover.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleAudio(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () => {
      this.setState({
        audio: file,
        audioUrl: reader.result
      });

      if (file) {
        reader.readAsDataURL(file);
      } else {
        this.setState({audioURL: '', audio: null});
      }
    };
  }

  handleCover(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () => {
      this.setState({
        cover: file,
        coverUrli: reader.result,
        background: `url(${this.state.album_url})`
      });

      if (file) {
        reader.readAsDataURL(file);
      } else {
        this.setState({coverURL: '', cover: null});
      }
    };
  }

  handleInput(type) {
    return e => {
      this.setState({
        [type]: e.target.value
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createSong(this.state)
      .then(() => this.props.history.push('/stream'));
  }

  render() {
    return (
      <div className='upload-form-container'>
        <ErrorsContainer />
        <form className='upload-form' onSubmit={this.handleSubmit}>
          <div className='upload-form-audio'>
            <label>Choose a file to upload
              <input type='file' accept='audio/*' />
            </label>
          </div>

          <div className='upload-form-image'
            style={{backgroundImage: this.state.backgroundImage}}>
            <label className='upload-image-button'>Update image
              <input type='file' accept='image/*'/>
            </label>
          </div>

          <label>Title
            <input type='string' value={this.state.title}
              onChange={this.handleInput('title')}
              placeholder='Name your track' />
          </label>

          <label>Description
            <textarea value={this.state.description}
              onChange={this.handleInput('description')}
              placeholder='Describe your track' />
          </label>

          <Link to='/stream'>Cancel</Link>
          <button onClick={this.handleSubmit}>Save</button>
        </form>
      </div>
    );
  }
}

export default Upload;
