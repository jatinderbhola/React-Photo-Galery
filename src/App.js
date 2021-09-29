import React from "react";
import PhotoDataService from "./services/photo";
import HomePage from './components/homepage/homepage.component';
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
        console.log(res.data);

      })
      .catch(err => console.log(err));
  }



  render() {
    return (
      <div className='App'>
        <HomePage />

        <header >
          <h1>{this.state.APP_NAME} </h1>
        </header>

        {
          this.state.images && this.state.images.map(image => (<h1 key={image.id}> {image.url} </h1>))
        }
      </div>
    );
  }
}


export default App;
