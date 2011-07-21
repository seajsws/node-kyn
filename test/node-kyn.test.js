
/**
 * Module dependencies.
 */

var node-kyn = require('node-kyn')
  , should = require('should');

module.exports = {
  'test .version': function(){
    node-kyn.version.should.match(/^\d+\.\d+\.\d+$/);
  }
};