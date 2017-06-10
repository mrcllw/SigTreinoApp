app.config(function($stateProvider, $urlRouterProvider){

	$stateProvider
	.state('busca', {
    url: '/busca',
    templateUrl: 'templates/busca.html',
    controller: 'buscaController'
  })
	.state('lista', {
    url: '/lista',
    templateUrl: 'templates/lista.html',
    controller: 'listaController'
  })
  .state('detalhe-treino', {
    url: '/detalhe-treino',
    templateUrl: 'templates/detalhe-treino.html',
    controller: 'detalheTreinoController'
  })
  .state('detalhe-exercicio', {
    url: '/detalhe-exercicio',
    templateUrl: 'templates/detalhe-exercicio.html',
    controller: 'detalheExercicioController'
  })

	$urlRouterProvider.otherwise('/busca')

});