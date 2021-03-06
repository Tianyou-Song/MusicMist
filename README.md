# README

## MusicMist 

MusicMist is a SoundCloud clone that allows users to share and play music. Users can create, play, update, delete songs. [MusicMist Live](https://music-mist.herokuapp.com/)
</br>

## Technologies 

* React 
* Redux 
* Howler.js (audio player)
* Ruby on Rails 
* PostgreSQL
* AWS-S3 Storage
* BCrypt
</br>

## Features 

### Disable Save Button While Processing 

If the user spam clicks the save button while their song is being submitted, multiple uploads are made. Therefore, the save button itself must be disabled while the upload is being processed.

![alt text](https://github.com/Tianyou-Song/MusicMist/blob/master/app/assets/images/save-disable.png)

 ```jsx 
handleSubmit(e) {
	...
    const saveButton = document.getElementById('song-form-save-button');
    saveButton.disabled = true;
    saveButton.classList.add('disabled');
    ...
}

 ```
</br>

### Dynamic Header 

The header is transparent on the splash page, but not transparent anywhere else. The layout is also different depending on if the user is logged in or out.

![alt text](https://github.com/Tianyou-Song/MusicMist/blob/master/app/assets/images/header-transparent.png)

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
</br>
</br>

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
