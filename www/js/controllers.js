'use strict';

angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicPopover, $timeout) {
    $scope.loginData = {};
    $scope.isExpanded = false;
    $scope.hasHeaderFabLeft = false;
    $scope.hasHeaderFabRight = false;

    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
        navIcons.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }
    $scope.hideNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'none';
    };
    $scope.showNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'block';
    };
    $scope.noHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }}
    };
    $scope.setExpanded = function(bool) {
        $scope.isExpanded = bool;
    };

    $scope.setHeaderFab = function(location) {
        var hasHeaderFabLeft = false;
        var hasHeaderFabRight = false;
        switch (location) {
            case 'left':
                hasHeaderFabLeft = true;
                break;
            case 'right':
                hasHeaderFabRight = true;
                break;
        }

        $scope.hasHeaderFabLeft = hasHeaderFabLeft;
        $scope.hasHeaderFabRight = hasHeaderFabRight;
    };

    $scope.hasHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (!content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }}
    };

    $scope.hideHeader = function() {
        $scope.hideNavBar();
        $scope.noHeader();
    };

    $scope.showHeader = function() {
        $scope.showNavBar();
        $scope.hasHeader();
    };

    $scope.clearFabs = function() {
        var fabs = document.getElementsByClassName('button-fab');
        if (fabs.length && fabs.length > 1) {
            fabs[0].remove();
        }
    };
})

.controller('LoginCtrl', function($scope, $state, $http, $timeout, $stateParams, ionicMaterialInk) {
    $scope.$parent.clearFabs();
    $timeout(function() {
        $scope.$parent.hideHeader();
    }, 0);
    ionicMaterialInk.displayEffect();
    $scope.data = {};
    $scope.response = false;

  $scope.submit = function(){
      var linkLogin = 'http://198.199.101.234/crudavocado/user/login.php'
      $http.post(linkLogin, {name : $scope.data.username, password : $scope.data.password}).then(function (res){
          $scope.response = res.data;
      });
  };
})

.controller('colaboradoresCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.$parent.setHeaderFab('left');

    $scope.seguidores = [{
      "name" : "Federico López",
      "img" : "http://images.iimg.in/c/569f4771c45d324bda8b4660-4-501-0-1453279096/google/user-icon-png-pnglogocom.img",
      "description" : "Hey! Soy yo!"

    },{
      "name" : "Federico López",
      "img" : "http://images.iimg.in/c/569f4771c45d324bda8b4660-4-501-0-1453279096/google/user-icon-png-pnglogocom.img",
      "description" : "Hey! Soy yo!"
    }]


    $timeout(function() {
        $scope.isExpanded = true;
        $scope.$parent.setExpanded(true);
    }, 300);

    ionicMaterialMotion.fadeSlideInRight();
    ionicMaterialInk.displayEffect();
})

.controller('PerfilCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {

    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);
    $scope.users = [{
      "name" : "Federico López",
      "image" : "http://images.iimg.in/c/569f4771c45d324bda8b4660-4-501-0-1453279096/google/user-icon-png-pnglogocom.img",
      "starImage" : "/img/stars.jpg",
      "starNumber" : 5
    }];
    $scope.follows = [{
      "name" : "Federico López",
      "img" : "http://images.iimg.in/c/569f4771c45d324bda8b4660-4-501-0-1453279096/google/user-icon-png-pnglogocom.img",
      "description" : "Hey! Soy yo!"

    },{
      "name" : "Federico López",
      "img" : "http://images.iimg.in/c/569f4771c45d324bda8b4660-4-501-0-1453279096/google/user-icon-png-pnglogocom.img",
      "description" : "Hey! Soy yo!"

    }]
    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

    ionicMaterialInk.displayEffect();
})
.controller('formCtrl', function(){


})
.controller('DescriptionCtrl', ['$scope', '$http','$state', function($scope, $http, $state){
  $scope.testDatabase = [{
    "name": "Feria del pehito",
    "date" : "25 de Noviembre",
    "image" : "http://images.iimg.in/c/569f4771c45d324bda8b4660-4-501-0-1453279096/google/user-icon-png-pnglogocom.img",
    "description" : "12334567890Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat totam rerum odit sequi soluta atque ex, possimus, error quaerat. Rem, ipsum, nihil! Architecto cupiditate aperiam officiis deserunt, ipsum dicta amet."}, {"name": "Feria del pehito", "date" : "25 de Noviembre", "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat totam rerum odit sequi soluta atque ex, possimus, error quaerat. Rem, ipsum, nihil! Architecto cupiditate aperiam officiis deserunt, ipsum dicta amet.",
    "id" : 1
  },{
    "name": "Feria del pehito",
    "date" : "25 de Noviembre",
    "image" : "http://images.iimg.in/c/569f4771c45d324bda8b4660-4-501-0-1453279096/google/user-icon-png-pnglogocom.img",
    "description" : " ipsum dolor sit amet, consectetur adipisicing elit. Repellat totam rerum odit sequi soluta atque ex, possimus, error quaerat. Rem, ipsum, nihil! Architecto cupiditate aperiam officiis deserunt, ipsum dicta amet."}, {"name": "Feria del pehito", "date" : "25 de Noviembre", "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat totam rerum odit sequi soluta atque ex, possimus, error quaerat. Rem, ipsum, nihil! Architecto cupiditate aperiam officiis deserunt, ipsum dicta amet.",
    "id" : 2
  }];
  $scope.var = $state.params.id;
}])


.controller('ActivityCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk ) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab('right');
    $scope.map = {};


    $scope.testDatabase = [{
      "name": "Feria del pehito",
      "date" : "25 de Noviembre",
      "image" : "http://images.iimg.in/c/569f4771c45d324bda8b4660-4-501-0-1453279096/google/user-icon-png-pnglogocom.img",
      "description" : " ipsum dolor sit amet, consectetur adipisicing elit. Repellat totam rerum odit sequi soluta atque ex, possimus, error quaerat. Rem, ipsum, nihil! Architecto cupiditate aperiam officiis deserunt, ipsum dicta amet."}, {"name": "Feria del pehito", "date" : "25 de Noviembre", "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat totam rerum odit sequi soluta atque ex, possimus, error quaerat. Rem, ipsum, nihil! Architecto cupiditate aperiam officiis deserunt, ipsum dicta amet.",
      "id" : 1
    },{
      "name": "Feria del pehito",
      "date" : "25 de Noviembre",
      "image" : "http://images.iimg.in/c/569f4771c45d324bda8b4660-4-501-0-1453279096/google/user-icon-png-pnglogocom.img",
      "description" : "12334567890Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat totam rerum odit sequi soluta atque ex, possimus, error quaerat. Rem, ipsum, nihil! Architecto cupiditate aperiam officiis deserunt, ipsum dicta amet."}, {"name": "Feria del pehito", "date" : "25 de Noviembre", "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat totam rerum odit sequi soluta atque ex, possimus, error quaerat. Rem, ipsum, nihil! Architecto cupiditate aperiam officiis deserunt, ipsum dicta amet.",
      "id" : 2
    }];

    $timeout(function() {
        ionicMaterialMotion.fadeSlideIn({
            selector: '.animate-fade-slide-in .item'
        });
    }, 200);
    ionicMaterialInk.displayEffect();
})
.controller('registroCtrl', function(){


});
