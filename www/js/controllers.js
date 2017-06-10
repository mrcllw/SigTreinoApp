app.controller('buscaController', function($ionicPopup, $scope, $http, $state, $rootScope){

	$scope.buscarTreino = function(email){
    if(email == localStorage.getItem("email")){
      $rootScope.alunoTreino = JSON.parse(localStorage.getItem("alunoTreino"));
      $state.go('lista');
    } else {
      var url = 'https://sigtreino.herokuapp.com/aluno/treino/' + email.toLowerCase() + '/';
  		$http({method: 'GET', url: url}).then(function(response){
        localStorage.setItem("email", email);
        localStorage.setItem("alunoTreino", JSON.stringify(response.data));
  			$rootScope.alunoTreino = response.data;
  			$state.go('lista');
  		}, function(response){
        $ionicPopup.alert({
          title: 'E-mail incorreto ou não cadastrado.',
          template: 'Digite um email válido para ter acesso a sua ficha de treino.'
        });
  		});
    }
	};
});

app.controller('listaController', function($scope, $rootScope, $state){

  $scope.alunoTreino = $rootScope.alunoTreino;
  $scope.dias = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

  $scope.fichaTreino = [];

  for(var i = 0; i < $scope.dias.length; i++){
    $scope.fichaTreino[i] = {
      dia : $scope.dias[i],
      treino : [],
      show : false
    };

    console.log($scope.alunoTreino)
    for(var j = 0; j < $scope.alunoTreino.length; j++){
      for(var k = 0; k < $scope.alunoTreino[j].dias.length; k++){
        if($scope.fichaTreino[i].dia == $scope.alunoTreino[j].dias[k]){
          $scope.fichaTreino[i].treino.push($scope.alunoTreino[j].treino);
        };
      };
    };

  };

  	$scope.toggleGroup = function(fichaTreino) {
    	fichaTreino.show = !fichaTreino.show;
  	};

  	$scope.isGroupShown = function(fichaTreino) {
    	return fichaTreino.show;
  	};

    $scope.detalheTreino = function(treino){
      $rootScope.detalheTreino = treino;
      $state.go('detalhe-treino');
    };
});

app.controller('detalheTreinoController', function($state, $scope, $rootScope){
  $scope.detalheTreino = $rootScope.detalheTreino;

  $scope.detalheExercicio = function(detalheExercicio){
      $rootScope.detalheExercicio = detalheExercicio;
      $state.go('detalhe-exercicio');
    };
});

app.controller('detalheExercicioController', function($scope, $rootScope){
  $scope.detalheExercicio = $rootScope.detalheExercicio;
});