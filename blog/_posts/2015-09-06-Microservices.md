---
layout:     post
title:      Architectural Patterns. Microservices.
date:       2015-09-06 00:58:53
categories: software
tags:       opinion iaas api microservice pattern container
icon:       cloud
summary: >
            Recently I have been at the Software Circus conference in Amsterdam, 
            and there I learnt the definition of a microservice I have ever heard: 
            "piece of software with a purpose which fits in your mind". 
---

Lately, the term microsevice is becoming more and more popular in software 
engineering. Now, if somebody designs a service without a micro-service approach, 
it seems they are old school, old fashion engineer ... Recently I have been 
at the [Software Circus](http://softwarecircus.io/) conference in Amsterdam, 
and there I have heard the best definition of a microservice ever done: 
"*something which fits in your mind*". I love that definition, but it needs 
to be completed with "and it has an API". The API has to be language agnostic, 
normally most of the services are using [HTTP RESTful with JSON](https://en.wikipedia.org/wiki/Representational_state_transfer#Applied_to_web_services).


{% include figure.html href="https://www.flickr.com/photos/126600967@N04/albums/72157658411033272" url="/blog/img/microservice.jpg" caption="Definition of microservice. Drawing by Martijn Gijsberti (from flickr)" description="Microservice definition drawing by Martijn Gijsberti" %}


The concept of a microservice is an atomic business functionality of a specific 
domain, offering the capability across web infrastructure. By composing
microserives blocks, a application/service can be built decoupling 
programming languages and data. 


Now, it seems that everything has to be a microservice, a lot of times just 
because it is cool. But, I have the feeling that, there are other things 
which are even more important than do everything as microservices, for example,
what is the difference between microservices and 
[SOA](https://en.wikipedia.org/wiki/Service-oriented_architecture)? 
After having a look on the wikipedia it seems that SOA is a "entreprise" 
concept while the microservices architecture is a way to implement it but, 
by using APIs. In fact the term is part of a design way based set of patterns 
to create small composable applications, but is it the only way to do it? What 
is the limit? When I was at the university, we had to learn a lot of software 
patterns. For me, the most valuable were some architectural patterns, because by 
using them, one can build really big applications: those are the kind of patterns 
which help you by defining a kind of skeleton for the application. Of course, it 
was more than 10 years ago! we were focused on J2EE applications ... Do you remember 
[CORBA](https://en.wikipedia.org/wiki/Common_Object_Request_Broker_Architecture)? 
IDL? ... we were using those technologies building RPC based applications with 
interfaces ... painful ... but I think those old patterns have still a lot 
to say helping to build modular and scalable applications (i.e. message queues).


Do not get me wrong!, I am not against the microservice approach, it is a 
really good architectural group of patterns, but, just take into account that 
there are other architectural patterns to design applications, and they can be 
combined. I am just saying that sometimes is better creating just a service than 
three coupled microservices, where a cut on one of them causes the main service 
goes down ... or because of the design, all of then have to be scaled 1:1 ... 
in those cases, just create a service with traditional good patterns to achieve 
the functionality, avoiding complex systems with language-agnostic APIs. 
In that sense, there is a really good article called "[Stability patterns applied 
in a RESTful architecture. Five ways to stabilize network behavior in distributed](http://www.javaworld.com/article/2824163/application-performance/stability-patterns-applied-in-a-restful-architecture.html)".
In addition, developers usually make assumptions about the infrastructure, for 
instance, a really important point is take into account the limitations on 
the network to design distributed systems, which are perfectly summarized in 
the "[Fallacies of distributed computing](https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing)".


Another important point about the microservice architecture is it has to fit in 
the organization and ... microservices have little to do with containers, in 
fact a microservice is not about running a process within a container. Containers
technologies like [Docker](https://www.docker.com/) are really helpful
to support microservices but, thats all, containers are not a panacea per se. 
It does not make sense creating a lot of microservices, if 
there is not platform to run and maintain those microservices in the 
organization, otherwise chaos appears. So, the organization should have a 
enterprise architecture team to decide clustering, scaling, routing, load 
balancers dynamic provisioning and management.


My point is, identify the relationship between services on a specific domain. 
If a shared functionality comes up, expose it by decoupling it and create a 
microservice with a RESTful API when it goes further of the domain control. 
Define endpoints for the services. Take into account methodologies for building 
applications like the great [twelve-factor app](http://12factor.net/), use 
patterns like [circuit breakers](https://en.wikipedia.org/wiki/Circuit_breaker_design_pattern), 
message queues, health monitors, metrics ...
also, some of those can be managed using a common platform 
([PaaS](https://en.wikipedia.org/wiki/Platform_as_a_service)).
Above all, just be objective, one can design a service not following the 
*micro* approach, its just a service and it can be perfectly valid, even if 
it is complicated. If that service is scalable, resilient and is able to offer 
the functionality which should do (contract) then, it is done!


