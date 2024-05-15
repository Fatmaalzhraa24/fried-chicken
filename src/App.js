import RestaurantList from './RestaurantList';
import React from 'react';

function App() {
  const [restaurants, setRestaurants] = React.useState([])

  return (
    <div className="App">
      <RestaurantList 
        restaurantList={restaurants}
        setRestaurants={setRestaurants}
      />
    </div>
  );
}

export default App;
