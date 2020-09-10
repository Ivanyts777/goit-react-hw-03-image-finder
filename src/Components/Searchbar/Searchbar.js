import React, { Component } from "react";

class Searchbar extends Component {
  state = {
    inputValue: "",
  };

  heandleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  heandleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: " " });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.heandleSubmit}>
          <button className="SearchForm-button" type="submit">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoFocus
            autoComplete="off"
            onChange={this.heandleChange}
            value={this.state.inputValue}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
