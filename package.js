Package.describe({
  name: 'alonoslav:meteor-react-date-time-picker',
  version: '0.1.1',
  summary: 'React DateTimePickerStandard component for MeteorJS',
  git: 'https://github.com/alonoslav/meteor-react-date-time-picker',
  documentation: 'README.md',
});

// eslint-disable-next-line prefer-arrow-callback, func-names
Package.onUse(function (api) {
  api.versionsFrom('1.4');

  api.use([
    'ecmascript',
    'less',
  ], 'client');

  api.mainModule('index.js', 'client');
});

Npm.depends({
  jquery: '3.1.1',
});
