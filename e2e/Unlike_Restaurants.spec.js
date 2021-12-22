const assert = require('assert');

Feature('Unlike Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Unlike a restaurant', async ({ I }) => {
  I.seeElement('.content');
  I.seeElement('.restaurant-name');
  const firstRestaurant = locate('.restaurant-name').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('.favorite-button');
  I.click('.favorite-button');

  I.amOnPage('/#/favorite');

  I.seeElement('.content');
  I.seeElement('.restaurant-item');
  const likedRestaurantName = await I.grabTextFrom('.restaurant-name');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.seeElement(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('.favorited-button');
  I.click('.favorited-button');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-list');
});
