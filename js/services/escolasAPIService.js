angular.module("escolaWeb").factory("escolasAPI", function() {
	var _getEscolas = function() {
			
		if(localStorage.escolas == undefined) {
			localStorage.escolas = JSON.stringify([]);
			console.log("support2");
		}
		else {
			escolas = JSON.parse(localStorage.getItem('escolas'));
			console.log(escolas);
		}
		return 	escolas;
	}
	
	var _addEscola = function(escola) {
		escolas = JSON.parse(localStorage.getItem('escolas'));
		escolas.push(angular.copy(escola));
		localStorage.setItem("escolas", JSON.stringify(escolas));
		return escolas;
	}
	
	var _deleteEsolas = function(escolasDel) {
		escolas = JSON.parse(localStorage.getItem('escolas'));
		escolas = escolasDel.filter(function(escola) {
			if(!escola.selecionado) {
				return escola;
			}
		});
		localStorage.setItem("escolas", JSON.stringify(escolas));
		return escolas;
	}
	
	return {
		getEscolas: _getEscolas,
		addEscola: _addEscola,
		deleteEscolas: _deleteEsolas
	}
});