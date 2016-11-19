---
title:  "Tutorial—Building a Jekyll website using Cloud9"
tags: jekyll
---

## Setup

  1. Start with [Github (join)](https://github.com/join) -or- [Github (login)](https://github.com/login/).
  2. Create a blank repository and copy the `git clone path`
  3. Next, [Cloud9 (join)](https://c9.io/signup/) -or- [Cloud9 (login)](https://c9.io/login/).
  4. Connect [Cloud9 to Github](https://c9.io/account/services).
  5. Create New `blank` environment, and include the `git clone path` (from step 2).

## Install Jekyll


### Automatic Install

Automatically Install Jekyll using a shell script.  In the Cloud9 IDE, run the following command in the terminal:

```
wget -O - "https://gist.github.com/mdrmike/78e1bd801ba8120f3dca8aee5a50d4f3/raw/f8983606db6cdee6160ce2538fdc6ddf288475e4/setup-jekyll.sh" | bash
```

### Manual Install

In the Cloud9 IDE, run the following commands in the terminal:

```
gem install jekyll bundler
echo -e "source 'https://rubygems.org'\n\ngem 'github-pages', group: :jekyll_plugins" > Gemfile
bundle install
bundle exec jekyll new . --force
sed -i "s|gem \"jekyll\"|# gem \"jekyll\"|g" Gemfile
sed -i "s|# gem \"github-pages\"|gem \"github-pages\"|g" Gemfile
sed -i "s|url: \"http://example\.com\"|url: \"https://$C9_HOSTNAME\"|g" _config.yml
bundle install
echo -e "command to run Jekyll: \n\nbundle exec jekyll serve --host $IP --port $PORT --baseurl ''\n\n"

```


#### Explanation

The commands above do the following:

    1. Install dependencies, including (bundler)[https://bundler.io/], (Jekyll)[https://jekyllrb.com/], (Github Pages)[https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/]
    1. Configure local install for `github-pages`
    1. Install Jekyll scaffolding
    1. Modify `Gemfile` to remove jekyll version dependency: `gem "jekyll", "3.3.0"` :arrow_right: `# gem "jekyll", "3.3.0"`
    1. Modify `Gemfile` to add gem: github-pages: `# gem "github-pages", group: :jekyll_plugins` :arrow_right: `gem "github-pages", group: :jekyll_plugins`
    1. Modify `_config.yml` for Cloud9



## Test Jekyll Install

Run the Jekyll server to test the install is working.
Cloud9 will use standard needs to use non standard port and host IP address in order for you to view it... so use the options with Cloud9 environment variables as shown below.

```
bundle exec jekyll serve --port $PORT --host $IP --baseurl
```

## Setup GIT repository for your project

Step

```

# git init  #optional
# git remote add origin git@github.com:{your_github_username}/{your_github_repository} #optional
git add .
git commit -m "first commit"

```

## Push to Github

```
git push -u origin master
```

{{ site.collections }}


## Gobbly Gook

Jekyll provides built-in support for Sass and can work with CoffeeScript via
a Ruby gem. In order to use them, you must first create a file with the
proper extension name (one of `.sass`, `.scss`, or `.coffee`) and ***start the
file with two lines of triple dashes***, like this:

```sass
---
---

// start content
.my-definition
  font-size: 1.2em
```

Jekyll treats these files the same as a regular page, in that the output file
will be placed in the same directory that it came from. For instance, if you
have a file named `css/styles.scss` in your site's source folder, Jekyll
will process it and put it in your site's destination folder under
`css/styles.css`.

<div class="note info">
  <h5>Jekyll processes all Liquid filters and tags in asset files</h5>
  <p>If you are using <a href="https://mustache.github.io">Mustache</a>
     or another JavaScript templating language that conflicts with
     the <a href="/docs/templates/">Liquid template syntax</a>, you
     will need to place <code>{&#37; raw &#37;}</code> and
     <code>{&#37; endraw &#37;}</code> tags around your code.</p>
</div>

## Sass/SCSS

Jekyll allows you to customize your Sass conversion in certain ways.

Place all your partials in your `sass_dir`, which defaults to
`<source>/_sass`. Place your main SCSS or Sass files in the place you want
them to be in the output file, such as `<source>/css`. For an example, take
a look at [this example site using Sass support in Jekyll][example-sass].

If you are using Sass `@import` statements, you'll need to ensure that your
`sass_dir` is set to the base directory that contains your Sass files. You
can do that thusly:

```yaml
sass:
    sass_dir: _sass
```

The Sass converter will default the `sass_dir` configuration option to
`_sass`.

[example-sass]: https://github.com/jekyll/jekyll-sass-converter/tree/master/example

<div class="note info">
  <h5>The <code>sass_dir</code> is only used by Sass</h5>
  <p>

    Note that the <code>sass_dir</code> becomes the load path for Sass imports,
    nothing more. This means that Jekyll does not know about these files
    directly, so any files here should not contain the YAML Front Matter as
    described above nor will they be transformed as described above. This
    folder should only contain imports.

  </p>
</div>

You may also specify the output style with the `style` option in your
`_config.yml` file:

```yaml
sass:
    style: compressed
```

These are passed to Sass, so any output style options Sass supports are valid
here, too.


## Coffeescript

To enable Coffeescript in Jekyll 3.0 and up you must

* Install the `jekyll-coffeescript` gem
* Ensure that your `_config.yml` is up-to-date and includes the following:

```yaml
gems:
 - jekyll-coffeescript
```