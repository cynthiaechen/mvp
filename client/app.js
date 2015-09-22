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
    total: 1668
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
    total: 1650
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
    total: 1650
  }];
});

