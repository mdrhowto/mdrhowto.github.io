---
title:  "Tutorial—Building a Jekyll website using Cloud9"
tags: jekyll
date: "2017-01-25 09:19:06 -0800"
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
