Package.describe({
  name: 'mira-validator',
  summary: "Validator for client and server including Chris O'Hara's validator",
  version: '0.2.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3.1');

  api.addFiles([
    'lib/validator.js',
    'mira-validator.js'
  ], ['client', 'server']);

  api.export('Validator');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mira-validator');

  api.addFiles('mira-validator-tests.js');
});
