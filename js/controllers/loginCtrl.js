angular.module("escolaWeb").controller("loginCtrl", function($scope) {
			$scope.users = [
				{login: "gesn", password: "123456"}
			];
			$scope.doLogin = function(user) {
				var success;
				if(typeof user != 'undefined') {
					console.log(user.login);
					if(typeof user.login == 'undefined' || user.login == '' 
						|| typeof user.password == 'undefined' || user.password == '') {
						$scope.message = "Login and Password are required";
						return;
					}
					for (i = 0; i < $scope.users.length; i++) {
						if($scope.users[i].login == user.login) {
							if($scope.users[i].password == user.password) {
								success = true;
								$scope.message = "Welcome";
								break;
							}
						}
					}
					if(!success) {
						$scope.message = "Login or Password incorrect";
					}
				}
				else {
					$scope.message = "Login and Password are required";
				}
			};
		});