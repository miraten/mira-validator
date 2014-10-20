/**
 * Default values for settings
 *
 * @type {{}}
 * @private
 */
var _defaultSettings = {};

/**
 * Validation object
 *
 * @param options
 * @constructor
 */
Validator = function(options) {
  var _settings = _.defaults(_defaultSettings, options);
  var _errors = new Array();

  // Chris O'hara's Library API
  this.api = validator;

  // get settings
  this.settings = function() {
    return _settings;
  };

  // get errors
  this.errors = function() {
    return _errors;
  };

  // set error
  this.setError = function(attribute, message) {

    var _findError = function(attribute) {
      for (var i = 0; i < _errors.length; i++) {
        if (_errors[i].attribute === attribute)
          return _errors[i];
      }
      return null;
    };

    var error = _findError(attribute);
    if (! error) {
      error = {
        attribute: attribute,
        messages: [ message ]
      };

      _errors.push(error);
    } else {
      error.messages.push(message);
    }
  };

};
