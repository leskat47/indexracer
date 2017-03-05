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
  {soloCats:
    {
      Street: {
        SS: 0.835,
        AS: 0.833,
        BS: 0.826,
        CS: 0.819,
        DS: 0.811,
        ES: 0.807,
        FS: 0.814,
        GS: 0.806,
        HS: 0.798,
        HCS: 0.817,
        SSR: 0.860,
      },
      'Street Touring': {
        STF: 0.809,
        STS: 0.832,
        STX: 0.836,
        STR: 0.841,
        STU: 0.845,
        STP: 0.837,
      },
      'Street Prepared': {
        SSP: 0.872,
        ASP: 0.865,
        BSP: 0.863,
        CSP: 0.867,
        DSP: 0.855,
        ESP: 0.852,
        FSP: 0.840,
      },
      CAM: {
        'CAM-C': 0.830,
        'CAM-T': 0.834,
        'CAM-S': 0.848,
      },
      Prepared: {
        XP: 0.907,
        BP: 0.883,
        CP: 0.864,
        DP: 0.879,
        EP: 0.871,
        FP: 0.880,
        HCR: 0.838,
      },
      'Street Mod': {
        SMF: 0.861,
        SM: 0.870,
        SSM: 0.882,
      },
      Mod: {
        AM: 1,
        BM: 0.966,
        CM: 0.916,
        DM: 0.919,
        EM: 0.920,
        FM: 0.926,
        FSAE: 0.982,
        KM: 0.954,
      },
      Junior: {
        JA: 0.878,
        JB: 0.842,
        JC: 0.734,
      },
    },
    ProSoloCats:
    {
        Street: {
          SS: 0.815,
          AS: 0.813,
          BS: 0.807,
          CS: 0.792,
          DS: 0.788,
          ES: 0.782,
          FS: 0.790,
          GS: 0.779,
          HS: 0.768,
          SSR: 0.855,
        },
        'Street Touring': {
          STF: 0.789,
          STS: 0.799,
          STX: 0.809,
          STR: 0.819,
          STU: 0.823,
          STP: 0.811,
        },
        'Street Prepared': {
          SSP: 0.871,
          ASP: 0.868,
          BSP: 0.858,
          CSP: 0.861,
          DSP: 0.848,
          ESP: 0.845,
          FSP: 0.818,
        },
        CAM: {
          'CAM-C': 0.816,
          'CAM-T': 0.805,
          'CAM-S': 0.822,
        },
        Prepared: {
          XP: 0.904,
          CP: 0.856,
          DP: 0.870,
          EP: 0.863,
          FP: 0.873,
        },
        'Street Mod': {
          SMF: 0.859,
          SM: 0.872,
          SSM: 0.881,
        },
        Mod: {
          AM: 1,
          BM: 0.955,
          CM: 0.896,
          DM: 0.920,
          EM: 0.922,
          FM: 0.924,
          FSAE: 0.958,
          KM: 0.934,
        },
        Junior: {
          JA: 0.821,
          JB: 0.781,
          JC: 0.717,
        }
    }
  }
);

/* eslint-disable no-param-reassign */
app.controller('SoloCtrl', ['$scope', '$log', '$cookies', '$location', '$anchorScroll', '$window', 'Cats', function ctrl($scope, $log, $cookies, $location, $anchorScroll, $window, Cats) {
  $scope.$log = $log;
  $scope.myTime = '';
  $scope.viewComp = false;
  $cookies.put("test", "test");
  $log.log("cookie: ", $cookies.get("test"))

  $scope.showEquivalents = function(){
    if ($window.innerWidth < 550){
      $location.hash('equivs');
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

  $scope.$watch('toggle', function () {
    $scope.clearVals();
    $scope.clearCompVals();
    $scope.sourceText = $scope.toggle ? 'ProSolo Indices' : 'Solo Indices';
    $scope.toggleText = $scope.toggle ? 'Switch to Solo' : 'Switch to ProSolo';
    $scope.categories = $scope.toggle ? Cats.ProSoloCats : Cats.soloCats;
  });

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
