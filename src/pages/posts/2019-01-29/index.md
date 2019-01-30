---
title: App Idea
date: "2019-01-29T13:47:00.000Z"
---

App idea: parse a project's package.json and create an html page that lists every dependency with some basic info about it like number of stars and issues on GitHub, the date of the most recently merged PR, the number of weekly downloads on npm, etc. Basically a healthcheck for your dependencies.

I'm imagining this as being yet another package that a user installs, but why bother with all that overhead? This could just be a simple API you can query with a repo's url ("https://github.com/facebook/react", for example) and it would do all the info-gathering work for you serverside and send you the info as json. You could specify in a query parameter whether the healthcheck was recursive (i.e. show not just the health of the package's dependencies but also the dependencies' dependencies, κτλ). 

Users could use this data however they liked. Then in front of that generic service I could stand up a caniuse style website that would let users perform queries and visualize the results for them.

Could be fun!
