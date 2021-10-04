import React from "react";
import PhotoDataService from "./services/photo";
import HomePage from "./pages/homepage/homepage.component";
import Gallery from 'react-grid-gallery';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      APP_NAME: "Google Photo Ditto!",
      images: []
    };

  }

  componentDidMount() {
    PhotoDataService.getAll()
      .then(res => {
        this.setState({ images: res.data.photos });
      })
      .catch(err => console.log(err));
  }



  render() {
    return (
      <div className='App'>
        <h2> {this.state.APP_NAME}</h2>
        <HomePage />
        <div className="image-grid">
          <Gallery images={this.state.images} backdropClosesModal={true} className="image" />
        </div>
      </div>
    );
  }
}


export default App;




