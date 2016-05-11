    var app = angular.module('racerApp', []);




  	app.controller('SoloCtrl', ['$scope', function($scope) {
  		$scope.message = "HIIIIIIII"
  		// $scope.$log = $log;
  		$scope.myTime = "";
  		$scope.viewComp = false;
  		$scope.changeViewComp=function(){
  			if ($scope.viewComp == false) {
  				$scope.viewComp = true;
  			} else {
  				$scope.clearCompVals();
  				$scope.viewComp = false;
  			}
  		}
  		$scope.clearVals = function(){
  			$scope.selectedCat="";
  			$scope.clearSubVals();
  		}
  		$scope.clearSubVals = function(){
  			$scope.selectedClass="";
  			$scope.myTime="";	
  		}

  		$scope.clearCompVals = function(){
  			$scope.selectedCompCat="";
  			$scope.clearCompSubVals();
  		}
  		$scope.clearCompSubVals = function(){
  			$scope.selectedCompClass="";
  			$scope.compTime="";
  		}
  		$scope.$watchGroup(['selectedClass', 'myTime', 'selectedCompClass', 'compTime'], 
  			function(newVal, oldVal){
  				// If user time is available (we can assume we have the class)
  				if ($scope.myTime) {
  					var myIndex = $scope.selectedClass * $scope.myTime;
  					// If competitor time is available, show full results
  					if ($scope.compTime) {
	  					var compIndex = $scope.selectedCompClass * $scope.compTime
	  					if (myIndex > compIndex) {
	  						diff_time = (myIndex - compIndex).toFixed(3);
	  						$scope.results = "Sorry, you lost by " + diff_time + "."
	  					} else if (compIndex > myIndex) {
	   						diff_time = (compIndex - myIndex).toFixed(3);
	  						$scope.results = "You won by " + diff_time + "!"
	  					} else {
	  						$scope.results = "It's a tie!";
	  					}
	  				// If no competitor time, show time to beat for competitor
	  				} else if ($scope.selectedCompClass) {
	  					var time = (myIndex / $scope.selectedCompClass).toFixed(3);
	  					$scope.results = "Your competitor will need better than "
	  						+ time + " to win."
	  				}
	  			// If competitor time only is available, show time to beat for user
	  			} else if ($scope.compTime) {
	  				var compIndex = $scope.selectedCompClass * $scope.compTime
	  				var time = (compIndex / $scope.selectedClass).toFixed(3);
	  				$scope.results = "You will need better than " + time +" to win."
	  			} else {
	  				return null;
	  			}
	  		}
	  	);

	    $scope.categories = {
	        'Street': {
	            'SS': 0.835,
	            'AS': 0.833,
	            "BS": 0.826,
				"CS": 0.819, 
				"DS": 0.811,
				"ES": 0.807,
				"FS": 0.814,
				"GS": 0.806, 
				"HS": 0.798, 
				"HCS": 0.817,
				"SSR": 0.860
	        },
	        'Street Touring': {
	            "STF": 0.809,
				"STS": 0.832,
				"STX": 0.836,
				"STR": 0.841,
				"STU": 0.845,
				"STP": 0.837
	        },
	        'Street Prepared': {
	        	"SSP": 0.872, 
				"ASP": 0.865, 
				"BSP": 0.863, 
				"CSP": 0.867, 
				"DSP": 0.855,
				"ESP": 0.852,
				"FSP": 0.840
	        },
	        "CAM Options": {
				"CAM-C": 0.830,
				"CAM-T": 0.834,
				"CAM-S": 0.848
			},
			"Prepared Options": {
				"XP": 0.907,
				"BP": 0.883,
				"CP": 0.864,
				"DP": 0.879,
				"EP": 0.871,
				"FP": 0.880,
				"HCR": 0.838
			},
			"CAM Options": {
				"CAM-C": 0.830,
				"CAM-T": 0.834,
				"CAM-S": 0.848
			},
			"Prepared Options": {
				"XP": 0.907,
				"BP": 0.883,
				"CP": 0.864,
				"DP": 0.879,
				"EP": 0.871,
				"FP": 0.880,
				"HCR": 0.838
			},
			"Street Mod Options": {
				"SMF": 0.861,
				"SM": 0.870,
				"SSM": 0.882
			},

			"Mod Options": {
				"AM": 1,
				"BM": 0.966,
				"CM": 0.916,
				"DM": 0.919,
				"EM": 0.920,
				"FM": 0.926,
				"FSAE": 0.982,
				"KM": 0.954
			},
        	"Junior Options": {
        		"JA": 0.878,
        		"JB": 0.842,
        		"JC": 0.734
        	}
	    };
	}]);

	// app.controller('ProSoloCtrl', ['$routeParams', '$scope', '$log', function($routeParams, $scope, $log) {
	//   		$scope.$log = $log;
	//   		$scope.myTime = "";
	//   		$scope.viewComp = false;
	//   		$scope.changeViewComp=function(){
	//   			if ($scope.viewComp == false) {
	//   				$scope.viewComp = true;
	//   			} else {
	//   				$scope.clearCompVals();
	//   				$scope.viewComp = false;
	//   			}
	//   		}
	//   		$scope.clearVals = function(){
	//   			$scope.selectedCat="";
	//   			$scope.clearSubVals();
	//   		}
	//   		$scope.clearSubVals = function(){
	//   			$scope.selectedClass="";
	//   			$scope.myTime="";	
	//   		}

	//   		$scope.clearCompVals = function(){
	//   			$scope.selectedCompCat="";
	//   			$scope.clearCompSubVals();
	//   		}
	//   		$scope.clearCompSubVals = function(){
	//   			$scope.selectedCompClass="";
	//   			$scope.compTime="";
	//   		}
	//   		$scope.$watchGroup(['selectedClass', 'myTime', 'selectedCompClass', 'compTime'], 
	//   			function(newVal, oldVal){
	//   				// If user time is available (we can assume we have the class)
	//   				if ($scope.myTime) {
	//   					var myIndex = $scope.selectedClass * $scope.myTime;
	//   					// If competitor time is available, show full results
	//   					if ($scope.compTime) {
	// 	  					var compIndex = $scope.selectedCompClass * $scope.compTime
	// 	  					if (myIndex > compIndex) {
	// 	  						diff_time = (myIndex - compIndex).toFixed(3);
	// 	  						$scope.results = "Sorry, you lost by " + diff_time + "."
	// 	  					} else if (compIndex > myIndex) {
	// 	   						diff_time = (compIndex - myIndex).toFixed(3);
	// 	  						$scope.results = "You won by " + diff_time + "!"
	// 	  					} else {
	// 	  						$scope.results = "It's a tie!";
	// 	  					}
	// 	  				// If no competitor time, show time to beat for competitor
	// 	  				} else if ($scope.selectedCompClass) {
	// 	  					var time = (myIndex / $scope.selectedCompClass).toFixed(3);
	// 	  					$scope.results = "Your competitor will need better than "
	// 	  						+ time + " to win."
	// 	  				}
	// 	  			// If competitor time only is available, show time to beat for user
	// 	  			} else if ($scope.compTime) {
	// 	  				var compIndex = $scope.selectedCompClass * $scope.compTime
	// 	  				var time = (compIndex / $scope.selectedClass).toFixed(3);
	// 	  				$scope.results = "You will need better than " + time +" to win."
	// 	  			} else {
	// 	  				return null;
	// 	  			}
	// 	  		}
	// 	  	);

	// 	    $scope.categories = {
	// 	        'Street': {
	// 	            'SS': 0.835,
	// 	            'AS': 0.833,
	// 	            "BS": 0.826,
	// 				"CS": 0.819, 
	// 				"DS": 0.811,
	// 				"ES": 0.807,
	// 				"FS": 0.814,
	// 				"GS": 0.806, 
	// 				"HS": 0.798, 
	// 				"HCS": 0.817,
	// 				"SSR": 0.860
	// 	        },
	// 	        'Street Touring': {
	// 	            "STF": 0.809,
	// 				"STS": 0.832,
	// 				"STX": 0.836,
	// 				"STR": 0.841,
	// 				"STU": 0.845,
	// 				"STP": 0.837
	// 	        },
	// 	        'Street Prepared': {
	// 	        	"SSP": 0.872, 
	// 				"ASP": 0.865, 
	// 				"BSP": 0.863, 
	// 				"CSP": 0.867, 
	// 				"DSP": 0.855,
	// 				"ESP": 0.852,
	// 				"FSP": 0.840
	// 	        },
	// 	        "CAM Options": {
	// 				"CAM-C": 0.830,
	// 				"CAM-T": 0.834,
	// 				"CAM-S": 0.848
	// 			},
	// 			"Prepared Options": {
	// 				"XP": 0.907,
	// 				"BP": 0.883,
	// 				"CP": 0.864,
	// 				"DP": 0.879,
	// 				"EP": 0.871,
	// 				"FP": 0.880,
	// 				"HCR": 0.838
	// 			},
	// 			"CAM Options": {
	// 				"CAM-C": 0.830,
	// 				"CAM-T": 0.834,
	// 				"CAM-S": 0.848
	// 			},
	// 			"Prepared Options": {
	// 				"XP": 0.907,
	// 				"BP": 0.883,
	// 				"CP": 0.864,
	// 				"DP": 0.879,
	// 				"EP": 0.871,
	// 				"FP": 0.880,
	// 				"HCR": 0.838
	// 			},
	// 			"Street Mod Options": {
	// 				"SMF": 0.861,
	// 				"SM": 0.870,
	// 				"SSM": 0.882
	// 			},

	// 			"Mod Options": {
	// 				"AM": 1,
	// 				"BM": 0.966,
	// 				"CM": 0.916,
	// 				"DM": 0.919,
	// 				"EM": 0.920,
	// 				"FM": 0.926,
	// 				"FSAE": 0.982,
	// 				"KM": 0.954
	// 			},
	//         	"Junior Options": {
	//         		"JA": 0.878,
	//         		"JB": 0.842,
	//         		"JC": 0.734
	//         	}
	// 	    };
	// 	}]);