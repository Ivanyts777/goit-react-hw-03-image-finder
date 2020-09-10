import React, { Component } from "react";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.heandleKeyDown);
  }
  componentWillUnmount() {
    window.addEventListener("keydown", this.heandleKeyDown);
  }
  heandleKeyDown = (e) => {
    e.code === "Escape" && this.props.toggleModal();
  };
  render() {
    return (
      <div className="Overlay" onClick={this.props.toggleModal}>
        <div className="Modal">
          <img src={this.props.largeImage} alt="modalImage" />
        </div>
      </div>
    );
  }
}

export default Modal;
