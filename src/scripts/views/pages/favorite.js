import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate, createNoFavoriteRestaurantTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <section class="content">   
        <div class="favorite">
          <h2 id="favorite-heading" tabindex="0">Favorite Restaurant</h2>
          <div class="restaurant-list">

          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('.restaurant-list');

    if (!restaurants.length) {
      restaurantContainer.style.gridTemplateColumns = 'repeat(1, 1fr)';
      restaurantContainer.innerHTML += createNoFavoriteRestaurantTemplate();
    }

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
