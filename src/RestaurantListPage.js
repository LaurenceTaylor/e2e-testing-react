import React, { Component } from "react";
import NewRestaurantForm from "./NewRestaurantForm";
import RestaurantList from "./RestaurantList";

export default class RestaurantListPage extends Component {
  state = {
    restaurantNames: [],
    showNewRestaurantForm: false
  };

  handleShowNewRestaurantForm = () => {
    this.setState({ showNewRestaurantForm: true });
  };

  handleAddRestaurant = newRestaurantName => {
    this.setState(state => ({
      showNewRestaurantForm: false,
      restaurantNames: [newRestaurantName, ...this.state.restaurantNames]
    }));
  };

  renderNewRestaurantForm() {
    if (this.state.showNewRestaurantForm) {
      return <NewRestaurantForm onSave={this.handleAddRestaurant} />;
    }
  }

  render() {
    const { restaurantNames } = this.state;
    return (
      <div>
        <button
          data-test="addRestaurantButton"
          onClick={this.handleShowNewRestaurantForm}
        >
          Add Restaurant
        </button>
        {this.renderNewRestaurantForm()}
        <RestaurantList restaurantNames={restaurantNames} />
      </div>
    );
  }
}
