angular.module('coffee', [])

.controller('ShopsController', function ($scope) {
  // $scope.shops.name = ['Blue Bottle', 'Four Barrel', 'Ritual', 'Sightglass'];
  // $scope.icons = [];
  // var makeArray = function(size) {
  //   var resArray = [];
  //   for (var i = 0; i < size; i++) {
  //       resArray.push(1);
  //   }
  //   return resArray;
  // };

  // var makeIcons = function(object) {
  //   var icons = {};
  //   for (var key in object) {
  //       icons[key] = makeArray(object[key]);
  //   }
  //   return icons;
  // };

  $scope.shops = [{
    name: 'Four Barrel',
    hipster: 2,
    wood: [1,1,1],
    mac: [1,1,1],
    almondMilk: [1,1,1],
    pourOver: [1,1,1,1],
    singleOrigin: [1],
    naturalLighting: [1,1,1],
    rimmedGlasses: [1,1,1],
    rustic: 1,
    artisan: 2,
    fixie: [1,1,1,1],
    nowifi: 3,
    total: 1584,
    message: 'You found the second most hipster coffee shop in SF! \
    Sip on a pour over with a splash of almond milk as you appreciate the wooden decor and boar heads!'
  },
  {
    name: 'Blue Bottle',
    hipster: 4,
    wood: [1],
    mac: [1],
    almondMilk: [1,1],
    pourOver: [1],
    singleOrigin: [1,1,1],
    naturalLighting: [1,1],
    rimmedGlasses: [1],
    rustic: 4,
    artisan: 4,
    fixie: [1],
    nowifi: 4,
    total: 1668,
    message: 'You found the least hipster of the top coffee shops in SF. \
    Be a part of the trendy, sophisticated crowd as you sip on the daily \
    single-origin blend or a New Orleans iced coffee.'
  },
  {
    name: 'Ritual',
    hipster: 1,
    wood: [1,1],
    mac: [1,1,1,1],
    almondMilk: [1],
    pourOver: [1,1],
    singleOrigin: [1,1],
    naturalLighting: [1],
    rimmedGlasses: [1,1],
    rustic: 3,
    artisan: 3,
    fixie: [1,1,1],
    nowifi: 2,
    total: 1650,
    message: 'You found the third most hipster coffee shop in SF! \
    Treat yourself to a single-origin capuccino while you work on your macbook air.'
  },
  {
    name: 'Sightglass',
    hipster: 3,
    wood: [1,1,1,1],
    mac: [1,1],
    almondMilk: [1,1,1,1],
    pourOver: [1,1,1],
    singleOrigin: [1,1,1,1],
    naturalLighting: [1,1,1,1],
    rimmedGlasses: [1,1,1,1],
    rustic: 2,
    artisan: 1,
    fixie: [1,1],
    nowifi: 1,
    total: 1650,
    message: 'You found the most hipster coffee shop in SF! \
    Savor a single-origin almond milk latte while \
    sitting in the loft and enjoying the wooden decor and natural lighting!'
  }];

  // for (var i = 0; i < $scope.shops.length; i++) {
  //   $scope.icons.push(makeIcons($scope.shops[i]));
  // }
});

