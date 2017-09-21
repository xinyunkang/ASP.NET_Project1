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
        vm.newStop = {};
        var url = "/api/trips/" + vm.tripName + "/stops";
        $http.get(url)
            .then(function (response) {  //then
                //success
                angular.copy(response.data, vm.stops); //response.data, NOT stops
                _showMap(vm.stops);
            }, function (err) {   //NOT },{
                //fail
                vm.errorMessage = "Fail to load stops";
            })
            .finally(function () {
                vm.isBusy = false;
            });

        vm.addStop = function () {
            vm.isBusy = true;
            $http.post(url, vm.newStop)
                .then(function (response) {
                    //succcess
                    vm.stops.push(response.data);
                    _showMap(vm.stops);
                    vm.newStop = [];
                }, function (err) {
                    //fail
                    vm.errorMessage = "Fail to add new stop";
                }).finally(function () {
                    vm.isBusy = false;
                })
        }

    }

    function _showMap(stops) {
        if (stops && stops.length > 0) {
            var mapStops = _.map(stops, function (item) {
                return {
                    lat: item.latitude,
                    long: item.longitude,
                    info: item.name
                };
            });

            //show map
            travelMap.createMap({
                stops: mapStops,
                selector: "#map",
                currentStop: 1,
                initialZoom: 3
            })
        }
    }

})();