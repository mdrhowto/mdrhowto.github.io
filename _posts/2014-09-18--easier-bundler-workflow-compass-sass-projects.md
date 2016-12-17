---
title: Easier Bundler Workflow for Compass & Sass Projects
tags: SASS, Bundler, Workflow
permalink:
published: true
promoted:                                                                       # carousel: true = promoted to image carousel
sticky:                                                                         # carousel: true = first slide (css: active)
weight: 00                                                                      # carousel: sort order (reversed from high to low)
website_url:
images:
    - title:
      file:
      path: /style/images/portfolio/1920x1080/
      link:
      caption:

---

### Tl;dr

[Just make Bundler easy.](/content/easier-bundler-workflow-compass-sass-projects#tl-dr)

* * *

## CSS Preprocessing Dreams

So you've downloaded the [Zen theme](https://www.drupal.org/project/zen) for Drupal, setup ruby locally, and installed the latest [compass](http://compass-style.org) and [sass](http://sass-lang.com/) [gems](https://rubygems.org/gems). Then you created a your own subtheme using _Zen STARTERKIT_, and got on your way theming it by making changes to one or more of the scss files, which are located in the _YOUR_THEME/sass/_ folder. Finally you run the command **compass compile** (or "_compass watch_") which results in the error:

    WARNING: Compass has changed how browser support is configured. The following configuration variables are no longer supported: $legacy-support-for-ie6, $legacy-support-for-ie7, $legacy-support-for-ie8.Details: http://compass-style.org/help/documentation/tuning-vendor-prefixes/
             on line 384 of /home/drupalpro/.rbenv/versions/2.1.2/lib/ruby/gems/2.1.0/gems/compass-core-1.0.1/stylesheets/compass/_support.scss
             from line 113 of /home/drupalpro/www/mysite.foo/sites/all/themes/awesome/sass/_init.scss
             from line 10 of /home/drupalpro/www-local/mysite.foo/sites/all/themes/awesome/sass/styles.scss

    write css/styles.css

**WTF?! What does _that_ mean?**

Well the good news is [Sass](http://sass-lang.com/) has continued [a stream of releases](https://github.com/sass/sass/releases), and is stable at version 3.4.x. But much of 2013 and most of 2014, [Compass](http://compass-style.org) was stable and stagnant on _version 0.12_ and didn't show real signs of life until late this summer when _Compass 1.0_ was released. There's a bunch of cool new features in sass, but compass updates are not as extensive. However, the real bad news is some of the changes can affect the way older frameworks compile, such as [version 1.4 of zen-grids](https://github.com/JohnAlbin/zen-grids/tree/1.x), which is included in the [version 7-.x-5.5 of the Zen Theme](https://www.drupal.org/node/2254837).

### What are All These Versions?

Zen Grids has multiple release versions. Zen Theme has multiple versions, too. So does Sass, and Compass. Both have multiple versions? Plus there are the Browser plugins for debugging compass only work with certain versions. Egads! How does one keep track of this? I thought Compass was supposed to make life easier? How the heck is a mere mortal supposed to setup, let alone maintain a long-term project when using Sass/Compass/Zen-Grids for a particular version of the Zen Theme?

It turns out there is an easy fix to ensure you're using the correct version of compass and sass (and any other dependent gems) for the version of zen grids your using, and it was recently committed to the development branch of Zen (both 7.x-5.x-dev and 7.x-6.x-dev). The key is in the development branch, and [as you can see](http://cgit.drupalcode.org/zen/log/?h=7.x-5.x) there hasn't been many other changes to dev since the stable 5.x release, so its pretty safe to use the development branch at the moment.

<a name="fix">

## The Fix: Bundler

</a>

So easy fix you say? You bet. In short, the dev branch of Zen now includes a file called _Gemfile_. needed by _Bundler_. But what is Bundler? It's a sort of "per project" package manager, and it works to resolve gem version dependencies. In the case of a Zen theme, this ensures the correct version of compass, and sass (among others) are loaded.

<a name="bundler">

## Install Bundler to Fix the Error

</a>

It's important to note the only real change to your system is installing bundler, which will in turn possibly install other versions of your gems. So if you're using rbenv or RVM, make sure your on the version of ruby you want to use for themeing -- the exact version of ruby isn't that big of a deal as long as its a current stable branch. So let's assume your version of ruby is correct, you can quickly check if you already have **Bundler** using the command:

`gem list -i bundler`

The command will return _true_ if you do have it installed. Optionally, list all your gems using the command: _gem list_. If you need to install it, it is just like installing other gems, and can be accomplished using the command:

`gem install bundler`

There are some good tutorials on the net about how to setup ruby and gems on your system if you run into problems... but that's really beyond the scope of this post. One of the main reasons I posted is because I was in #drupal on IRC and noticed a conversation related to theming with _Zen-grids_, _Compass_, and _Sass_ and **their versions**. There was a useful reference to [Aten's "Bonus Round: Aliases"](http://atendesigngroup.com/blog/managing-compass-extensions-bundler). Basically it shows how to set up bundler for use on a themeing project and how to use aliases to make using bundler easier.

<a name="tl-dr">

## Make Bundler Easy

</a>

**Tl;dr.** Well, [John Ferris](http://atendesigngroup.com/about/john-ferris), from Aten (above), did a fantastic write-up on how to install and configure _Bundler_. But my view is that most front-end developers using _sass/compass_ don't have any other "Ruby tools."

Zen (and [other Drupal themes, such as Aurora](https://www.drupal.org/project/aurora)) are moving towards making the Comapss/Sass toolbox more complicated by adding Bundler. I think this fixes a major problem. And the post by Aten tries to make it easier. But I feel there's still room for improvement. Let's take the improvements that come with using Bundler, _but keep it simple._ Here's how. Setup a custom alias for **Zen** (or Aurora, etc) and _give it THAT NAME_ -- nothing else to remember. After installing Bundler, open up a terminal and type:

`printf "alias zen='bundle exec compass'" >> ~/.bash_aliases -or- on MAC, it might be more appropriate to add to .bash_profile: printf "alias zen='bundle exec compass'" >> ~/.bash_profile`

That's it.

I mean, _you could_ name your alias _compass_ or _aurora_ or something more abstract (see Aten's link above), which could make it more broadly applicable to running compass only using bundler. But I like the alias **zen** in order to keep things simple and memorable. The result is easy commands like:

`/path/to/my/zen/theme/$ zen compile -or- /path/to/my/zen/theme/$ zen watch`

... which is easier _than typing_:

`$ bundle exec compass compile -or- $ bundle exec compass watch`

... and easier _to remember_ than what Aten suggested:

`$ bcc -or- $ bcw`

Most people don't want to have to remember they installed Bundler or how to use it. They want it just to work, so they can.
