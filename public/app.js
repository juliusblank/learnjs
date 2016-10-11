// create a namespace for our app so it won't collide with global (e.g. browser) variables
'use strict';
var learnjs = {};

learnjs.showView = function(hash) {
  var problemView = $('<div class="problem-view">').text('Coming sometime soon...');
  $('.view-container').empty().append(problemView);
}
