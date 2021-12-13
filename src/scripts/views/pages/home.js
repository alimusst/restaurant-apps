import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="hero">
        <div class="hero-inner">
          <h1 class="hero-title">Membantumu menemukan restoran terbaik</h1>
          <p class="hero-desc">
            Cari informasi tentang restoran yang ingin dikunjungi <br />untuk
            menghindari ekspektasi yang berlebihan.
          </p>
        </div>
      </div>
      <section class="content">   
        <div class="explore">
          <h2 id="explore-heading" tabindex="0">Explore Restaurant</h2>
          <div class="restaurant-list">

          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.homeRestaurant();
    const restaurantsContainer = document.querySelector('.restaurant-list');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
