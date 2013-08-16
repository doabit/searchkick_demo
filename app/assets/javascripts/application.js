// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require hogan
//= require typeahead
//= require_self
function ready(){
  // $("#complete").autocomplete({
  //   source: function(request, resoponse){
  //     $.ajax({
  //       url: '/products/autocomplete.json',
  //       dataType: 'jsonp',
  //       data: { term: request.term },
  //       success: function(data){
  //         var rows = [];
  //         for(var i = 0; i < data.length; i++){
  //           rows.push(data[i].name);
  //         }
  //         resoponse(rows);
  //       }
  //     });
  //   }
  // });
$('#complete').typeahead({
     name: 'twitter-oss',
     remote: '/products/autocomplete.json?term=%QUERY',
     valueKey: 'name',
     template: '<p><strong>{{name}}</strong> – {{price}}</p>',
     engine: Hogan,
     limit: 10
  });
}
$(document).ready(ready)
$(document).on('page:load', ready)
