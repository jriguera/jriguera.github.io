(function(window, document, undefined) {

  // Capitalises a string
  // Accepts:
  //   str: string
  // Returns:
  //   string
  var majusculeFirst = function(str) {
    return str.charAt(0).toUpperCase() + str.substring(1);
  };

  // Usage:
  //   var data = { 'first name': 'George', 'last name': 'Jetson', 'age': 110 };
  //   var querystring = EncodeQueryData(data); 
  var encodeQueryData = function (data) {
    var ret = [];
    for (var d in data)
      ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
    return ret.join("&");
  };

  // Replaces ERB-style tags with Liquid ones as we can't escape them in posts
  // Accepts:
  //   elements: jQuery elements in which to replace tags
  // Returns:
  //   undefined
  var replaceERBTags = function(elements) {
    elements.each(function() {
      // Only for text blocks at the moment as we'll strip highlighting otherwise
      var $this = $(this);
      var txt = $this.html();

      // Replace <%=  %>with {{ }}
      txt = txt.replace(new RegExp('&lt;%=(.+?)%&gt;', 'g'), '{{$1}}');
      // Replace <% %> with {% %}
      txt = txt.replace(new RegExp('&lt;%(.+?)%&gt;', 'g'), '{%$1%}');

      $this.html(txt);
    });
  };

  // Gets a map with all key and values from the URL
  // Returns:
  //   map { key: value }
  var urlParams = function() {
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query))
       urlParams[decode(match[1])] = decode(match[2]);
  };


  // Retrieves the value of a GET parameter with a given key
  // Accepts:
  //   param: string
  // Returns:
  //   string or null
  var getParam = function(param) {
    var queryString = window.location.search.substring(1); //decodeURI(window.location.search);
    var queries = queryString.split('&');
    for (var i in queries) {
      var pair = queries[i].split('=');
      if (pair[0] === param) {
        // Decode the parameter value, replacing %20 with a space etc.
        return decodeURIComponent(pair[1]);
      }
    }
    return null;
  };
  
  // Filters posts with the condition `post['property'] == value`
  // Accepts:
  //   posts - array of post objects and a string
  //   property - string of post object property to compare
  //   value - filter value of property
  // Returns:
  //   array of post objects
  var filterPostsByPropertyValue = function(posts, property, value) {
    var filteredPosts = [];
    for (var i in posts) {
      var post = posts[i];
      var prop = post[property];

      // The property could be a string, such as a post's category,
      // or an array, such as a post's tags
      if (prop.constructor === String) {
        if (prop.toLowerCase() === value.toLowerCase()) {
          filteredPosts.push(post);
        }
      } else if (prop.constructor === Array) {
        for (var j in prop) {
          if (prop[j].toLowerCase() === value.toLowerCase()) {
            filteredPosts.push(post);
          }
        }
      }
    }
    return filteredPosts;
  };

  // Formats search results and appends them to the DOM
  // Accepts:
  //   property: string of object type we're displaying
  //   value: string of name of object we're displaying
  //   posts: array of post objects
  // Returns:
  //   undefined
  var layoutResultsPage = function(containername, templatename, propertyid, property, posts, fail, blog, baseurl) {
    var $container = $(containername);
    var data = {};

    if ($container.length === 0) return;
    $(propertyid).append(property);
    if (posts.length === 0) {
       $container.html('<p>' + fail + '</p>');
    } else {
       data['posts'] = posts;
       data['blog'] = blog;
       data['baseurl'] = baseurl;
       $container.html(tmpl(templatename, data));
    }
  }


  // Get the bootstrap environment
  var findBootstrapEnvironment = function () {
    var envs = ['xs', 'sm', 'md', 'lg'];

    $el = $('<div>');
    $el.appendTo($('body'));
    for (var i = envs.length - 1; i >= 0; i--) {
        var env = envs[i];
        $el.addClass('hidden-'+env);
        if ($el.is(':hidden')) {
            $el.remove();
            return env;
        }
    };
  }

  // Define the app object and expose it in the global scope
  window.Jekyll = {
    majusculeFirst: majusculeFirst,
    urlParams: urlParams,
    getParam: getParam,
    filterPostsByPropertyValue: filterPostsByPropertyValue,
    layoutResultsPage: layoutResultsPage,
    encodeQueryData: encodeQueryData,
    replaceERBTags: replaceERBTags,
    findBootstrapEnvironment: findBootstrapEnvironment
  };
})(window, window.document);


$(function() {

//  var responsiveHeader = function() {
//       var size = Jekyll.findBootstrapEnvironment();     
//       if (size == 'xs') {
//         if ($('#header-button-mobile').hasClass('hidden')) {
//            $('#header-tabs-items').removeClass('nav');
//            $('#header-tabs-items').removeClass('nav-tabs');
//            $('#header-button-mobile').removeClass('hidden');
//            $('#header-tabs-items').addClass('dropdown-menu');
//         }    
//       } else {
//         if (! $('#header-button-mobile').hasClass('hidden')) {
//            $('#header-button-mobile').addClass('hidden');
//            $('#header-tabs-items').addClass('nav');
//            $('#header-tabs-items').addClass('nav-tabs');
//            $('#header-tabs-items').removeClass('dropdown-menu');
//         }
//       }    
//  };
//  responsiveHeader();
//  $(window).bind('resize', responsiveHeader);

});

