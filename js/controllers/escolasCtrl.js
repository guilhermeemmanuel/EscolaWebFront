angular.module("escolaWeb").controller("escolasCtrl", function($scope, escolasAPI) {
			if(typeof(Storage) !== "undefined") {
				console.log("support");
				$scope.escolas = escolasAPI.getEscolas();
			} else {
				console.log("support n");
			}
			$scope.addEscola = function (escola) {
				$scope.escolas = escolasAPI.addEscola(escola);
				$scope.eraseEscolaForm();
				$scope.closeAddEscolaModal();
			};
			$scope.eraseEscolaForm = function() {
				delete $scope.turma;
				$scope.TurmaForm.$setPristine();
			};
			$scope.closeAddEscolaModal = function() {
				$('#addEscolaModal').modal('hide');
			};
			
			$scope.apagarEscolas = function(escolas) {
				$scope.escolas = escolasAPI.deleteEscolas(escolas);
			}
		
		});