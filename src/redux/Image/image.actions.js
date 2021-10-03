import { GET_IMAGES, SET_IMAGES, CLEAR_SELECTED, GET_SELECTED_COUNT, SET_SELECTED } from './image.types';

export const getImages = () => {
    return {
        type: GET_IMAGES,
    };
};

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

export const getSelectedCount = () => {
    return {
        type: GET_SELECTED_COUNT,
    };
};

export const setSelected = (index) => {
    return {
        type: SET_SELECTED,
        index: index
    };
};