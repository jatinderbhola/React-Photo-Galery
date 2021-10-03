//@ts-check
import React from "react";
import PhotoDataService from "./services/photo";
import HomePage from "./pages/homepage/homepage.component";
import Footer from './components/footer/footer.component';
import Gallery from 'react-grid-gallery';



import { connect } from "react-redux";
import {
  getImages,
  setImages,
  setSelected,
  clearSelected,
  getSelectedCount
} from "./redux/Image/image.actions";


/* eslint-disable react/prop-types */
class App extends React.Component {

  constructor(props) {
    super();

    this.state = {
      APP_NAME: "Google Photo Ditto!",
      images: []
    };

    this.onSelectImage = this.onSelectImage.bind(this);
    this.props = props;
  }

  componentDidMount() {
    PhotoDataService.getAll()
      .then(res => {
        this.props.setImages(res.data.photos);
      })
      .catch(err => console.log(err));
  }

  onSelectImage(index) {
    console.log(this.props.images);
    var images = this.props.images.slice();
    var img = images[index];
    if (Object.prototype.hasOwnProperty.call(img, "isSelected")) { img.isSelected = !img.isSelected; }
    else {
      img.isSelected = true;
    }

    this.props.setImages(images);
  }

  render() {
    return (
      <div className='App'>
        <div>Count: {this.props.selectedCount}</div>

        <button onClick={() => this.props.clearSelected()}>Clear</button>

        <HomePage />

        {
          this.props.images.length > 0 &&
          <div className="image-grid">
            <Gallery
              images={this.props.images}
              backdropClosesModal={true}
              className="image"
              onSelectImage={this.props.setSelected}
              lightboxWidth={1536}
            />
          </div>}
        <Footer />

      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    count: state.counter.count,
    images: state.image.images,
    selectedCount: state.image.selectedCount
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setImages: (images) => dispatch(setImages(images)),
    getImages: () => dispatch(getImages()),
    clearSelected: () => dispatch(clearSelected()),
    setSelected: (index) => dispatch(setSelected(index)),
    getSelectedCount: () => dispatch(getSelectedCount()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)




