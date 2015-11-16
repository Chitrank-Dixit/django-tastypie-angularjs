angular.module('app')
.factory('AttendenceRecord', ['$http', 'Snackbar', '$q' , '$window',function($http, Snackbar, $q, $window){
	
	
		return { 
			add_points: function(studentdata, attendence, points){
					$http.post('/api/v1/attendence/', {
			        	student: { "id": studentdata.id, "age":studentdata.age,"registered_type":studentdata.registered_type, "overall_score": studentdata.overall_score ,"resource_uri":studentdata.resource_uri ,user: studentdata.user}
			      	}).then(function(data){
			      	$http.post('/api/v1/points/', {
			      		student:{ "id": studentdata.id, "age":studentdata.age,"registered_type":studentdata.registered_type, "overall_score": studentdata.overall_score ,"resource_uri":studentdata.resource_uri ,user: studentdata.user } , points: points
			      	}).then(function(data){
			      		//window.location.href= '/';
			      		Snackbar.show('Student Data Recorded');
			      	}, function(error){
			      		Snackbar.show('Student Data not Recorded');

			      	});

			      	}, function(error){
			      		Snackbar.show('Error');
		      	});
		  	},
		  	select_student: function() {
			  	$http.get('/api/v1/student/?format=json').then(function(response){
			  		console.log("Data received", response.data);
			  		if (typeof response.data === 'object') {
			  			$window.localStorage.setItem('student_data', JSON.stringify(response.data));
		                return response.data;

		              } else { return "Error"; }
		            }, function(error) {
		              return null;
			  		return data;

			  	}, function(error){
			  		console.log("Data not received");
			  		return null;
			  	});
		  	},
	  };
}])
.controller('AttendenceController', ['$state','$scope', '$window','AttendenceRecord' , function($state, $scope, $window, AttendenceRecord) {
	console.log("Hello");

	AttendenceRecord.select_student();

	$scope.student_data = JSON.parse($window.localStorage.getItem('student_data'));

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
		var current_student;
		for (var i=0;i<$scope.student_data.objects.length;i++)
		{
			console.log($scope.vm.student_id, $scope.student_data.objects[i]);
			if (parseInt($scope.vm.student_id) === $scope.student_data.objects[i].id)
			{
				console.log($scope.student_data.objects[i]);
				var current_student = $scope.student_data.objects[i];
			}
		}
		console.log("Here",current_student);
		AttendenceRecord.add_points(current_student, $scope.vm.attendence, total_points);

	};

	
		



		// .then(function sucessCallback(data){
		// 	if(data)
		// 	{
		// 		console.log(data);
		// 		$scope.student_data = data;
		// 	}
		// 	else
		// 	{
		// 		console.log("Error");
		// 	}

		// }, function errorCallback(error){
		// 	console.log(error);
		// });
	
}]);
