angular.module('coffee', [])

.controller('ShopsController', function ($scope) {
  // $scope.shops.name = ['Blue Bottle', 'Four Barrel', 'Ritual', 'Sightglass'];

  $scope.shops = [{
    name: 'Four Barrel',
    hipster: 288,
    wood: 52,
    mac: 14,
    almondMilk: 63,
    pourOver: 93,
    singleOrigin: 15,
    naturalLighting: 13,
    rustic: 28,
    artisan: 28,
    total: 1584,
    message: 'You found the second most hipster coffee shop in SF! \
    Sip on a pour over with a splash of almond milk as you appreciate the wooden decor and boar heads!'
  },
  {
    name: 'Blue Bottle',
    hipster: 88,
    wood: 8,
    mac: 4,
    almondMilk: 8,
    pourOver: 22,
    singleOrigin: 23,
    naturalLighting: 12,
    rustic: 0,
    artisan: 7,
    total: 1668,
    message: 'You found the least hipster of the top coffee shops in SF. \
    Be a part of the trendy, sophisticated crowd as you sip on the daily \
    single-origin blend or a New Orleans iced coffee.'
  },
  {
    name: 'Ritual',
    hipster: 315,
    wood: 14,
    mac: 79,
    almondMilk: 6,
    pourOver: 37,
    singleOrigin: 18,
    naturalLighting: 5,
    rustic: 4,
    artisan: 10,
    total: 1650,
    message: 'You found the third most hipster coffee shop in SF! \
    Treat yourself to a single-origin capuccino while you work on your macbook air.'
  },
  {
    name: 'Sightglass',
    hipster: 124,
    wood: 57,
    mac: 10,
    almondMilk: 57,
    pourOver: 53,
    singleOrigin: 17,
    naturalLighting: 24,
    rustic: 20,
    artisan: 12,
    total: 1650,
    message: 'You found the most hipster coffee shop in SF! \
    Savor a single-origin almond milk latte while \
    sitting in the loft and enjoying the wooden decor and natural lighting!'
  }];
});

