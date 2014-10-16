'use strict';

var sjc = require('strip-json-comments');
var glob = require('glob');
var fs = require('fs');
var schema = JSON.parse(sjc(fs.readFileSync('./schema-form.json').toString()));
var tv4 = require('tv4');

var g = glob('fixtures/*.json');
//var debug = process.env.DEBUG;
g.on('match', function(file) {

  console.log('require:', file);
  var json = JSON.parse(sjc(fs.readFileSync('./' + file).toString()));
  console.log(Object.keys(json), Object.keys(schema));
  var res = tv4.validate(json, schema);

  if(!res) {
	  
		//console.log(JSON.parse(JSON.stringify(tv4.error)));
	  
    var idx = tv4.error.dataPath.split('').splice(1).join('');

    console.log(file + ':', tv4.error.message, {
      dataPath: tv4.error.dataPath,
      schemaPath: tv4.error.schemaPath
    }, json[idx]);
    
    process.exit();
  } else {
    console.log(file + ': OK');
  }

  tv4.reset();


});