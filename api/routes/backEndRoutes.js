'use strict';

module.exports = function(backEndCore){
  var backEndDrivers=require('../drivers/backEndDrivers');

  //backEndROUTES
  backEndCore.route('/models')
    .get(backEndDrivers.list_all_models)
    .post(backEndDrivers.create_model);

  backEndCore.route('/models/:modelId')
     .get(backEndDrivers.read_model)
     .put(backEndDrivers.update_model)
     .delete(backEndDrivers.delete_model);  


};
