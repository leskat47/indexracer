    var app = angular.module('racerApp', []);
  	app.controller('StaticCtrl', function($scope) {
  		$scope.viewComp = True;
  		$scope.changeViewComp=function(){
  			if $scope.viewComp ===False {
  				$scope.viewComp = True;
  			} else {
  				$scope.viewComp = False;
  			}
  		}
	    $scope.categories= {
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
	});