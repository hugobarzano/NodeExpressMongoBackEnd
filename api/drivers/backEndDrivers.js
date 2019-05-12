'use strict';


var mongoose = require('mongoose');
var Models = mongoose.model('Models');

exports.list_all_models = function(req, res) {
  Models.find({}, function(err, model_find) {
    if (err)
      res.send(err);
    res.json(model_find);
  });
};

exports.create_model = function(req, res) {
  console.log("CREA");
  var new_model = new Models(req.body);
  console.log("REQUEST BODY::"+req.toString());
  console.log(new_model)
  new_model.save(function(err, model_save) {
    if (err)
      res.send(err);
    res.json(model_save);
  });
};


exports.read_model = function(req, res) {
  Models.findById(req.params.modelId, function(err, model_read) {
    if (err)
      res.send(err);
    res.json(model_read);
  });
};

exports.update_model = function(req, res) {
  Models.findOneAndUpdate({_id: req.params.modelId}, req.body, {new: true}, function(err, model_updated) {
    if (err)
      res.send(err);
    res.json(model_updated);
  });
};


exports.delete_model = function(req, res) {
  Models.remove({
    _id: req.params.modelId
  }, function(err, model_deleted) {
    if (err)
      res.send(err);
    res.json({ message: 'Model successfully deleted' });
  });
};
