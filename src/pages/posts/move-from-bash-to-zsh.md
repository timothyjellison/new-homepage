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

## Change your default shell from bash to zsh

To `ch`ange your `sh`ell, use the `chsh` command. The `-s` flag tells `chsh` that you're passing the name of the shell you want to change to.

```bash
chsh -s /bin/zsh
```

If you get cold feet and want to go back to bash, you can change it back:

```bash
chsh -s /bin/bash
```

## Copy your bash customizations to zsh

You may already have a bunch of custom environment variables, aliases, and scripts that you run in bash. To bring these into zsh, copy your `.bashrc` configurations to a new file called `.zshenv`.

```bash
cp ~/.bashrc ~/.zshenv
```

Similarly, copy your `.bash_profile` into a new file called `.zshprofile`.

```bash
cp ~/.bash_profile ~/.zshprofile
```

The difference? `.bash_profile`/`.zshprofile` is only run when you login to the the terminal (whether locally or via ssh), whereas `.bashrc`/`.zshenv` is run on every new terminal instance.