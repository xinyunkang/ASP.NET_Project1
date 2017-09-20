(function () {
    "use strict";

    angular.module("app-trips")
        .controller("tripEditorController", tripEditorController);

    function tripEditorController($routeParams, $http) {
        var vm = this;
        vm.tripName = $routeParams.tripName;
        vm.isBusy = true;
        vm.errorMessage = "";
        vm.stops = [];

        $http.get("/api/trips/" + vm.tripName + "/stops")
            .then(function (response) {  //then
                //success
                angular.copy(response.data, vm.stops); //response.data, NOT stops
            }, function(err){   //NOT },{
                //fail
                vm.errorMessage = "Fail to load stops";
            })
            .finally(function () {
                vm.isBusy = false;
            });
    }


})();