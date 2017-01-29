---
title: "Cheat Sheet: Website Permissions"
tags:
published: true
date: 2011-01-08 01:09:10 -0800
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

Did you ever need a way to quickly reset permissions while doing web development?  This came up recently at a Drupal meetup in Long Beach, and I shared an example of the script I use.
<!--break-->
Here's what I do, <em>cd</em> to the root of your drupal site, and run this to set all permissions, including files folders.  works on multisite, too!

This is and example for Ubuntu... but will work just as well on other linux OS's when logged in as root, just drop the sudo command from the beginning:

```sh
# sudo chown -Rv :www-data .
# sudo find . -type d -exec chmod 755 {} \; # setup all folder permissions
# sudo find . -type f -exec chmod 644 {} \; # setup all file permissions
# sudo find sites/*/files -type d -exec chmod 775 {} \; # files folder needs more permissions - setup read/write permissions for all folders inside sites/*/files
# sudo find sites/*/files/ -type f -exec chmod 664 {} \; # files folder needs more permissions - setup read/write permissions for all files inside sites/*/files
```
