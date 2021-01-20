---
layout: blog
title: The Two Gulfs
subtitle: Helping users help themselves
tags:
  - design
  -
date: 2020-12-23T22:34:45.180Z
---

Recently while reading about API design I stumbled on Pete Kinser's excellent post "Illustrated: Don Norman's Action Cycle" and learned about the Gulf of Evaluation and the Gulf of Execution. In short:

> The Gulf of Evaluation occurs when a user has trouble assessing the state of the system. Simply put, the user is expecting feedback from an action and not receiving ... what they expected.

> The Gulf of Execution exists when a user is having difficulties determining how to execute a goal.

These two terms explain a lot about where APIs and user interfaces go wrong. Any developer or user dropped into the unfamiliar context of an API or UI is going to ask "Where am I?" and "How do I get from here to my goals?" The Gulf of Evaluation is where you leave your users if your product doesn't help them answer the first question, and the Gulf of Execution is where you leave them if your product doesn't help them answer the second.

Notice that the product needs to do the work of informing the user. It's the designers' and engineers' responsibility to make sure the product teaches users how it ought to be used. If users keep falling in the gulfs, the designers and engineers need to build bridges to get them to the other side. Bridges look like:

- A consistent visual design language throughout an application. Users unconsciously pick up on the patterns and have an easier time finding what they need.
- Sensible and limited props for customizing UI components. Anyone who's used a badly designed open source React component knows the feeling of importing the package and having no idea how to use it.
- Conventional API endpoints that are easy to interpret. Some frameworks like Ruby on Rails make it easy to create consistent endpoints matched with appropriate HTTP verbs.

A word on going around the gulfs rather than bridging them: it's a bad idea that will seem like a good idea at first. I've been that guy in the room who recommends creating better documentation or giving users training, but I can tell you from experience that those are dead ends. Documentation gets stale, and in a fast-paced industry like software the people writing the docs are hardly ever the same people building the product which means you'll have serious problems with keeping the docs accurate and users will suffer. Training is infrequent and expensive and depends on the (stale) documentation. Depending on your context and how much irreducible complexity you can't avoid passing to the user, you may really need to provide documentation and training, but be prepared to the pay the costs.
