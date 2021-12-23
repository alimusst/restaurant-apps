import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="hero">
        <picture>
          <source
            media="(max-width: 600px)"
            type="image/webp" 
            srcset="images/hero-image_4-small.webp"
          >
          <source
            media="(min-width: 601px)"
            type="image/webp" 
            srcset="images/hero-image_4-large.webp"
          >
          <source
            media="(max-width: 600px)"
            type="image/jpeg" 
            srcset="images/hero-image_4-small.jpg"
          >
          <img
            class="hero-image"
            src="images/hero-image_4-large.jpg"
            alt="cemilan dan hiasan"
          />
        </picture>
        <div class="hero-inner">
          <h1 class="hero-title">Membantumu menemukan restoran terbaik</h1>
          <p class="hero-desc">
            Cari informasi tentang restoran yang ingin dikunjungi <br />untuk menghindari ekspektasi
            yang berlebihan.
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
