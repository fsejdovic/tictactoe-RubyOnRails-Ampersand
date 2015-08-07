var Collection = require('ampersand-rest-collection');
var GameRoot = require('./game');

module.exports = Collection.extend({
    mainIndex: 'id',
    model: GameRoot,
    url: '/games_api'
});
