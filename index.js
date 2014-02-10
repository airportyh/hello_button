var Dialog = require('dialog');
var dom = require('dom');
var markup = require('./template.html');

function openDialog(){
  Dialog('Hello, world!')
    .closable()
    .modal()
    .show();
}

module.exports = function(){
  return dom(markup).on('click', openDialog);
}