---
title: "Cheat Sheet: git cola"
tags: git, drupal
published: true
date: "2011-03-09 11:19:06 -0800"
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

For about two years Bazaar has been a key part of our website development workflow at Media Done Right.  The websites we develop are typically complex, and version control is vital, especially when our team is working remote.
<!--break-->
Drupal.org recently moved to distributed version control. Drupal now controls the project with easy-to-use Bazaar, oops, I mean the not-so-easy to use git. I helped out with the effort by writing up a typical gui based workflow. I chose Cola (and qgit) due to the fact its FOSS, like Drupal, and cross platform. The following writeup is also posted here: http://drupal.org/node/1015432 - where you can find additional git help.

Example: The Zen theme

**Prerequisites:**

*   [Install Git](http://drupal.org/node/1010894)
*   [Install Git-Cola](http://cola.tuxfamily.org/downloads.html)
*   Read [Critical Git concepts](http://drupal.org/node/1014918)
*   [Identify yourself to Git](http://drupal.org/node/1022156)
*   Clone the repository

## Get the repository (first time only)

1.  Locate the project's Git repository by visiting [http://git.drupal.org](http://git.drupal.org) in a web browser.
2.  Find the project name, in our case zen, click it, and copy the address from the location bar.
3.  Start Git-Cola, in Ubuntu it can be found in Applications » Programming » Git-Cola GUI.
4.  When Git-Cola starts, it provides a dialog to Open or Clone a project. Select "Clone..."
5.  In the Path or URL to clone dialog, paste the URL. [Change URL from http to git; for this example it's [git://git.drupal.org/project/zen.git](//git.drupal.org/project/zen.git).] Click "Ok” to confirm the 'From' path.
6.  Now select where you are going to store the local repository. To do this, Git-Cola provides a file dialog for you to select a parent folder to store the cloned repository (e.g., `/home/user/workspace/sites/contrib`). Browse to an appropriate folder and finally click "Ok" to begin the clone download. Note: Git-Cola will create a project folder for you based on the project, in this case zen (e.g., `/home/user/workspace/sites/contrib/zen`).
7.  If the download is successful, you are presented with the Git-Cola main screen, which will look very empty, except for the Title bar which will state the project name and the current branch (e.g., zen [master]).

## Find where you want to be

1.  Now let's say that I have an issue I want to work on, maybe <span class="project-issue-status-8 project-issue-status-info">[#910902: Tabs showing 100% width in IE6](http://drupal.org/node/910902 "Status: needs review")</span>, "Tabs showing 100%." Since this issue is in version 6.x-2.0, we'll create a branch based on this version. Reading the issue, let's download the patch from #3 to test out, and build on.
2.  From the Git-Cola Menu Bar, choose Branch » Create.
3.  First, in the middle of the dialog box, click on the selector named "Tracking Branch."
4.  Then, click on "origin/6.x-2.x."
5.  Notice at the top, the branch name has now changed to "6.x-2.x." Let's build on this. There's no magic in what you name it, but leaving the version and adding the issue number helps show at a glance why the branch was created, so I would call it "6.x-2.x_910902/03" (version_issue#/comment_id). I already know it's a branch of zen because it's contained in my zen project.
6.  The default options are fine; Fast Forward Only, Fetch Tracking Branch, Checkout after creation.
7.  Click the "Create Branch" button. Notice the title bar in Git-Cola now indicates your new working branch (e.g., zen [6.x-2.x_910902/03]).

## Work

1.  Let others know that you're working on a patch in the issue queue. This prevents duplication of effort and allows you to work with a consistent naming convention. For my example, let's say my post is comment #4.
2.  Download the patch from comment #3 and apply it.
3.  Now, hack, hack, hack.
4.  When you've saved your work, switch back to Git-Cola and highlight the file(s) in the Repository Status area of the screen. Then right-click and choose "Stage Selected" to queue your change for committing.
5.  When you're ready, enter a meaningful message in the Commit Message box, normally including the issue number and title. (E.g., zen 910902/04 - added a comment for a patch workflow demo. In the form of: version_issue#/comment_id.)
6.  Click the Commit button. This DOES NOT affect the remote repository. This is a local commit.
7.  To start adding your own work, create a new branch by clicking the Branch button. Name it following the same naming convention, version_issue#/comment_id, so in our example, 6.x-2.x_910902/04.
8.  When you're done working, you can narrow the view of files to just those which need staging with Control+1 or the second icon to the left of the File Filter box in the upper-right corner.
9.  Stage your files and commit.

## Share your work

1.  With your work done, tested, and locally committed, you'll need to create your own patch file to return to the issue queue. Unfortunately Git-Cola can't help you there.
2.  Create a patch file (OSX, Windows, LInux.)

*   `git diff origin/6.x-2.x > zen-910902_04.patch`

4.  Upload your patch to the issue queue.
