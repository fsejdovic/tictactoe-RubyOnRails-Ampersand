var PageView = require('./base');
var templates = require('../templates');
var GameShowView = require('../views/game_show');

module.exports = PageView.extend({
    template: templates.pages.gameView,
    render: function () {
        this.renderWithTemplate();
        // this.renderCollection(this.collection, GameShowView, this.getByRole('games-list'));
        // if (!this.collection.length) {
        //     this.fetchCollection();
        // }
    },
    fetchCollection: function () {
        this.collection.fetch();
        return false;
    }
});
