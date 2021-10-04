//@ts-check
import React from "react";

import HomePage from "./pages/homepage/homepage.component";
import PhotoGalleryGrid from "./components/photo-gallery-grid/photo-gallery-grid.component";
import Footer from './components/footer/footer.component';
import SpinnerWithLove from "./components/spinner/spinner-with-love.component";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


/* eslint-disable react/prop-types */
class App extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className='App'>
        <HomePage />
        <PhotoGalleryGrid />
        <Footer />
        <SpinnerWithLove />

        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}



export default App




