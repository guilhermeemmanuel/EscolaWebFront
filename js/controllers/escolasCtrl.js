angular.module("escolaWeb").controller("escolasCtrl", function($scope) {
			$scope.escolas = [
				{nome: "UFCG", alunos: "100"},
				{nome: "UEPB", alunos: "23"},
				{nome: "UFPB", alunos: "40"}
			];
			$scope.addEscola = function (escola) {
				$scope.escolas.push(angular.copy(escola));
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
				$scope.escolas = escolas.filter(function(escola) {
					if(!escola.selecionado) {
						return escola;
					}
				});
				
			}
		
		});