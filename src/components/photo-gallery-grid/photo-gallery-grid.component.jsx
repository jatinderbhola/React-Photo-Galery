/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PhotoDataService from "./../../services/PhotoDataService";
import Gallery from 'react-grid-gallery';

import './photo-gallery-grid.style.css';

import { connect } from "react-redux";

import {
    setImages,
    setSelected
} from "./../../redux/Image/image.actions";

class PhotoGalleryGrid extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
        PhotoDataService.getAll()
            .then(res => {
                this.props.setImages(res.data.photos);
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="image-grid">
                <Gallery
                images={this.props.images}
                backdropClosesModal={true}
                className="image"
                onSelectImage={this.props.setSelected}
                lightboxWidth={1536}
                />
            </div>
        )
    }
}



const mapStateToProps = state => {
    return {
        images: state.image.images
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        setImages: (images) => dispatch(setImages(images)),
        setSelected: (index) => dispatch(setSelected(index))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(PhotoGalleryGrid)