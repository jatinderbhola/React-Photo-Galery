import { combineReducers } from 'redux';

import imageReducer from './Image/image.reducer';

const rootReducer = combineReducers({
    image: imageReducer
});

export default rootReducer;