import { SET_IMAGES, CLEAR_SELECTED, SET_SELECTED, PENDING_IMAGE_APPROVAL } from './image.types';


const INITIAL_STATE = {
    images: [],
    selectedCount: 0,
    pendingImageApproval: 0
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

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

        case PENDING_IMAGE_APPROVAL:
            var count = state.pendingImageApproval;
            if (action.process.type === 'set-upload-count') {
                count += action.process.count;
            } else {
                count -= action.process.count;
            }

            if (count === 0) {
                count = 0;
                state.images = state.images.map(image => {
                    if (image.isSelected === true) {
                        image.isSelected = false;
                    }
                    return image;
                })
                state.selectedCount = 0;
            }

            return {
                ...state,
                pendingImageApproval: count

            };

        default: return state;

    }

};

export default reducer;