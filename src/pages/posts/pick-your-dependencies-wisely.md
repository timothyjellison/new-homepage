---
layout: blog
title: Pick Your Dependencies Wisely
date: 2021-04-12
---

Lately I've been doing a lot of migrations and security patches for Node apps and it's had me appreciating the value of choosing your dependencies wisely.

Everything I’m saying here is geared toward enterprise. If you want to ignore this advice in your side projects that’s your choice, but ignoring this advice at work is going to waste a lot of your employer's money. As a professional you're not free to make irresponsible choices.

## Unpopular Packages
Don’t trust a package that doesn't have a lot of eyes on it. Don’t just look at Github stars; those can be inflated by hype. Look at the number of NPM downloads, which are a little more likely to show real usage. Look at who the contributors are and how often they contribute. Look at how often PRs are raised and whether they just sit there or are reviewed and accepted/rejected. Look at who raises issues and whether they receive a response.

Consider [Lodash](https://github.com/lodash/lodash):
- 49k stars on github. That's great but it could just be hype.
- 42 million weekly downloads [on NPM](https://www.npmjs.com/package/lodash), and a year ago it had 26 million weekly downloads (hover over the timeline on NPM to see historical data). A lot of people have trusted the package for over a year, which a great sign.
- Lots of PRs are raised. [Most are reviewed and rejected as unnecessary.](https://github.com/lodash/lodash/pulls?q=is%3Apr+is%3Aclosed) To me this raises the package's trust factor tremendously.
- [There are 121 open issues, but 3k have been closed.](https://github.com/lodash/lodash/issues?page=1&q=is%3Aissue+is%3Aopen) Most of those 121 are less than a year old, so issues aren't just sitting unanswered for a long time. This is also a good sign.

Let's look at [another that I *wouldn't* trust for enterprise](https://github.com/ehowey/gatsby-theme-catalyst). I'm not saying this package is bad, just that it's probably not one I would use for a large buisiness. Here's why:
- 149 stars. Not a great sign but I'm still not going to write it off.
- [310 weekly downloads on NPM](https://www.npmjs.com/package/gatsby-theme-catalyst-core). Huge warning sign. Why? Because if there are problems with the package there aren't nearly enough developers paying attention to catch it, and even if they do catch it there aren't enough developers to find a fix for it quickly.
- [Lots of PRs are closed](https://github.com/ehowey/gatsby-theme-catalyst/pulls?page=3&q=is%3Apr+is%3Aclosed) but all by the solo project maintainer or a bot.
- [Lots of closed issues](https://github.com/ehowey/gatsby-theme-catalyst/issues?q=is%3Aopen+is%3Aissue) but most of them were created by the solo project maintainer, so it's actually not a signal of an active community. When bugs arise I'll be depending on one person *who owes me and my company nothing* to solve the problem. Imagine explaining that decision to your coworkers or your boss; they'll have every right to begin questioning your judgement.

## Internal Packages
Don’t trust an internal package that’s customized to your specific case over a widely used case. Use express, not an internal wrapper around express. Use Material UI, not a set of in-house UI components. Highly customized internal packages will be sold to you as a convenience ("It just works like magic!") but eventually it will become a hindrance ("This f@#$ing magic has security vulnerabilities and performance problems."). 

Two exceptions: 

1) You can consider trusting an internal package if it has a dedicated internal team whose jobs depend on the package’s success. Like, if it fails, they'll be fired. But talk to their engineers first. Ask what their long term plans are. If they aren't thinking about five years from now then you should be careful.
2) Be more flexible trusting internal packages that work as a plugins for a popular package. For example, custom express middleware is highly preferable to a wrapper around express. A Material UI theme is highly preferable to a wrapper around Material UI. Why? Because they require significantly less code (which makes bugs less likely) and you can more easily opt out if the package starts becoming a problem.

## Friends' Packages
Don’t use a package that’s a coworker’s pet project or depends on a coworker’s pet project. Seriously. It doesn't matter how much you like them or how much you believe in them. If you want to support them use their project in your side projects, contribute to their code, or help promote them on social media but don't make your enterprise software depend on it. Why? Because your coworker will eventually 1) fail and give up on the project or 2) succeed and move on to something else. Either way, these pet projects become abandonware.

Even if the wildly unlikely happens and their package does go on to become super popular and well supported by a loving community what does that gain you — street cred? You can tell your friends you staked your company's future on lodash before it was cool? It's not worth it.

## Be Responsible With Other People's Property

It's a pretty simple idea: be responsible with other people's property. At Netflix we often discuss the balance of freedom and responsibility. Developers who apply for jobs here often salivate after freedom, but it's the responsibility part I find most bracing and empowering. Your employer trusts you to make wise decisions in their interests. *Their* interests, not yours. When you accept that trust you become bound by professional responsibility, and when you accept and execute all the work that responsibility demands of you, you become a professional.
