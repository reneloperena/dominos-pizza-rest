var pizzapi = require('dominos');

console.log(pizzapi.Util);

pizzapi.Util.findNearbyStores(
   'New York, NY, 10011',
   'Delivery',
   storeData => console.log(storeData.result)
);
