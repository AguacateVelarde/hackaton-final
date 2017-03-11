angular.module('starter', [ 'ionic', 'starter.controllers', 'ionic-material', 'ionMdInput'])
.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
          StatusBar.styleDefault();
        }
         //screen.lockOrientation('portrait');
    });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.views.maxCache(0);
    $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.activity', {
        url: '/activity',
        views: {
            'menuContent': {
                templateUrl: 'templates/activity.html',
                controller: 'ActivityCtrl'
            },
            'fabContent': {
                template: '<button id="fab-activity" class="button button-fab button-fab-top-right expanded button-energized-900 flap"><i class="icon ion-paper-airplane"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-activity').classList.toggle('on');
                    }, 200);
                }
            }
        }
    })
    .state('app.registro', {
        url: '/registro',
        views: {
            'menuContent': {
                templateUrl: 'templates/register.html',
                controller: 'registroCtrl'
            },
            'fabContent': {
                template: ''
              }
            }
    })

    .state('app.colaboradores', {
        url: '/colaboradores',
        views: {
            'menuContent': {
                templateUrl: 'templates/colaboradores.html',
                controller: 'colaboradoresCtrl'
            },
            'fabContent': {
                template: '<button id="fab-friends" class="button button-fab button-fab-top-left expanded button-energized-900 spin"><i class="icon ion-chatbubbles"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-friends').classList.toggle('on');
                    }, 900);
                }
            }
        }
    })



    .state('app.login', {
        url: '/login',
        views: {
            'menuContent': {
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })
    .state('app.formEvent', {
      url: '/formEvent',
      views: {
          'menuContent': {
              templateUrl: 'templates/formEvent.html',
              controller: 'formCtrl'
          },
          'fabContent': {
              template: ''
          }
      }
    })
    .state('app.description', {
        url: '/description/:id',
        views: {
            'menuContent': {
                templateUrl: 'templates/description.html',
                controller: 'DescriptionCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })


    .state('app.perfil', {
        url: '/perfil',
        views: {
            'menuContent': {
                templateUrl: 'templates/profile.html',
                controller: 'PerfilCtrl'
            },
            'fabContent': {
                template: '<a href="#/app/formEvent"<button id="fab-profile" ui-sref="app.formEvent"  class="button button-fab button-fab-bottom-right button-energized-900"><i class="icon ion-plus"></i></button></a>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-profile').classList.toggle('on');
                    }, 800);
                }
            }
        }
    })
    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/login');
});
