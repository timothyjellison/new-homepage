---
layout: blog
title: In Favor of Code Coverage
subtitle: Some notes
tags:
  - testing
  - culture
date: 2021-03-16
---

## Team Culture is a Reflection of Individual Personalities

When we talk about culture in a software engineering team, there are really only a few dimensions that have to do with the hands-on-keyboards part of software engineering. Among those are these common safeguards of quality:

- Pull request reviews
- Linting
- Automated tests

Learning which of these your fellow engineers trust tells you a lot about their worldview.

If you rely solely on pull request reviews, you see yourself as a superhero. The only thing that stands between the team and chaos is your vigilant eye. 

Add in a linter that enforces good pratices and consistent syntax choices and you've shown you're willing to set aside a little control. You're a superhero who's willing to have a robot sidekick who sweats the small stuff. This isn't much of a leap, though.

Now add in automated tests. This is a game changer. By ceding control to a test you're acknowledging that the code is the safeguard of its own quality, not you. A team that trusts in testing stops being a scrappy band of misfit superheros and becomes something much more professional and powerful.

## Culture is the Game We Choose to Play

Among the FAANG engineers I've worked with, code coverage has a bad reputation. Common criticisms include:

- It's easy to fool a code coverage tool. Just because you have a test that exercises a line of code doesn't mean it's a good test.
- Code coverage slows down development. There's nothing worse that having to hotfix a bug but your new code won't build because it only has 79.5% code coverage when you're supposed to have 80%.
- Code coverage gives false confidence. It's easy to confuse good numbers with good quality.

For a few years I accepted these arguments and took code coverage out of my toolkit, but I'm now of the opinion that this is a bad idea. Now that I've set up these straw men arguments 😜 let's take them on one by one.

1) Yes, you can fool a code coverage tool. But why assume that your fellow engineers are only going to do the bare minimum? This attitude shows a lack of trust in your colleagues, which is a much bigger problem than coding practicies. It's better for your colleague to have written a test that you can review and criticize than for them not to have written a test at all.
2) Yes, code coverage slows down development. But for most businesses that don't want to crash and burn it's better to move a little more slowly and ship a reliable product than to move quickly and ship a shaky product that has to be hotfixed again and again and again.
3) Yes, code coverage can give false confidence. But over-indexing on a single metric is a flaw of interpretation, not a flaw in the metric itself. Every team should have a robust set of metrics they agree to consult when making decisions and thinking about their own team health.

Doing good work is never binary. There's no one good behavior that can save you from the infinite variety of bad behaviors. All you can do is choose to live in ways that increase your chances of making good choices. We can play one of two games: the We Don't Need Code Coverage Game, or the Code Coverage Game. 

The We Don't Need Code Coverage Game is a choice that will encourage a culture of shipping half-baked code quickly and often. You'll constantly be having to double back to fix bugs, and your stakeholders will feel alienated because you never have time to pick up their new feature requests. You and your team members will be driven even harder into the antisocial superhero worldview because you'll feel *so smart* and *heroic* fixing bugs and you'll whine that stakeholders just don't understand *how much work* there is to do or *how complex* this technology is.

The Code Coverage Game is a choice that will encourage a culture of testing, planning, and thougtful code review. When you play the Code Coverage Game you'll have a better chance of your stakeholders knowing that you deliver quality features and a better chance that they won't worry you'll need to drop the project halfway through to fix old bugs. Playing the game isn't everything but when you play it seriously it makes failure — the real failure of not delivering what your business needs — much less likely.

Which game would you choose to play?
