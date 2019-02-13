export const PLAY = "PLAY";
export const PAUSE = "PAUSE";
export const STOP = "STOP";
export const PLAY_NEW ="PLAY_NEW";

export const play = () => dispatch => {
    return dispatch({
        type: PLAY
    });
};

export const pause = () => dispatch => {
    return dispatch({
        type: PAUSE
    });
};


export const stopo = () => dispatch => {
    return dispatch({
        type: STOP
    });
};

export const playNew = song => dispatch => {
    return dispatch({
        type: PLAY_NEW,
        song
    });
};