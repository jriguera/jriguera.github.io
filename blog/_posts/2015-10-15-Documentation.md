---
layout:     post
title:      My approach for documentation
date:       2015-10-15 18:31:19
categories: software
tags:       documentation wiki readme
icon:       book
summary: >
            I do not like writing documentation, I do not know anybody who
            likes doing it, but after years of experience, I have noticed it is 
            one of the  most important parts of a project: the way to drive to 
            excellence, because it can mark the difference between a good 
            system and an excellent system.
---

First of all, I do not like writing documentation and I do not know anybody who
likes doing it, but after years of experience, I have noticed it is one of the 
most important parts of a project. It is the way to drive to excellence, because 
it can mark the difference between a good system and an excellent system. That
is the reason of  my claim in my profile, to elaborate it a bit better, let us 
look two use cases.

{% include figure.html href="https://en.wikipedia.org/wiki/Design" url="/blog/img/BPMN-DiscussionCycle.jpg" caption="Example of business workflow process for discussions (from Wikipedia)" description="Example of business workflow process for discussions" %}

First example, imagine yourself getting to a company with the purpose of 
automating processes; writing documentation, going step by step, that will be 
the first phase for automation. In fact, if someone else (with some context) is 
able to read and follow that documentation to repeat the process, you can 
consider this phase completed. Of course, a "*PersonAsAService*" system is not 
the approach, but by documenting it, you have reached three goals:

* Describe the workflow, next time, somebody else in the team could do it.
* In this first iteration, know and analyze the system to get some requirements.
* Define the domain of the system, show it to other people, thinking about high goals, next steps about how to improve it, etc.

{% include figure.html href="https://en.wikipedia.org/wiki/Engineering" url="/blog/img/Booster-Layout.jpg" caption="Booster engine for steam locomotives (from Wikipedia)" description="Booster engine for steam locomotives" %}


Second example, working in a team, designing high availability architectures and 
implementing complicated systems: by creating documentation you will gain respect and get 
consideration from the others, which is especially important in distributed and 
multidisciplinary teams. Also, apart of being elegant and professional, it is 
the best way to create trust within the team.


Another interesting topic is: what kind of documentation? Well, I am not talking
about creating extensive user documentation. It is more about defining the 
interactions between the pieces of the system. Thinking egocentrically, you 
also will get benefits from it in the future, in a year, will you be able to 
remember it? ... if not so, a good starting point is write down what you think 
it will be useful to remind you. This is technical, low level documentation and 
usually it has implementation details, it describe some parameters to change 
functionality, etc. Engineers usually use readme files in the repository 
([Markdown format](https://en.wikipedia.org/wiki/Markdown) is great) 
-sometimes a bash script commented out could be enough for simple use cases- 
for much big projects, having a wiki is a good idea ([GitHub](https://github.com) 
or [Bitbucket](https://bitbucket.org) provide it with the repositories).


But also, there is other kind documentation, high level, something like an 
architecture overview of the services (maybe some cases with implementation 
details to justify or detail some functionality) which will be consumed by the 
rest of the company. In some cases, also operational: update tasks, howtos ... 
for other teams. The idea is, create a document for somebody who needs to see 
the services and its dependencies, as starting point, or if you have to give 
an introduction talk, get information from there.


To sum up, **write at least a Readme in the project's repository**, just something 
as it were for you in one year's time: setup the initial environment, compile, 
deploy or change some important parameters. About high level documentation, most 
of the times is enough by creating diagrams (see [http://www.planttext.com](http://www.planttext.com/planttext)) 
to describe the overview of services and link to the implementation repositories. 
And please do not forget to **keep documentation updated!**


