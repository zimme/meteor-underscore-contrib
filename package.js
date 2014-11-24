Package.describe({
  git: 'https://github.com/zimme/meteor-underscore-contrib.git',
  name: 'zimme:underscore-contrib',
  summary: 'The brass buckles on Underscore\'s utility belt',
  version: '0.3.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use('underscore');

  api.addFiles(['pre.js', 'underscore-contrib/dist/underscore-contrib.js']);
});
