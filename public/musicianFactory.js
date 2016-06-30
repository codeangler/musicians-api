(function() {
  //CREATE A SEPERATE MODULE FOR EACH JS FILE
  angular.module('musicianMODULE', [])
  //BELOW IS THE ACTUAL FACTORY
    .factory('musicianFactory', musicianFactory)
    //FUNCTION DECLARATION FOR THE FACTORY
    function musicianFactory($http){
      var fFactory = {}
      //SEND A REQUEST TO OUR SERVER AND RETURN A PROMISE
      fFactory.create = function(musician){
        return $http.post('/api/v1/musicians', musician)
      }

      fFactory.all = function(){
        return $http.get('/api/v1/musicians')
      }

      fFactory.destroy = function(deleteId){
        return $http.delete('api/v1/musicians/' + deleteId)
      }

      return fFactory
    }

}());
