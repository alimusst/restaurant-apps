const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked movies', ({ I }) => {
  I.seeElement('.content');
  I.see('Belum ada restaurant yang disukai', '.no-favorite-restaurant');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Belum ada restaurant yang disukai', '.no-favorite-restaurant');

  I.amOnPage('/');

  I.seeElement('.restaurant-name');

  I.wait(1);

  const firstRestaurant = locate('.restaurant-name').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('.favorite-button');
  I.click('.favorite-button');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-list');
  const likedRestaurantName = await I.grabTextFrom('.restaurant-name');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});
