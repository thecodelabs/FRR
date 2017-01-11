'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('recipe_test service', function() {
  it('registered the recipe_tests service', () => {
    assert.ok(app.service('recipe_tests'));
  });
});
