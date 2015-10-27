$(function() {
  var jsonsearch =  baseurl + blog_cat + '/search.json';
  var containername = '#post-results';
  var templatename = 'template-search';
  var fail = 'Not found anything regarding the search.';

  var jqxhr = $.getJSON(jsonsearch, function(data) {
    var cat = Jekyll.getParam('cat');
    var tag = Jekyll.getParam('tag');
    var query = Jekyll.getParam('q');
    var type = "";
    var posts;

    if (query) {
      type = "<q><i>" + query + "</i></q>";
    }
    if (cat && (cat != 'all')) {
      posts = Jekyll.filterPostsByPropertyValue(data, 'categories', cat);
      type = type + " on <i>" + cat + "</i> category";      
    } else if (tag) {
      posts = Jekyll.filterPostsByPropertyValue(data, 'tags', tag);
      type = type + " with tag <i>" + tag + "</i>";
    } else {
      posts = data;
    }
    
    if (query) {
      var result = [];
      var index = lunr(function () {
        this.field('title', 20)
        this.field('summary', 10)
        this.field('content')
        this.ref('url')
      });
      for (var i in posts) {
        index.add(posts[i]);
      }
      var out = index.search(query);      
      for (var i in out) {
         // search the posts by url
         Array.prototype.push.apply(result, Jekyll.filterPostsByPropertyValue(posts, 'url', out[i].ref));
      }
      posts = result;
    }    
    Jekyll.layoutResultsPage(containername, templatename, '.search-desc span', type, posts, fail, blog_cat, baseurl);
  });
  jqxhr.fail(function() {
    console.log("fail loading json");
  });

// $.each(map, function(type, value) {
//  if (value !== null) {
//      $.getJSON(jsonsearch, function(data) {
//          posts = Jekyll.filterPostsByPropertyValue(data, type, value);
//          Jekyll.layoutResultsPage(containername, templatename, type, value, posts);
//      });
//  }
// });
});
