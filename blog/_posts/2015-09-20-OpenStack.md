---
layout:     post
title:      What is OpenStack?
date:       2015-09-20 19:40:00
categories: openstack
tags:       opinion iaas api
icon:       cloud
summary: >
            Now is becoming clear, but some years ago, people still was thinking
            that OpenStack was a kind of VMware open platform to create virtual 
            machines. Never was the case, Openstack is just a framework to build 
            Infrastructure as a Service (IaaS).
---

{% include figure.html href="https://wiki.openstack.org" url="/blog/img/openstack-software-diagram.png" description="OpenStack software diagram" %}

Now is becoming clear, but some years ago, people still was thinking that 
OpenStack was a kind of VMware open platform to create virtual machines. Never 
was the case, Openstack is just a framework to build **Infrastructure as a Service** 
(IaaS), and software like VMware VSphere/VCenter are just platforms to run VM's 
which can be integrated within OpenStack. That is the reason why big vendors 
like VMware, Cisco, etc. see OpenStack as an opportunity for offering their 
products or services than a competitor. Those are the keys:



Infrastructure
--------------

It is about managing resources in a datacenter, they can be physical or
logical. With a physical server (bare metal) I want a way to manage it
(deploy, re-deploy, wiping, power on/off ...), the same with a logical 
compute resource as a VM, a storage volume (LUN) is another
kind resource to keep data ... there are also load balances, networks, IPs ... and
more recently containers, those are resources too!. The aim of OpenStack is 
provide a homogeneous way to easily manage those heterogeneous resources by 
abstracting the implementation, specific vendors infrastructure. The idea is: 
you need a volume, but you do not mind if is provided by NetApp, by EMC ... 
likely you can say that the data is going to be really critical, but small size, 
and you are expecting a lot of writes ... if you want a VM, you do not care 
which kind of hypervisor is the best, maybe you want to be high available, so 
run it on VMware; otherwise maybe you prefer taking care about the availability 
implementation.
 

Framework
---------

It is a modular framework, because people can define the architecture, 
which components, and integrations with other platforms. There are some base 
reference set-ups.

Openstack is not going to offer you more features than the backend devices do, in
the same way than the Linux kernel does not offer more features than the hardware
has. For example, if you are using a load balancer like F5, you will get high 
availability, but not because of OpenStack, only because of the backend device, 
if you want to provide block device volumes within OpenStack, you can setup a 
Ceph cluster, but is up to you how resilient is going to be ..
Moreover, software libraries do not replace developers and OpenStack is not here
to replace system administrators, they need to setup the backend services,
maintain them, upgrade, ...



API
---

Everything is based on [HTTP RESTful API](https://en.wikipedia.org/wiki/Representational_state_transfer)
to control the resources, each one has an associated service allowing you 
manage it by simple HTTP requests. This schema changes completely the workflow, 
it allows fast delivering, a clear distribution of teams and responsibilities, 
accounting and report management of the resources.

This new workflow fits perfectly with agile teams and DevOps culture. Teams use 
the APIs, they are responsible of the implementation on top of the 
infrastructure. Its in-house cloud computing, an Amazon AWS cloud in the 
datacenter.



Open Source
-----------

Currently, OpenStack is one of the most big and active projects in the open 
source community, involving developers from different companies. They are 
working together to achieve a kind of de facto open standard for cloud platforms. 
The software is going to be the same independently the company who supports or 
sells it: no vendor lock-in. Of course, vendors can include other aditional 
extra services, drivers for hardware, dashboards, etc. in order to integrate it 
with their products. But, OpenStack services (and API) are going to be the same, 
there will be no "*Enterprise Edition*", no "*open core*". They are commited to it, 
from [the wiki](https://wiki.openstack.org): "*OpenStack is open source, openly designed, 
openly developed by an open community*". OpenStack ecosystem projects are 
released under Apache License 2.0.

Released in a cicle of six months, there is also a summit where they together 
decide next features: having meetings, making decisions ... all the discussions 
and notes are open to the rest of the community. And ... who is in charge of the 
long-term phylosophy and promises?, a non-profit foundation ([openstack.org](https://openstack.org)) 
formed by a board of directors, a technical committee and a user committee, which 
guaranties the mission of Openstack: "*produce the ubiquitous Open Source Cloud 
Computing platform that will meet the needs of public and private clouds 
regardless of size, by being simple to implement and massively scalable*".


