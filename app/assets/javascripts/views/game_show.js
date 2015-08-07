var View = require('ampersand-view');
var templates = require('../templates');

module.exports = View.extend({
    template: templates.includes.games,
    bindings: {
        'model.viewUrl': {
            type: 'attribute',
            role: 'gameName',
            name: 'href'
        },
        'model.gameName': '[role=gameName]',
        'model.gameResult': '[role=gameResult]',
        'model.won': '[role:won]',
        'model.finished': '[role:finished]',
        'model.board': '[role:board]',
        'model.id': '[role:id]',
        'model.current_player': '[role:current_player]'
    }
});
