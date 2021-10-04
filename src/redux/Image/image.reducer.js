import { GET_IMAGES, SET_IMAGES, CLEAR_SELECTED, GET_SELECTED_COUNT, SET_SELECTED } from './image.types';


const INITIAL_STATE = {
    images: [],
    selectedCount: 0
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case GET_IMAGES:

            return {
                ...state,
                images: state.images
            };

        case SET_IMAGES:
            return {
                ...state,
                images: action.images,
                selectedCount: action.images.filter(image => image.isSelected).length
            };

        case CLEAR_SELECTED:
            // clear selected from array
            return {
                ...state,
                images: state.images.map(image => {
                    if (image.isSelected === true) {
                        image.isSelected = false;
                    }
                    return image;
                }),
                selectedCount: 0

            };

        case GET_SELECTED_COUNT:
            return {
                ...state,
                selectedCount: state.selectedCount

            };

        case SET_SELECTED:
            var images = state.images.slice();
            var image = state.images[action.index];

            if (Object.prototype.hasOwnProperty.call(image, "isSelected")) { image.isSelected = !image.isSelected; }
            else { image.isSelected = true; }

            return {
                ...state,
                images: images,
                selectedCount: images.filter(image => image.isSelected).length

            };

        default: return state;

    }

};

export default reducer;