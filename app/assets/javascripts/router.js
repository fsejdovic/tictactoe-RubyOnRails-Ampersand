/*global me, app*/
var Router = require('ampersand-router');
var HomeView = require('./pages/home-view');
var GameView = require('./pages/game-view');
var NewGameView = require('./pages/new-game-view');

module.exports = Router.extend({
    routes: {
        'games': 'home',
        'games/new': 'NewGameView',
        'games/:id': 'GameView'
    },

    // ------- ROUTE HANDLERS ---------
    home: function () {
        this.trigger('page', new HomeView({
            collection: app.home_data
        }));
    },

    GameView: function () {
        this.trigger('page', new GameView({
            collection: app.home_data
        }));
    },

    NewGameView: function () {
        this.trigger('page', new NewGameView({
            collection: app.home_data
        }));
    }
});
