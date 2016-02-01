///<reference path="../../../typings/tsd.d.ts" />
var app;
(function (app) {
    (function (services) {
        'use strict';

        var CommonServices = (function () {
            function CommonServices($http, $q) {
                this.$http = $http;
                this.$q = $q;
                this.blogs = [];
            }
            CommonServices.prototype.getBlog = function (max, permalink) {
                var _this = this;
                var limit = max || 10;
                var q = _this.$q.defer();

                if (_this.blogs.length === 0) {
                    _this.$http.get('/api/blogs?limit=' + limit + '&permalink=' + permalink).success(function (res) {
                        _this.blogs = res;
                        q.resolve(_this.blogs);
                    });

                    return q.promise;
                }

                q.resolve(_this.blogs);

                return q.promise;
            };

            CommonServices.prototype.getRandomWord = function () {
                return Parse.Cloud.run('getRandomWord');
            };
            CommonServices.$inject = ['$http', '$q'];
            return CommonServices;
        })();

        angular.module('app.services').service('CommonServices', CommonServices);
    })(app.services || (app.services = {}));
    var services = app.services;
})(app || (app = {}));
