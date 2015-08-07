var PageView = require('./base');
var templates = require('../templates');
var HomeIndexView = require('../views/home_index');

module.exports = PageView.extend({
    template: templates.pages.homeView,
    render: function () {
        this.renderWithTemplate();
        this.renderCollection(this.collection, HomeIndexView, this.getByRole('games-list'));
        if (!this.collection.length) {
            this.fetchCollection();
        }
    },
    fetchCollection: function () {
        this.collection.fetch();
        return false;
    }
});
