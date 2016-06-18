$(function() {
  var actionurl = $("#jssearch").attr('action');

  $('#search .search-panel .dropdown-menu').find('a').click(function(e) {
	e.preventDefault();
	var param = $(this).attr("href").replace("#","");
	var concept = $(this).text();
	$('#search .search-panel span#search_concept').text(concept);
	$('#search #search_cat').val(param);
  });

  $('#search .search-button button').click(function(e) {
    e.preventDefault();
    //get the action-url of the form
    var data = {};
    var url = actionurl + '?';
    data['cat'] = $('#search_cat').val();
    data['q'] = $('#search_q').val();

    var count = 0;
    for (var key in data) {
        count++;
    }
    for (var key in data) {
        url = url + key + '=' + encodeURIComponent(data[key]);
        count--;
        if (count != 0) {
            url = url + '&';
        }
    }
    window.location.href = url;
  });
});
