import React from "react";

const RestaurantForm = (props) => {
  const [name, setName] = React.useState();
  const [location, setLocation] = React.useState();

  const onNameChange = (e) => {
    setName(e.target.value);
  }
  const onLocationChange = (e) => {
    setLocation(e.target.value);
  }

  const onFormSubmit = (e) => {
    const data = {
        name: name,
        location: location,
        rating: 0,
    }
    props.setRestaurants([...props.restaurantList, data])
    e.preventDefault();
  }

  return (
    <>
      <label>Add a restaurant:</label>
      <form id="restaurantForm" onSubmit={onFormSubmit}>
        <input type="text" name="name" value={name} onChange={onNameChange}/>
        <input type="text" name="location" value={location} onChange={onLocationChange}/>
        <input type="submit"/>
      </form>
    </>
  );
};

export default RestaurantForm;
