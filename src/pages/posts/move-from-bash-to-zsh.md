---
layout: blog
title: Move from bash to zsh
subtitle: Some notes
tags:
  - command line
  - tutorial
date: 2020-08-24T14:13:37.102Z
---
I've been moving from bash to zsh. I'll document some of the lessons learned here.

## Copy your bash customizations to zsh

You may have a bunch of custom environment variables, aliases, and scripts that you run in each bash session. To bring these into zsh, copy your `.bashrc` configurations to a new file called `.zshenv`.

```bash
cp ~/.bashrc ~/.zshenv
```

Similarly, copy your `.bash_profile` into a new `.zshprofile`.

```bash
cp ~/.bash_profile ~/.zshprofile
```

The difference? `.bash_profile`/`.zshprofile` is only run when you login to the the terminal (whether locally or via ssh), whereas `.bashrc`/`.zshenv` is run on every new terminal instance.