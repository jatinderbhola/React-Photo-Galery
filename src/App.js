import React from "react";
import PhotoDataService from "./services/photo";

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      APP_NAME: "Google Photo Ditto!",
      images: [{ name: "jatinder1" }, { name: "jatinder2" }, { name: "jatinder3" }, { name: "jatinder4" }]
    };

  }

  componentDidMount() {
    PhotoDataService.getAll()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }



  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>{this.state.APP_NAME} </h1>
        </header>

        {
          this.state.images.map(image => (<h1 key={image.name}> {image.name} </h1>))
        }
      </div>
    );
  }
}


export default App;
