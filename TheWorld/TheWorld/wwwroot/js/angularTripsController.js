(function () {
    "use strict";
    //Getting the existing module
    angular.module("app-trips")
        .controller("angularTripsController", angularTripsController); //Angular way to create new controllers.

    function angularTripsController() {
        var vm = this;
        vm.trips = [
            {
                name: "US Trip",
                created: new Date()
            },
            {
                name: "World Trip",
                created: new Date()
            }];
    }



})();