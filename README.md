# README

## MusicMist 

MusicMist is a SoundCloud clone that allows users to share music. Users can create, play, update, delete songs. [MusicMist Live](https://music-mist.herokuapp.com/)


## Technologies 

* React 
* Redux 
* Howler.js (audio player)
* Ruby on Rails 
* PostgreSQL
* AWS-S3 Storage
* BCrypt


## Features 

### Disable Save Button While Processing 

If the user spam clicks the save button while their song is being submitted, multiple uploads are made. Therefore, the save button itself must be disabled while the upload is being processed.

 ```jsx 
handleSubmit(e) {
	...
    const saveButton = document.getElementById('song-form-save-button');
    saveButton.disabled = true;
    saveButton.classList.add('disabled');
    ...
}

 ```


### Dynamic Header 

The header is transparent on the splash page, but not transparent anywhere else. The layout is also different depending on if the user is logged in or out.

```jsx 
render () {
    const loggedOut = () => {
      return (
        <header className={this.props.isSplash ? 'greeting-transparent' : '' }>
          ...
        </header>
      );
    };

    const loggedIn = () => {
      return (
        <header>
          ...
        </header>
      );
    };

    return this.props.currentUser ? loggedIn() : loggedOut();
```


## Future Directions 

* Dynamic and persistant music player
* waveform visualizer (Wavesurfer.js)
* Track index on splash page
* User show page
* Search
* Comments 
* Ghost typing on demo login
* Playlists
* Queueing for songs so they can be played continuously
* Likes 
* Plays
