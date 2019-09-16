import React, { Component } from "react";

export default class NewRestaurantForm extends Component {
  state = { inputText: "" };

  handleTextChange = e => {
    this.setState({ inputText: e.target.value });
  };

  handleSave = () => {
    const { inputText } = this.state;
    const { onSave } = this.props;

    onSave(inputText);
  };

  render() {
    const { inputText } = this.state;
    return (
      <div>
        <input
          type="text"
          value={inputText}
          onChange={this.handleTextChange}
          data-test="newRestaurantName"
        />
        <button data-test="saveNewRestaurantButton" onClick={this.handleSave}>
          Save
        </button>
      </div>
    );
  }
}
