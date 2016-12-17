---
title: Ultimate GIT PS1 bash prompt
tags: bash
published: true
permalink:
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

When we build Drupal websites at Media Done Right, one of the tools we use is GIT.

Do you use GIT? In our opinion, here's the best custom bash PS1 prompt for GIT.

<!--break-->
## The Goal

Ok, so why would you want to customize the bash prompt? Well it makes working at the command line much easier and can provide useful visual feedback, much like in a GUI program. Other tutorials on the web show versions of PS1 customizations that show you the GIT branch. And some even show the status of the branch. And there are many that show all the PS1 variables available, cool and colorful prompts of every sort.

However, the problem with the tutorials that show status of GIT working tree changes (or changes with GIT INDEX) is that they waste real-estate in the terminal screen. The tutorials I've seen take a character or even a phrase to share GIT repo status using PS!. That's neat. But perhaps not so practical.

So we took the idea of showing the current GIT branch plus any changes to the GIT Working Tree and then combined it with some of the custom color prompts we've seen. In this way you always know the branch and based on color, and potentially some sort of parsing character, the status. (We used curly brackets in the example). We also made it really easy for you (or us) to change by defining constants. However, my ultimate goal would be to utilize the colors of the BASH profile used by gnome-terminal. If you know how to do this, I'd love a pointer in the right direction.

The result of this BASH PS1 customization can be something that looks like this: ![GIT PS1 CUSTOMIZATION](/sites/mediadoneright.com/files/manual/GIT_PS1_CUSTOMIZATION.png)

## Here's How to Customize the BASH prompt for GIT

Interesting? Well here are the steps to customize the BASH prompt to show GIT branch and status. Your mileage may vary, but in Ubuntu, BASH customizations should generally be made in your `~/.bash_aliases` file, use this file instead of directly editing `~/.bashrc` (like some other tuts show). The reason for this is it makes for better/safer updates or upgrades of Ubuntu.

Replace `gedit` with your favorite editor. At your command line type (or alt-f2):

`gedit ~/.bash_aliases`

Then add the following snippet somewhere into your file. at the top. bottom. middle. doesnt matter. Then save the file. To restart your terminal, type `source ~/.bashrc`. Here's the snippet:

`

```sh
{% raw %}
#  Customize BASH PS1 prompt to show current GIT repository and branch.
#  by Mike Stewart - http://MediaDoneRight.com

#  SETUP CONSTANTS
#  Bunch-o-predefined colors.  Makes reading code easier than escape sequences.
#  I don't remember where I found this.  o_O

# Reset
Color_Off="\[\033[0m\]"       # Text Reset

# Regular Colors
Black="\[\033[0;30m\]"        # Black
Red="\[\033[0;31m\]"          # Red
Green="\[\033[0;32m\]"        # Green
Yellow="\[\033[0;33m\]"       # Yellow
Blue="\[\033[0;34m\]"         # Blue
Purple="\[\033[0;35m\]"       # Purple
Cyan="\[\033[0;36m\]"         # Cyan
White="\[\033[0;37m\]"        # White

# Bold
BBlack="\[\033[1;30m\]"       # Black
BRed="\[\033[1;31m\]"         # Red
BGreen="\[\033[1;32m\]"       # Green
BYellow="\[\033[1;33m\]"      # Yellow
BBlue="\[\033[1;34m\]"        # Blue
BPurple="\[\033[1;35m\]"      # Purple
BCyan="\[\033[1;36m\]"        # Cyan
BWhite="\[\033[1;37m\]"       # White

# Underline
UBlack="\[\033[4;30m\]"       # Black
URed="\[\033[4;31m\]"         # Red
UGreen="\[\033[4;32m\]"       # Green
UYellow="\[\033[4;33m\]"      # Yellow
UBlue="\[\033[4;34m\]"        # Blue
UPurple="\[\033[4;35m\]"      # Purple
UCyan="\[\033[4;36m\]"        # Cyan
UWhite="\[\033[4;37m\]"       # White

# Background
On_Black="\[\033[40m\]"       # Black
On_Red="\[\033[41m\]"         # Red
On_Green="\[\033[42m\]"       # Green
On_Yellow="\[\033[43m\]"      # Yellow
On_Blue="\[\033[44m\]"        # Blue
On_Purple="\[\033[45m\]"      # Purple
On_Cyan="\[\033[46m\]"        # Cyan
On_White="\[\033[47m\]"       # White

# High Intensty
IBlack="\[\033[0;90m\]"       # Black
IRed="\[\033[0;91m\]"         # Red
IGreen="\[\033[0;92m\]"       # Green
IYellow="\[\033[0;93m\]"      # Yellow
IBlue="\[\033[0;94m\]"        # Blue
IPurple="\[\033[0;95m\]"      # Purple
ICyan="\[\033[0;96m\]"        # Cyan
IWhite="\[\033[0;97m\]"       # White

# Bold High Intensty
BIBlack="\[\033[1;90m\]"      # Black
BIRed="\[\033[1;91m\]"        # Red
BIGreen="\[\033[1;92m\]"      # Green
BIYellow="\[\033[1;93m\]"     # Yellow
BIBlue="\[\033[1;94m\]"       # Blue
BIPurple="\[\033[1;95m\]"     # Purple
BICyan="\[\033[1;96m\]"       # Cyan
BIWhite="\[\033[1;97m\]"      # White

# High Intensty backgrounds
On_IBlack="\[\033[0;100m\]"   # Black
On_IRed="\[\033[0;101m\]"     # Red
On_IGreen="\[\033[0;102m\]"   # Green
On_IYellow="\[\033[0;103m\]"  # Yellow
On_IBlue="\[\033[0;104m\]"    # Blue
On_IPurple="\[\033[10;95m\]"  # Purple
On_ICyan="\[\033[0;106m\]"    # Cyan
On_IWhite="\[\033[0;107m\]"   # White

# Various variables you might want for your PS1 prompt instead
Time12h="\T"
Time12a="\@"
PathShort="\w"
PathFull="\W"
NewLine="\n"
Jobs="\j"

# This PS1 snippet was adopted from code for MAC/BSD I saw from: http://allancraig.net/index.php?option=com_content&view=article&id=108:ps1-export-command-for-git&catid=45:general&Itemid=96
# I tweaked it to work on UBUNTU 11.04 & 11.10 plus made it mo' better

export PS1=$IBlack$Time12h$Color_Off'$(git branch &>/dev/null;\
if [ $? -eq 0 ]; then \
  echo "$(echo `git status` | grep "nothing to commit" > /dev/null 2>&1; \
  if [ "$?" -eq "0" ]; then \
    # @4 - Clean repository - nothing to commit
    echo "'$Green'"$(__git_ps1 " (%s)"); \
  else \
    # @5 - Changes to working tree
    echo "'$IRed'"$(__git_ps1 " {%s}"); \
  fi) '$BYellow$PathShort$Color_Off'\$ "; \
else \
  # @2 - Prompt when not in GIT repo
  echo " '$Yellow$PathShort$Color_Off'\$ "; \
fi)'
{% endraw %}
```

`

## Let me explain how it works

Note the reference numbers in this list relate to the image below.

1.  This is the current time, with seconds. This is controlled by the variable: **$Time12h** and the color is set just before it as **$IBlack**
2.  This is the current directory, with home folder abr. In this case the color and look is controlled near the end of the snippet by the section with **$Yellow$PathShort**
3.  Ok, this is controlled by the **$Color_Off** variables littered throughout.
4.  Ok, this is the fun! Green parenthesis means you're on an unchanged branch.
5.  Red Curly Brackets means something's changed! You have a dirty branch. Either finish & commit or cleanup. ;-)

![GIT PS1 CUSTOMIZATION explained](/sites/mediadoneright.com/files/manual/GIT_PS1_CUSTOMIZATION_explained.png)

Enjoy! Feel free to use or customize. A thanks on twitter: @MediaDoneright or link to this page from your spot on the Internet would also be nice.
