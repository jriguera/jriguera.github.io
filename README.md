# [Personal Website](http://jose.riguera.es)

## Getting Started

If you're completely new to Jekyll, I recommend checking out the 
documentation at <http://jekyllrb.com> or there's a tutorial by 
[Smashing Magazine](http://www.smashingmagazine.com/2014/08/01/build-blog-jekyll-github-pages/).

### Installing Jekyll

If you don't have Jekyll already installed, you will need to go ahead and do 
that.

```
$ gem install jekyll
```

#### Verify your Jekyll version

It's important to also check your version of Jekyll
```
$ jekyll -v
# This should be jekyll 2.0.0 or later
```

### Fork, then clone

Fork the repo, and then clone it so you've got the code locally.

### Modify the _config.yml

The `_config.yml` located in the root of the Pixyll directory contains all 
of the configuration details for the Jekyll site.


### Jekyll Serve

Then, start the Jekyll Server. I always like to give the `--watch` option 
so it updates the generated HTML when I make changes.

```
$ jekyll serve --watch
```
Now you can navigate to `localhost:4000` in your browser to see the site.


### Using Github Pages

You can host your Jekyll site for free with Github Pages. 
[Click here](https://pages.github.com/) for more information.


#### A configuration tweak if you're using a gh-pages sub-folder

In addition to your github-username.github.io repo that maps to the root url, 
you can serve up sites by using a gh-pages branch for other repos so they are 
available at github-username.github.io/repo-name.

This will require you to modify the `_config.yml` like so:

```yml
# Site settings
baseurl: "/repo-name"
url: "http://github-username.github.io"
```

This will ensure that the the correct relative path is constructed for your 
assets and posts. Also, in order to run the project locally, you will need 
to specify the blank string for the baseurl: `$ jekyll serve --baseurl ''`.


### Enjoy

I hope you enjoy using this theme. If you encounter any issues, please feel 
free to let me know by creating an [issue](https://github.com/jriguera/jose.riguera.es).


## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request


## Thanks to the following:

* [Jekyll](http://jekyllrb.com)
* [Pixyll jekyll theme by John Otander](http://johnotander.com)
