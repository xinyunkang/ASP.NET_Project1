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

        vm.newTrip = {};
        vm.addTrip = function () {
            vm.trips.push({ name: vm.newTrip.name, created: new Date() });  //pass input to the table.
            vm.newTrip = {}; //Tell the form the data is gone. clear the form.
        }
    }



})();