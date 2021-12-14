import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import {
  createRestaurantDetailTemplate,
  createRestaurantDetailCategoriesTemplate,
  createRestaurantDetailMenusTemplate,
  createRestaurantDetailMenuCategoryTemplate,
  createRestaurantDetailCustomerReviewsTemplate,
} from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div class='restaurant-container'></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);

    const restaurantContainer = document.querySelector('.restaurant-container');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    const restaurantCategories = document.querySelector('.restaurant-categories > ul');
    restaurant.categories.forEach((category) => {
      restaurantCategories.innerHTML += createRestaurantDetailCategoriesTemplate(category);
    });

    const restaurantMenus = document.querySelector('.restaurant-menu-container');
    // eslint-disable-next-line no-restricted-syntax
    for (const restaurantMenuCategory in restaurant.menus) {
      if (Object.hasOwnProperty.call(restaurant.menus, restaurantMenuCategory)) {
        const menus = restaurant.menus[restaurantMenuCategory];
        restaurantMenus.innerHTML += createRestaurantDetailMenusTemplate(restaurantMenuCategory);

        const restaurantMenu = document.querySelector(
          `.restaurant-menu-${restaurantMenuCategory} > ul`
        );
        menus.forEach((menu) => {
          restaurantMenu.innerHTML += createRestaurantDetailMenuCategoryTemplate(menu);
        });
      }
    }

    const restaurantReviews = document.querySelector('.customer-review-container');
    restaurant.customerReviews.forEach((customerReview) => {
      restaurantReviews.innerHTML += createRestaurantDetailCustomerReviewsTemplate(customerReview);
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('.restaurant-favorite-button-container'),
      restaurant: {
        id: restaurant.id,
        pictureId: restaurant.pictureId,
        name: restaurant.name,
        city: restaurant.city,
        rating: restaurant.rating,
        description: restaurant.description,
      },
    });
  },
};

export default Detail;
