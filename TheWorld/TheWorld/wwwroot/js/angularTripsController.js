(function () {
    "use strict";
    //Getting the existing module
    angular.module("app-trips")
        .controller("angularTripsController", angularTripsController); //Angular way to create new controllers.

    function angularTripsController($http) {
        var vm = this;
        //vm.trips = [
        //    {
        //        name: "US Trip",
        //        created: new Date()
        //    },
        //    {
        //        name: "World Trip",
        //        created: new Date()
        //    }];

        vm.trips = [];

        vm.newTrip = {};
        vm.errorMessage = "";
        vm.isBusy = true;
        vm.addTrip = function () {
            //vm.trips.push({ name: vm.newTrip.name, created: new Date() });  //pass input to the table.
            //vm.newTrip = {}; //Tell the form the data is gone. clear the form.

            vm.errorMessage = "";
            $http.post("/api/trips", vm.newTrip) //post to db.
                .then(function (response) {
                    //success
                    vm.trips.push(response.data);
                    vm.newTrip = {};

                }, function () {
                    vm.errorMessage = "Fail to save new trip.";
                }).finally(function () {
                    vm.isBusy = false;
                })
        }

        //get data from db;
        $http.get("/api/trips")
            .then(function (response) {
                //success
                angular.copy(response.data, vm.trips);
            },
            function (error) {
                //fail
                vm.errorMessage = "fail to load data: " + error;
                
            })
            .finally(function () {
                vm.isBusy = false;  //disable the loading icon
            })
    }



})();