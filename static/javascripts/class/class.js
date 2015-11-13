angular.module('app')
.factory('AttendenceRecord', ['$http', 'Snackbar', function($http, Snackbar){
	
	
		return { 
				add_points: function(student_id, attendence, points){

					$http.post('/api/v1/attendence/', {
		        student_id: student_id
		      }).then(function(data){
		      	$http.post('/api/v1/points/', {
		      		student_id: student_id, points: points
		      	}).then(function(data){
		      		window.location.href= '/';
		      		Snackbar.show('Student Data Recorded');
		      	}, function(error){
		      		Snackbar.show('Student Data not Recorded');

		      	});

		      }, function(error){
		      		Snackbar.show('Error');
		      });
		  }
	  }

	
	return '';
}])
.controller('AttendenceController', ['$state','$scope', 'AttendenceRecord' , function($state, $scope, AttendenceRecord) {
	console.log("Hello");

	$scope.add_attendence = function() {
		var total_points = 0;
		console.log($scope.vm.student_id, $scope.vm.attendence, $scope.helping, $scope.disrupting, $scope.homework);
		if ($scope.helping === true)
		{
			total_points = total_points + 5;
		}
		if ($scope.disrupting === true)
		{
			total_points = total_points - 2;
		}
		if ($scope.homework === true)
		{
			total_points = total_points + 3;
		}
		AttendenceRecord.add_points($scope.vm.student_id, $scope.vm.attendence, total_points);

	};


}]);
