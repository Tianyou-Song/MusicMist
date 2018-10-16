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
      audioUrl: '',
      audio: null,
      coverUrl: '',
      cover: null,
      background: null
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
      this.setState({
        cover: file,
        coverUrl: reader.result
      });
      this.setState({
        background: `url(${this.state.coverUrl})`
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({coverUrl: '', cover: null});
    }
  }

  handleInput(type) {
    return e => {
      this.setState({
        [type]: e.target.value
      });
    };
  }

  handleSubmit(e) {
    this.props.clearErrors();
    e.preventDefault();
    const formData = new FormData();
    formData.append('song[title]', this.state.title);
    formData.append('song[description]', this.state.description);
    formData.append('song[uploader_id]', this.props.currentUser.id);

    if (this.state.cover) {
      formData.append('song[cover]', this.state.cover);
    }

    if (this.state.audio) {
      formData.append('song[audio]', this.state.audio);
    }

    this.props.createSong(formData)
      .then(() => {
        return this.props.history.push(`/stream`);
      });
  }

  render() {
    return (
      <div className='upload-form-container'>
        <form className='upload-form' onSubmit={this.handleSubmit}>
          <div className='upload-form-audio'>
            <label>Choose a file to upload
              <input type='file' accept='audio/*'
                onChange={this.handleAudio} />
            </label>
          </div>

          <div className='upload-image-container'>
            <div className='cover-image-container'>
              <div className='cover-image' style={{background: this.state.background}}>
                <label className='upload-image-button'>Update image
                  <input type='file' accept='image/*'
                    onChange={this.handleCover} />
                </label>
              </div>
            </div>
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
        <ErrorsContainer />
      </div>
    );
  }
}

export default Upload;
