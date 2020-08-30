---
layout: blog
title: Changing your login shell
subtitle: Digging into the chsh command
tags:
  - command line
date: 2020-08-30T22:34:45.180Z
---
If you're using Mac, Linux, or Windows with the Windows Subsystems for Linux installed, you can use `chsh` to `ch`ange your `sh`ell.

## What's a shell?

The shell is the outermost layer around an operating system. In other words, the shell is an operating system's user interface. But while a graphical user interface (GUI) is technically a shell, usually when people say shell they're referring to a command line interface.

## What's a login shell?

The login shell is the shell that starts whenever you begin a new terminal session. That shell can open any other shell as a child, but those children aren't the login shell.

## Why would you want to change your login shell?

### The Flip Answer: Because It's There

Your computer can do millions of interesting things and this is one of those things. So why wouldn't you want to do it? Experiment. Learn. Enjoy.

### The Legit Answer: Because Things Change

For myself, I moved from bash to zsh because I upgraded my macOS to a version that prefers zsh. If I were to make a career shift and start programming primarily in C, I might start using csh. Hardware changes. Software changes. Your needs change. Keeping up might mean changing your shell.

## How do I even know what shells I can use?

From your root directory, use `cat` to list the shells you have available.

```bash
cat etc/shells
```

On my machine this returns a list:

```
# List of acceptable shells for chpass(1).
# Ftpd will not allow users to connect who are not using
# one of these shells.

/bin/bash
/bin/csh
/bin/dash
/bin/ksh
/bin/sh
/bin/tcsh
/bin/zsh
```

## Why do all of these end in sh?

The `sh` stands for shell. Googling any one of these shells will take you down a rabbit hole of computer history at MIT, Bell Labs, and other centers of early computing. It's good reading.

## How do I change to one of these shells?

Use the `chsh` command. The `-s` flag tells `chsh` that you’re passing the name of the shell you want to change to.

```bash
chsh -s /bin/zsh
```
