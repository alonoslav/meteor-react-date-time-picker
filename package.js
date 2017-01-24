Package.describe({
  name: 'meteor-react-date-time-picker',
  version: '0.0.1',
  summary: 'React DateTimePicker component for MeteorJS',
  git: 'https://github.com/alonoslav/meteor-react-date-time-picker',
  documentation: 'README.md',
});

// eslint-disable-next-line prefer-arrow-callback, func-names
Package.onUse(function (api) {
  api.versionsFrom('1.4');

  api.use([
    'ecmascript',
  ]);

  api.mainModule('meteor-react-date-time-picker.js');
});