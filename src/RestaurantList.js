import React from "react";

const RestaurantList = ({ restaurantNames }) => (
  <RestaurantItems restaurantNames={restaurantNames} />
);

const RestaurantItems = ({ restaurantNames }) =>
  restaurantNames.length === 0 ? (
    <NoRestaurantItems />
  ) : (
    <SomeRestaurantItems restaurantNames={restaurantNames} />
  );

const NoRestaurantItems = () => <p>(none added yet)</p>;

const SomeRestaurantItems = ({ restaurantNames }) => (
  <ul>
    {restaurantNames.map(restaurantName => (
      <li key={restaurantName}>{restaurantName}</li>
    ))}
  </ul>
);

export default RestaurantList;
