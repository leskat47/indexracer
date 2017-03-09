console.log('contollers-MainController.js');



// //////////////////////////////////////////////////////////////////////////
// Angular app
const app = angular.module('racerApp', ['ngCookies']);
    // // Thinking about routes. Would need to add ngRoute to dependencies

    // app.config(['$routeProvider'],
    // 	function($routeProvider) {
    // 		$routeProvider
    // 		  .when ('/racer', {
    // 		  	templateUrl: 'template.html',
    // 		  	controller: 'SoloCtrl',
    // 		  })
    // 		  .when ('/prosolo', {
    // 		  	templateUrl: 'template.html',
    // 		  	controller: 'ProSoloCtrl'
    // 		  })
    // 		  .otherwise({
    // 		  	redirectTo: '/racer'
    // 		  });
    // 	}]);

// //////////////////////////////////////////////////////////////////////////
// Class Index datasets
app.value('Cats', 
  {soloCats: cats,
  ProSoloCats: prosoloCats,
  AASCats: AAS}   
);

/* eslint-disable no-param-reassign */
app.controller('SoloCtrl', ['$scope', '$log', '$cookies', '$location', '$anchorScroll', '$window', 'Cats', function ctrl($scope, $log, $cookies, $location, $anchorScroll, $window, Cats) {
  $scope.$log = $log;
  $scope.myTime = '';
  $scope.viewComp = false;
  $cookies.put("test", "test");
  $log.log("cookie: ", $cookies.get("test"))
  $scope.categories = Cats.soloCats;

  $scope.showEquivalents = function(){
    if ($window.innerWidth < 550){
      $location.hash('cl_num');
      $anchorScroll();
    }
  }
  $scope.changeViewComp = function changeViewComp() {
    if ($scope.viewComp === false) {
      $scope.viewComp = true;
    } else {
      $scope.clearCompVals();
      $scope.viewComp = false;
    }
  };
  $scope.clearVals = function clearVals() {
    $scope.selectedCat = '';
    $scope.clearSubVals();
  };
  $scope.clearSubVals = function clearSubVals() {
    $scope.selectedClass = '';
    $scope.myTime = '';
  };
  $scope.clearCompVals = function clearCompVals() {
    $scope.selectedCompCat = '';
    $scope.clearCompSubVals();
  };
  $scope.clearCompSubVals = function clearCompSubVals() {
    $scope.selectedCompClass = '';
    $scope.compTime = '';
  };

  $scope.setCategories = function setCategories(category) {
    $scope.clearVals();
    $scope.clearCompVals();
    $scope.categories = (category === "solo") ? Cats.soloCats : 
                        (category === "prosolo") ? Cats.ProSoloCats :
                        Cats.AASCats;
    $scope.sourceText = (category === "solo") ? "Solo Indices" : 
                        (category === "prosolo") ? "ProSolo Indices":
                        "AAS Indices";
  }

// COOKIES
  $scope.setCatCookie = function setCatCookie() {
    $cookies.put('Category', $scope.selectedCat);
  };

  $scope.setClassCookie = function () {
    $cookies.put('Class', $scope.selectedClass);
  };

// Winner or comparable display management
  $scope.$watchGroup(['selectedClass', 'myTime', 'selectedCompClass', 'compTime'],
    function (newVal, oldVal) {
      let compIndex;
      let time;
    // If user time is available (we can assume we have the class)
      if ($scope.myTime) {
        $scope.showEquivalents();
        const myIndex = $scope.selectedClass * $scope.myTime;
        // If competitor time is available, show full results
        if ($scope.compTime) {
          compIndex = $scope.selectedCompClass * $scope.compTime;
          if (myIndex > compIndex) {
            const diffTime = (myIndex - compIndex).toFixed(3);
            $scope.results = `Sorry, you lost by ${diffTime}.`;
          } else if (compIndex > myIndex) {
            const diffTime = (compIndex - myIndex).toFixed(3);
            $scope.results = `You won by ${diffTime}!`;
          } else {
            $scope.results = 'It\'s a tie!';
          }
          // If no competitor time, show time to beat for competitor
        } else if ($scope.selectedCompClass) {
          time = (myIndex / $scope.selectedCompClass).toFixed(3);
          $scope.results = `Your competitor will need better than ${time} to win.`;
        }
        // If competitor time only is available, show time to beat for user
      } else if ($scope.compTime) {
        compIndex = $scope.selectedCompClass * $scope.compTime;
        time = (compIndex / $scope.selectedClass).toFixed(3);
        $scope.results = `You will need better than ${time} to win.`;
      } else {
        return null;
      }
    }
    );
}]);
/* eslint-enable no-param-reassign */
