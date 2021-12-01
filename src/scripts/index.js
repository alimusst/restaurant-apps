import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

console.log('Hello Coders! :)');

const menu = document.querySelector('.menu');
const drawer = document.querySelector('.drawer');

document.body.addEventListener('click', (e) => {
  if (e.target.className === 'menu') {
    drawer.classList.toggle('show-drawer');
  } else {
    drawer.classList.remove('show-drawer');
  }

  if (drawer.classList.contains('show-drawer')) {
    menu.textContent = 'X';
    menu.ariaLabel = 'Close Navigation';
  } else {
    menu.textContent = '☰';
  }

  e.stopPropagation();
});

function setRestaurantListElement(restaurant) {
  const restaurantList = document.querySelector('.restaurant-list');

  const restaurantItem = document.createElement('article');
  const restaurantItemThumb = document.createElement('div');
  const restaurantItemContent = document.createElement('div');

  const restaurantThumb = document.createElement('img');
  const restaurantNameHeading = document.createElement('h3');
  const restaurantName = document.createElement('a');
  const restaurantDescription = document.createElement('p');

  const restaurantLocation = document.createElement('div');
  const restaurantLocationName = document.createElement('p');
  const restaurantLocationIcon = document.createElement('img');

  const restaurantRating = document.createElement('div');
  const restaurantRatingScore = document.createElement('p');
  const restaurantRatingIcon = document.createElement('img');

  restaurantItem.classList.add('restaurant-item');
  restaurantItemThumb.classList.add('restaurant-item-thumb');
  restaurantItemContent.classList.add('restaurant-item-content');

  restaurantThumb.classList.add('restaurant-thumb');
  restaurantThumb.setAttribute('src', `${restaurant.pictureId}`);
  restaurantThumb.setAttribute(
    'alt',
    `Tampilan restaurant ${restaurant.name} yang berada di ${restaurant.city}`
  );

  restaurantLocation.classList.add('restaurant-location');
  restaurantLocationName.textContent = restaurant.city;
  restaurantLocationIcon.src = 'icons/location.png';
  restaurantLocationIcon.alt = 'location';

  restaurantRating.classList.add('restaurant-rating');
  restaurantRatingScore.textContent = restaurant.rating;
  restaurantRatingIcon.src = 'icons/star.png';
  restaurantRatingIcon.alt = 'rating';

  restaurantName.classList.add('restaurant-name');
  restaurantName.textContent = restaurant.name;
  restaurantName.setAttribute('href', '#main');

  restaurantDescription.classList.add('restaurant-description');
  restaurantDescription.textContent = restaurant.description;

  restaurantNameHeading.appendChild(restaurantName);

  restaurantLocation.append(restaurantLocationIcon, restaurantLocationName);
  restaurantRating.append(restaurantRatingIcon, restaurantRatingScore);

  restaurantItemThumb.append(
    restaurantThumb,
    restaurantLocation,
    restaurantRating
  );
  restaurantItemContent.append(restaurantNameHeading, restaurantDescription);
  restaurantItem.append(restaurantItemThumb, restaurantItemContent);

  restaurantList.appendChild(restaurantItem);

  return restaurantList;
}

const data = require('../DATA.json');

data.restaurants.forEach((e) => {
  setRestaurantListElement(e);
});
