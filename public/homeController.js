(function() {
  //CREATE A SEPERATE MODULE FOR EACH JS FILE
  angular.module('homeMODULE',[])
  //BELOW IS THE ACTUAL CONTROLLER
    .controller('homeCtrl', homeCtrl)
    //INJECT FACTORY INTO CONTROLLER
    homeCtrl.$inject = ['musicianFactory']
    //FUNCTION DECLARATION FOR HOME CONTROLLER
    function homeCtrl(musicianFactory){
      //CONTROLLER AS SYNTAX INSTEAD OF $SCOPE
      var hCtrl = this

      hCtrl.name = "home Controller"

      musicianFactory.all()
        .then(function(response){
          console.log("Data coming from our API all method:",response)
          hCtrl.musicians = response.data
        })
        .catch(function(error){
          console.log("you had a server side error:", error)
        })

      //SUBMIT METHOD FOR ANGULAR FORM
      hCtrl.submitMusician = function(plate){
        //MAKE THE API CALL FROM YOUR FACTORY OBJECT
        musicianFactory.create(plate)
          .then(function (response) {
            console.log("response from server create method",response)
          }, function(error){

          })
      }

      hCtrl.deleteMusician = function(deleteById){
        console.log(deleteById, "Hi from deleteMusician")
       musicianFactory.destroy(deleteById)
        .then(function (response) {
        console.log('response from server delete method ', response )
       }, function(error){

       })
      }
    }


}());
