---
title: Visual Studio Code Shortcuts
date: "2019-04-14T00:00:01.000Z"
---

I love Visual Studio Code but rarely take time to get to know it better. Recently I've found some shortcuts that have been there all along and now I don't know how I lived without them.

For instance: I'm constantly looking for references throughout my code. If I define a helper function called `getData` and I want to see a list of every place it's used, my go to has been to find all using `cmd+shift+f` and type or paste in `getData`.

But there's a _much_ better way.

VS Code has a "find all references" feature that does the same thing but without the clumsiness of the find-all interface. Unlike find-all, if you have two functions with the same name it will be able to distinguish one from the other. It will know that a reference to the getData function declared in utils.js isn't the same as a reference to the getData function declared in index.js. That makes your job about a million times easier. The keyboard shortcut is `option+shift+f12`, but I use it so often that changed the shortcut to just `command+i`.

Another helpful feature is symbol search. I'm constantly using `command+p` to search for files, but symbol search lets me search for function, class, and variable names within the currently open file. It's especially helpful when, for example, you're trying to find a method inside a large class. The default key mapping is `command+shift+o` but I swapped it for just plain `command+o`.