import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <section>
    <div class='restaurant-view'>
      <img 
        class='restaurant-image'
        src='${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}'
        alt='Restaurant ${restaurant.name}'
        tabindex='0'
      >
    </div>
    <div class='restaurant-highlight'>
      <div class='restaurant-info'>
        <div class='restaurant-detail'>
          <h2 class='restaurant-name' tabindex='0'>${restaurant.name}</h2>
          <p tabindex='0'>${restaurant.address}, ${restaurant.city}</p>
          <div class='restaurant-rating-location'>
            <div class='restaurant-rating'>
              <img src='icons/star.png' alt='Restaurant rating' tabindex='0'>
              <p tabindex='0'>${restaurant.rating}</p>
            </div>
            <div class='restaurant-location'>
              <img src='icons/location.png' alt='Restaurant location' tabindex='0'>
              <p tabindex='0'>${restaurant.city}</p>
            </div>
          </div>
        </div>
        <div class='restaurant-categories'>
          <h3 tabindex='0'>Kategori</h3>
          <ul>

          </ul>
        </div>
      </div>
      <div class='restaurant-favorite-button-container'>

      </div>
    </div>
  </section>
  <section>
    <div class='restaurant-overview'>
      <h3 tabindex='0'>Tentang "${restaurant.name}"</h3>
      <p tabindex='0'>${restaurant.description}</p>
    </div>
    <div class='restaurant-menus'>
      <h3 tabindex='0'>Restaurant Menu</h3>
      <div class='restaurant-menu-container'>

      </div>
    </div>
  </section>
  <section>
    <div class='restaurant-reviews'>
      <h3 tabindex='0'>Customer Reviews</h3>
      <div class='customer-review-container'>

      </div>
    </div>
  </section>
`;

const createRestaurantDetailCategoriesTemplate = (category) => `
  <li>
    <p tabindex='0'>${category.name}</p>
  </li>
`;

const createRestaurantDetailMenusTemplate = (menu) => `
  <div class='restaurant-menu-${menu}'>
    <h4 tabindex='0'>${menu}</h4>
    <ul>
      
    </ul>
  </div>
`;

const createRestaurantDetailMenuCategoryTemplate = (menu) => `
  <li>
    <img src='icons/menu-book.png' alt='Restaurant menu'>
    <p tabindex='0'>${menu.name}</p>
  </li>
`;

const createRestaurantDetailCustomerReviewsTemplate = (customerReview) => `
  <div class='restaurant-customer-review'>
    <p tabindex='0'>${customerReview.name}</p>
    <p tabindex='0'>"${customerReview.review}"</p>
    <p tabindex='0'>${customerReview.date}</p>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <article class='restaurant-item'>
    <div class='restaurant-item-thumb'>
      <img 
        class='lazyload restaurant-thumb' 
        data-src='${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}'
        alt='Restaurant ${restaurant.name}'
        tabindex='0'
      >
      <div class='restaurant-location'>
        <img src='icons/location.png' alt='Restaurant location'>
        <p tabindex='0'>${restaurant.city}</p>
      </div>
      <div class='restaurant-rating'>
        <img src='icons/star.png' alt='Restaurant rating'>
        <p tabindex='0'>${restaurant.rating}</p>
      </div>
    </div>
    <div class='restaurant-item-content'>
      <h3>
        <a class='restaurant-name' href='#/detail/${restaurant.id}'>
          ${restaurant.name}
        </a>
      </h3>
      <p class='restaurant-description' tabindex='0'>${restaurant.description}</p>
    </div>
  </article>
`;

const createNoFavoriteRestaurantTemplate = () => `
  <p class='no-favorite-restaurant'>Belum ada restaurant yang disukai</p>
`;

const createFavoriteButtonTemplate = () => `
  <button class='favorite-button' type='button'>Tambah ke Favorite</button>
`;

const createFavoritedButtonTemplate = () => `
  <button class='favorited-button' type='button'>Favorite Restaurant</button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantDetailCategoriesTemplate,
  createRestaurantDetailMenusTemplate,
  createRestaurantDetailMenuCategoryTemplate,
  createRestaurantDetailCustomerReviewsTemplate,
  createRestaurantItemTemplate,
  createNoFavoriteRestaurantTemplate,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
};
