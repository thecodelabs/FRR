'use strict';

const path = require('path');
const NeDB = require('nedb');
const service = require('feathers-nedb');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const db = new NeDB({
    filename: path.join(app.get('nedb'), 'recipe_tests.db'),
    autoload: true
  });

  let options = {
    Model: db,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/recipe_tests', service(options));

  // Get our initialize service to that we can bind hooks
  const recipe_testService = app.service('/recipe_tests');

  // Set up our before hooks
  recipe_testService.before(hooks.before);

  // Set up our after hooks
  recipe_testService.after(hooks.after);
};
