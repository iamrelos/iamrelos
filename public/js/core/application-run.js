///<reference path="../../../typings/tsd.d.ts" />
(function () {
    'use strict';
    angular.module('app').run(run);
    run.$inject = ['$rootScope'];
    function run($rootScope) {
        $rootScope.$on('$routeChangeStart', function (event, next, current) {
        });
    }
})();
//# sourceMappingURL=application-run.js.map