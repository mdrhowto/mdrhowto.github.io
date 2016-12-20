---
title:  "Tutorial—Jekyll Setup for SASS Sourcemaps"
tags: jekyll, sourcemaps
published: true
permalink:
promoted:                                                                   # carousel: true = promoted to image carousel
sticky:                                                                       # carousel: true = first slide (css: active)
weight: 00                                                                      # carousel: sort order (reversed from high to low)
website_url:
images:
    - title:
      file:
      path: /style/images/portfolio/1920x1080/
      link:
      caption:
---


Jekyll converts SASS into css automatically for you.  However, css to SASS [sourcemaps aren't supported](https://github.com/jekyll/jekyll-sass-converter/issues/12#issuecomment-142557339) in Jekyll.  This missing feature can really hinder development, especially if deployment is aimed at [Github pages](https://help.github.com/articles/using-jekyll-as-a-static-site-generator-with-github-pages/), where you can't customize Jekyll setup.  

A work around for this is to [install sass](http://sass-lang.com/install) and use it to generate css and sourcemaps.  Also, Jekyll will need to be configured so it works normally when deployed using Github pages, but also in a way that allows SASS and Jekyll to work locally.  

The problem is the SASS preprocessor doesn't understand [Jekyll frontmatter](https://jekyllrb.com/docs/assets/), but Jekyll requires it in order to generate css on Github pages.  

To fix it, create a separate SASS file with frontmatter just for Jekyll to import normal SASS files that can be used to generate a sourcemap in local development.  And then to setup Jekyll locally to ignore any generated sourcemaps and to tell SASS which files to generate and where to put them.

###  New SASS File Structure

```
    . jekyll/
    ├── css/
    │   ├── style.scss 👉 _main.scss
    │   └── style.scss 🆕
    ├── config.yml 🆙
    └── config_dev.yml 🆙
```


Start by ensuring your [SASS](http://sass-lang.com/) file structure is setup so that both Jekyll and SASS can convert your sass files into css.  For Jekyll, setup a "new placeholder sass file (example: `style.scss`)" which **importantly** will be the only sass file to contain the [frontmatter](https://jekyllrb.com/docs/assets/) needed by Jekyll.   to both import your original sass file (Example: renamed to `_main.scss`) and to preprocess into css.  For SASS, you need to remove the frontmatter from the original sass file (`_main.scss`), as anything but standard sass/scss syntax will be rejected by SASS.  You should end up with something like this:

#### Rename Stylesheet

Rename your "original sass stylesheet" using a [SASS partials syntax](http://sass-lang.com/guide#topic-4).
  **Example:** `style.scss` :fast_forward: `_main.scss`


#### Create New Stylesheet

Next, create a new sass stylesheet file based on the original stylesheet just renamed. _In other words, it should match the main SASS file for Jekyll in `config.yml`._  This file will import the `_main.scss` and tells Jekyll how to process your sass.

**Example:** `style.scss`  and its contents will look like:

```yml
---
---

@import "main";
```

#### Setup Development Config

Setup a local `config_dev.yml` to ignore sourcemaps.  This allows you to run the `jekyll serve` command but to ignore SASS generated file(s).

**Example:** In `config_dev.yml`, add a section

```yml
keep_files:
  - style/css/style.css.map
```


#### Check Main Config

Check `config.yml` sass setup still points to the right file.  Jekyll uses it for both conversion input and css output name.

**Example:** Make sure `sass_dir` is correct.  Note, Jekyll ignores [SASS partials](http://sass-lang.com/guide#topic-4) for processing, which is files that start with an underscore.

```yml
sass:
  sass_dir: style/css
  style:    expanded
```

## Create Sourcemaps and Run Jekyll Server

Assuming you're running Jekyll from command line, and you're in the jekyll folder, simply run a specially formatted sass command followed by a specially formatted Jekyll command to use both the default `config.yml` and the local `config_dev.yml` files.

Run sass with these commandline options:
- `--sourcemap=auto` - --sourcemap=TYPE             
                          How to link generated output to the source files.
                          auto (default): relative paths where possible, file URIs elsewhere
                          file: always absolute file URIs
                          inline: include the source text in the sourcemap
                          none: no sourcemaps
- `--update` - Compile files or directories to CSS.
- `--force` - Recompile every Sass file, even if the CSS file is newer. Only meaningful for --update.
- `style/css/_main.scss` - input SASS (path/to/_main.scss --> same file imported by Jekyll main sass file)
- `:`
- `_site/style/css/style.css` - output css


#### Making it work

Assuming you're running from a shell (or a GUI that can run custom commands), create your sourcemap and run the Jekyll webserver with the following shell commands.

```
bundle exec jekyll serve --detach --config _config.yml,_config_local.yml
sass --sourcemap=auto --update --force --watch style/css/_main.scss:_site/style/css/style.css
sass --sourcemap=auto --watch style/css/_main.scss:_site/style/css/style.css
```

The first command starts the Jekyll webserver and runs it in the background.  Note: to stop it you'll need to run the command `pkill -f jekyll`.  The next command forces sass to compile CSS and sourcemaps.  This is needed due to a limitation of the sass server, which doesn't allow you to force the compilation when you start the server.  Finally, start the sass server and watch for scss changes to comile into css and sourcemaps.
