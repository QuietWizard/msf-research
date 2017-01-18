var researchControllers = angular.module('researchControllers', []);

researchControllers.controller('researchController', ['$scope', '$http', '$sce', function ($scope, $http, $sce) {
    $http.get('json/research.json').success(function (data) {
        $scope.docs = data.Content;
        $scope.categoryFilter = "";
        $scope.categoryTitle = "All Documents";
        $scope.to_trusted = function (html_code) {
            return $sce.trustAsHtml(html_code);
        }

        //Set Filters for Media, set the panel on or off based on emptyness
        $scope.filterVar = function (filter) {
            if (filter == "All") {
                $scope.categoryFilter = "";
                $scope.categoryTitle = "All Documents";
                $("#docs").show();
                $("#noDocs").hide();
            } else {
                $scope.categoryFilter = filter;
                $scope.categoryTitle = filter;
                $("#docs").show();
                $("#noDocs").hide();
            }
        }
        $scope.analytics = function (label) {
            ga('event', 'research.aspx', 'Click', label);
        }
    });
}]);