var AmpersandModel = require('ampersand-model');
var Collection = require('./home_data')

module.exports = AmpersandModel.extend({
    props: {
        id: 'any',
        player_1: ['string', true, ''],
        player_2: ['string', true, ''],
        game_result: ['string', false, ''],
        board: ['array', false, ''],
        current_player: ['string', false, ''],
        won: ['boolean', false, ''],
        finished: ['boolean', false, '']
    },
    session: {
        selected: ['boolean', true, false]
    },
    derived: {
        viewUrl: {
            deps: ['id'],
            fn: function () {
                return '/games/' + this.id;
            }
        },
        gameName: {
            deps: ['player_1, player_2'],
            fn: function() {
                return this.player_1 + ' vs ' + this.player_2
            }
        },
        gameResult: {
            deps: ['game_result'],
            fn: function () {
                return this.game_result
            }
        }
    }
});
