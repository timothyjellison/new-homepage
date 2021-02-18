---
layout: blog
title: Grievances of the Python Newb
subtitle: test
tags:
  - python
date: 2021-02-14T14:22:50.370Z
---

I've recently kicked off my first python projects and find some of it unintuitive. I'm coming from the frontend web development and Node backend development worlds, so it's really basic stuff. This blog post will be a living FAQ / WTF document as I figure some of this basic stuff out and leave breadcrumbs for others along the way.

## Should I start with Python 2 or Python 3?

Python 3, unless you've got a job that you specifically requires you to learn Python 2.

## How do I ensure my command line always uses Python 3 and not Python 2?

On my Mac, if I start a repl or run a script with the `python` command it use Python 2. To use Python 3 I have to use the `python3` command, which seems dumb.

So in my shell profile (in my case `.zshrc` since I'm a `zsh` user) I set an alias that always replaces `python` with `python3`.

```bash
alias python='python3'
```

## What are all these `.pyc` and `__pycache__` files that are being added to my project?

These are precompiled (i.e. binary) versions of the scripts you import. So if a.py imports b.py, the first time you run `python a` you'll see that python creates `b.pyc` (for Python 2) or `__pycache__` (for Pythong 3) to speed up future iterations. These don't have to go into version control, so you can go ahead and add these lines to your `.gitignore`:

```
*.pyc
__pycache__/
```

## How do I create and import modules?

One typical flaw in any language's intro tutorials is that all the example code goes into one long script, which is not how a professional software engineer usually thinks. Professionals want to separate their code into succinct, testable modules.

Here's how to create a module. Make a directory and put an empty file called `__init__.py` in it:

```
mydirectory/
  __init__.py
```

Now `mydirectory` is a module. Put a python file with some functions inside it:

```
mydirectory/
  __init__.py
  myscripts.py
```

Now in your other python scripts you can import that module using the `import` keyword:

```python
import mydirectory.myscripts
```
