import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const ListRestaurant = {
  async render() {
    return `
    <h2>List Restaurant</h2>
    <div class="main-content">
      <div class="card-container">
      </div>
    </div>
    `;
  },

  async afterRender() {
    // fungsi ini akan dipanggil setelah render()
    const restaurants = await RestaurantSource.listRestaurant();
    const restaurantContainer = document.querySelector('.card-container');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default ListRestaurant;
