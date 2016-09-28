define('app',["require", "exports"], function (require, exports) {
    "use strict";
    var App = (function () {
        function App() {
            this.message = 'Hello World!';
        }
        return App;
    }());
    exports.App = App;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Promise.config({
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.use
            .plugin('aurelia-validation')
            .plugin('aurelia-materialize-bridge', function (b) { return b.useAll(); });
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    function configure(config) {
    }
    exports.configure = configure;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <md-navbar>\n    <a href=\"#/samples/navbar\" class=\"brand-logo\"><span>Brand logo</span></a>\n    <ul class=\"hide-on-med-and-down right\">\n      <li md-waves><a>About</a></li>\n      <li md-waves><a>Installation</a></li>\n      <li md-waves><a md-sidenav-collapse=\"ref.bind: sideNav;\" md-button md-waves><i class=\"fa fa-camera-retro\"></i></a></li>\n    </ul>\n  </md-navbar>  \n  <md-navbar>\n    <form>\n      <div class=\"input-field\">\n        <input id=\"search\" type=\"search\" required>\n        <label for=\"search\"><i class=\"material-icons\"></i></label>\n        <i class=\"material-icons\">close</i>\n      </div>\n    </form>\n  </md-navbar>\n  <md-sidenav view-model.ref=\"sideNav\">\n    <ul>\n      <li md-waves><a href=\"#\">About</a></li>\n      <li md-waves><a href=\"#\">Installation</a></li>\n      <li md-waves><a href=\"#\">Project Status</a></li>\n      <li md-waves><a href=\"#\">Help/Docs</a></li>\n    </ul>\n  </md-sidenav>\n  <h1>${message}</h1>    \n  <div class=\"button-row\">\n    <button md-button md-waves><i class=\"left material-icons\">mode_edit</i>I'm a basic button</button>\n    <button md-button=\"flat: true;\" md-waves>I'm a flat button</button>\n  </div>  \n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map