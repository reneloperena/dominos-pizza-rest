const STORE_ID = '3681';

var pizzapi = require('dominos'); // or without payment option use require('pizzapi');
var myStore = new pizzapi.Store({ID: STORE_ID});



myStore.getFriendlyNames(storeData => console.log(storeData));
