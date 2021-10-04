import { SET_IMAGES, CLEAR_SELECTED, SET_SELECTED, PENDING_IMAGE_APPROVAL } from './image.types';

export const setImages = (images) => {
    return {
        type: SET_IMAGES,
        images: images
    };
};

export const clearSelected = () => {
    return {
        type: CLEAR_SELECTED,
    };
};

export const setSelected = (index) => {
    return {
        type: SET_SELECTED,
        index: index
    };
};

export const pendingImageApproval = (process) => {
    return {
        type: PENDING_IMAGE_APPROVAL,
        process: process
    };
};