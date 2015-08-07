(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.templatizer = factory();
    }
}(this, function () {
    var jade=function(){function r(r){return null!=r&&""!==r}function n(e){return Array.isArray(e)?e.map(n).filter(r).join(" "):e}var e={};return e.merge=function t(n,e){if(1===arguments.length){for(var a=n[0],s=1;s<n.length;s++)a=t(a,n[s]);return a}var i=n["class"],l=e["class"];(i||l)&&(i=i||[],l=l||[],Array.isArray(i)||(i=[i]),Array.isArray(l)||(l=[l]),n["class"]=i.concat(l).filter(r));for(var o in e)"class"!=o&&(n[o]=e[o]);return n},e.joinClasses=n,e.cls=function(r,t){for(var a=[],s=0;s<r.length;s++)a.push(t&&t[s]?e.escape(n([r[s]])):n(r[s]));var i=n(a);return i.length?' class="'+i+'"':""},e.attr=function(r,n,t,a){return"boolean"==typeof n||null==n?n?" "+(a?r:r+'="'+r+'"'):"":0==r.indexOf("data")&&"string"!=typeof n?" "+r+"='"+JSON.stringify(n).replace(/'/g,"&apos;")+"'":t?" "+r+'="'+e.escape(n)+'"':" "+r+'="'+n+'"'},e.attrs=function(r,t){var a=[],s=Object.keys(r);if(s.length)for(var i=0;i<s.length;++i){var l=s[i],o=r[l];"class"==l?(o=n(o))&&a.push(" "+l+'="'+o+'"'):a.push(e.attr(l,o,!1,t))}return a.join("")},e.escape=function(r){var n=String(r).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");return n===""+r?r:n},e.rethrow=function a(r,n,e,t){if(!(r instanceof Error))throw r;if(!("undefined"==typeof window&&n||t))throw r.message+=" on line "+e,r;try{t=t||require("fs").readFileSync(n,"utf8")}catch(s){a(r,null,e)}var i=3,l=t.split("\n"),o=Math.max(e-i,0),c=Math.min(l.length,e+i),i=l.slice(o,c).map(function(r,n){var t=n+o+1;return(t==e?"  > ":"    ")+t+"| "+r}).join("\n");throw r.path=n,r.message=(n||"Jade")+":"+e+"\n"+i+"\n\n"+r.message,r},e}();

    var templatizer = {};
    templatizer["includes"] = {};
    templatizer["pages"] = {};

    // body.jade compiled template
    templatizer["body"] = function tmpl_body() {
        return '<body><div id="wrapper"><nav class="navbar navbar-default navbar-static-top"><div class="container-fluid"><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="#">Tic Tac Toe Game</a></div><div id="navbar" class="navbar-collapse collapse"><ul class="nav navbar-nav"><li><a href="/games"><i class="fa fa-home"></i> Home</a></li><li><a href="/games/new"><i class="fa fa-gamepad"></i> New Game</a></li></ul></div></div></nav><div class="container-fluid"><div class="row"><div class="col-lg-12" role="page-container"></div></div></div><footer class="text-center">&copy; 2015</footer></div></body>';
    };

    // head.jade compiled template
    templatizer["head"] = function tmpl_head() {
        return '<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0"/><meta name="apple-mobile-web-app-capable" content="yes"/>';
    };

    // includes/betfair_root.jade compiled template
    templatizer["includes"]["games"] = function tmpl_includes_games() {
        return '<tr><td><a role="gameName"></a></td><td role="gameResult"></td></tr>';
    };

    // includes/betfair_root.jade compiled template
    templatizer["includes"]["gameShow"] = function tmpl_includes_game_show() {
        return '<dt>Player 1 <i class="fa fa-circle-o"></i>: </dt> <dd role="player_1"></dd><dt>Player 2 <i class="fa fa-remove-o"></i>: </dt> <dd role="player_2"></dd><dt>Player 2 <i class="fa fa-remove"></i>: </dt> <dd><%= @game.player_2 %></dd><dt>Current Player: </dt> <dd role="currnet_player"></dd>';
    };

    // pages/collectionDemo.jade compiled template
    templatizer["pages"]["homeView"] = function tmpl_pages_homeView() {
        return '<div class="panel panel-default"><div class="panel-heading">Game List</div><table class="table table-responsive table-striped table-hover"><thead><tr><th>Players</th><th>Result</th></tr></thead><tbody role="games-list"></tbody></table></div>';
    };

    templatizer["pages"]["gameView"] = function tmpl_pages_gameView(){
        return '<div class="panel panel-default"><div class="panel-heading">Game {{id}}</div><div class="panel-body"><div class="col-lg-6"><h4><span class="label label-default" role="gameHeading"></span></h4><dl class="dl-horizontal" role="gameDetail"></dl></div><div class="col-lg-6" role="crateBoard"></div></div></div>';
    }

    // pages/BetfairRootView.jade compiled template
    templatizer["pages"]["newGameView"] = function tmpl_pages_newGameView() {
        return '<div class="panel panel-default"><div class="panel-heading">New Game</div></div>';
    };

    return templatizer;
}));