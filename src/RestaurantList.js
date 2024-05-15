import RestaurantCard from './RestaurantCard';
import RestaurantForm from './RestaurantForm';

const RestaurantList = (props) => {
  return (
    <div id='list-of-restaurant'>
      <span>Restaurant</span>
      {props.restaurantList.map((item) => {
        return <RestaurantCard
          key={item.id}
          name={item.name}
          location={item.location}
          rating={item.rating}
        />
      })}
      <div>
        <RestaurantForm
          restaurantList={props.restaurantList}
          setRestaurants={props.setRestaurants}
        />
      </div>
    </div>
  );
};

export default RestaurantList;
