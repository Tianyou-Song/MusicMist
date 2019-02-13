import merge from "lodash/merge";

import {
    PLAY,
    PAUSE,
    STOP,
    PLAY_NEW
} from "../actions/player";

const nullSong = {
    currentSong: null,
    playing: false
};

const PlayerReducer = (state = nullSong, action) => {
    Object.freeze(state);
    const newState = merge({}, state);

    switch(action.type) {
        case PLAY:
            return merge(newState, { playing: true });
        case PAUSE:
            return merge(newState, { playing: false });
        case STOP:
            return merge(newState, nullSong)
        case PLAY_NEW:
            return merge(newState, {
                currentSong: action.song,
                playing: true
            })
        default:
            return newState;
    }
};

export default PlayerReducer;