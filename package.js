Package.describe({
  name: 'aldeed:simple-schema',
  summary: 'Wrapper package to Make SimpleSchema 3+ work with Meteor',
  version: '3.0.0',
  git: 'https://github.com/aldeed/meteor-simple-schema.git'
})

Package.onUse(function (api) {
  api.use('ecmascript')
  api.mainModule('simple-schema.js')
})
