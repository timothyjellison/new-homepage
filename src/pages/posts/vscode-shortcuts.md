---
title: Visual Studio Code Shortcuts
date: "2019-04-14T00:00:01.000Z"
---

I love [Visual Studio Code](https://code.visualstudio.com/) but rarely take time to get to know it better. Recently I've found some time- and mental-energy-saving shortcuts that I'd love to share.

For instance: I'm constantly looking for references throughout my code. If I define a helper function called "getData" and I want to see a list of every place it's used, my go to solution has been to find-all using "cmd+shift+f" and type or paste in "getData". But of course the text "getData" isn't the same as a reference to a specific function "getData", so I still have to do some thinking (n.b. thinking about something this small is bad).

Enter VS Code's **find all references** feature. Unlike find-all, if you have two functions with the same name it will be able to distinguish one from the other. It will know that a reference to the "getData" function declared in /utils.js isn't the same as a reference to the "getData" function declared in /asyncActions/index.js. That makes your job about a million times easier. The keyboard shortcut is *option+shift+f12*, but I use it so often that changed the shortcut to just *cmd+i*.

Another helpful feature is **symbol search**. Symbol search lets me search for function, class, and variable names within the currently open file. It's especially helpful when, for example, you're trying to find a method inside a large class. I've got some React components with a large number of "handleOnChange" and similar methods, and having the symbol search makes it so much easier to navigate these. The default keyboard shortcut is *cmd+shift+o* but I swapped it for just plain *cmd+o*.

If you're interested in more VS Code tips I highly recommend [VS Code Can Do That?!](https://vscodecandothat.com/)
