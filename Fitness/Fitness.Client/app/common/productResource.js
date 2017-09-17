(function () {
    "use strict";
    angular
        .module("common.services")
        .factory("productResource", ["$resource", "appSettings", productResource])


    function productResource($resouce,appSettings) {
        //serverPath: "http://localhost:25081"
        return $resouce(appSettings.serverPath + "/api/products/:id");


    };
}());