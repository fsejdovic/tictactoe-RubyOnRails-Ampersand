var PageView = require('./base');
var templates = require('../templates');
// var NewGameView = require('../views/new_game');

module.exports = PageView.extend({
    template: templates.pages.newGameView,
    render: function () {
        this.renderWithTemplate();
        // this.renderCollection(this.collection, HomeIndexView, this.getByRole('games-list'));
        // if (!this.collection.length) {
        //     this.fetchCollection();
        // }
    }
    // ,
    // fetchCollection: function () {
    //     this.collection.fetch();
    //     return false;
    // }
});
