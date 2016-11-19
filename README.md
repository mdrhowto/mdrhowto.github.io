---
layout: page
title: Read Me
permalink: /readme/
---

## Getting Started in Jekyll

  * Jekyll Documentation - [https://jekyllrb.com/docs/configuration/](https://jekyllrb.com/docs/configuration/)
  * Jekyl Quick Overview -  [http://news.humancoders.com/t/developpement/items/11149-jekyll-cheat-sheet](http://news.humancoders.com/t/developpement/items/11149-jekyll-cheat-sheet)
  * Jekyll Tips -  [https://gist.github.com/smutnyleszek/9803727](https://gist.github.com/smutnyleszek/9803727)
  * Jekyll/Liquid Cheat Sheet -  [http://jekyll.tips/jekyll-cheat-sheet/](http://jekyll.tips/jekyll-cheat-sheet/)
  * Shopify Cheat Sheet (MarkDunkley) - [http://cheat.markdunkley.com/](http://cheat.markdunkley.com/)
  * Shopify Cheat Sheet (Official) - [https://www.shopify.com/partners/shopify-cheat-sheet](https://www.shopify.com/partners/shopify-cheat-sheet)


## Cloud9 Jekyll serve command

The Cloud9 setup utilizes two config files.  The default `_config.yml` is standard. See [Jekyll Documentation](https://jekyllrb.com/docs/configuration/) for details on how to use. A secondary `_config_dev.yml` is used to override production variables, useful only in development.  To run the Jekyll server on cloud9, copy & paste this in your terminal:


```
bundle exec jekyll serve --trace --config _config.yml,_config_dev.yml
```
