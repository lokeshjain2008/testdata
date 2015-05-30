// (function(){

  'use strict';
  angular
  .module('shopsMela')
  .controller('aboutCtrl', ['$firebaseObject', '$scope', function($firebaseObject, $scope){

    var vm = this;
      var ref = new Firebase("https://shopsmela.firebaseio.com/");

      vm.data = $firebaseObject(ref);

      var syncObject = vm.data;

      vm.value = {
        message : "hey vm is message"
      };
      syncObject.$bindTo($scope, 'vm.value.message' );

      console.log($scope.value);

      $scope.$watch('value.message',function(value){
        console.log("yes",value);
      })

  }]);

// }());




