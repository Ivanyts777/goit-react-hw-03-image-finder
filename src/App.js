import React, { Component } from "react";
import Button from "./Components/Button/Button";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import ImageGalleryItem from "./Components/ImageGalleryItem/ImageGalleryItem";
import LoaderSpinner from "./Components/Loader/Loader";
import Modal from "./Components/Modal/Modal";
import Searchbar from "./Components/Searchbar/Searchbar";
import PixabayApi from "./Components/PixabayApi/pixabayApi";

// import "./App.css";

class App extends Component {
  state = {
    images: [],
    loading: false,
    shwModal: false,
    searchQuery: "",
    error: null,
    page: 1,
    text: "",
    largeImage: null,
  };

  scrolling = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }
    if (this.state.page > 2) {
      this.scrolling();
    }
  }

  fetchImages = () => {
    const { searchQuery, page } = this.state;
    this.setState({ loader: true });
    PixabayApi.fetchImagesWithQuery(searchQuery, page)
      .then((images) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }))
      )
      .catch((error) => this.setState(error, "Some error"))
      .finally(() => this.setState({ loader: false }));
  };

  hendleSearchFormSubmit = (query) => {
    this.setState({ searchQuery: query, page: 1, images: [] });
  };

  parseLargeImage = (url) => {
    this.setState((prev) => {
      return {
        largeImage: url,
      };
    });
  };

  toggleModal = (e) => {
    this.setState((state) => ({
      showModal: !state.showModal,
    }));
  };

  render() {
    const { showModal, images, loader, largeImage } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.hendleSearchFormSubmit} />

        {loader ? (
          <LoaderSpinner />
        ) : (
          <ImageGallery>
            <ImageGalleryItem
              parseLargeImage={this.parseLargeImage}
              images={images}
              toggleModal={this.toggleModal}
            />
          </ImageGallery>
        )}

        {images.length > 0 && !loader && (
          <Button fetchImages={this.fetchImages} />
        )}

        {showModal && (
          <Modal largeImage={largeImage} toggleModal={this.toggleModal} />
        )}
      </div>
    );
  }
}

export default App;
