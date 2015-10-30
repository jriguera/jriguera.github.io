---
layout:     post
title:      Ansible Patterns and Conventions
date:       2015-10-25 00:40:17
categories: software
tags:       ansible pattern convention devops
icon:       cubes
summary: >
            Due to the fact that there are no official and global Ansible conventions, 
            sometimes is really difficult reusing roles/playbooks from the 
            community. This could be an approach to try to solve the issue by defining
            some patterns and conventions.
---

A [pattern in software](http://en.wikipedia.org/wiki/Software_design_pattern) 
is a piece of reusable code. In my day to day work I like to define and reuse 
patterns, in my opinion it is a way to master a tecnology. Defining common 
structures, name conventions, styles and standards helps me to create 
code in the same way, making easy for me to understand in the future.
In a large programming projects with a lot of developers, that is a must, 
but in the specific case of ansible roles is just desirable, so it is not 
about imposing one's way of working to the rest of the people, it is about
communicating and make it understandable for the rest, thats the main reason
of this post.


Rationale
---------

Due to the fact that there are no official and global Ansible conventions, sometimes 
is really difficult reusing roles/playbooks from the community, people use 
different strategies and conventions to create roles. Probably most of them are 
just correct/enough on their domain for their own purpose, but I feel that with 
a small effort, one can do something that also can help other people in the 
community.

To define my standards, I have spent time programming roles, asking people, 
reading posts on the internet ... and some of those were:

 * [Six practices for super smooth Ansible experience](http://hakunin.com/six-ansible-practices)
 * [Multistage environments with Ansible](http://rosstuck.com/multistage-environments-with-ansible/)

Remember, it is not exactly about good practises, because those things depends on 
the organization, on the context and especially on the people of the team ...
it is about documenting a way of working. I have defined those conventions 
and patterns in my roles with the aim of having something to clone and start 
working on a new role, helping me to get always the same structure and 
making easy to understand.


Structure and Ansible Conventions
---------------------------------

To follow my Ansible conventions and patterns I, have created a repository
in GitHub: [https://github.com/jriguera/ansible-role-pattern](https://github.com/jriguera/ansible-role-pattern). 
The idea is to have it ready to be cloned and start working. Please have a look 
to the files on the repository and read the comments. A good starting point is 
[defaults/main.yml](https://github.com/jriguera/ansible-role-pattern/blob/master/defaults/main.yml).


 * **Each role should be independent and reusable**, minimizing external dependencies,
   except, of course, if it needs something like java to run a service. In that
   case it can be a dependency defined in the `meta\main.yml`, but never 
   things like a database, because the database server can be running on a 
   different host, even you could use things like SQLite. The dependencies 
   should be defined at playbook level, because Ansible is kind of stateless 
   orchestrating tool (task oriented), so it is difficult to control when a role 
   was called from others with different parameters. To sum up, try to keep 
   the dependencies at the top level (playbook level).

 * **A role/playbook should be idempotent and predictable**, that means, for example, 
   if it is re-provisioning a server and there were no changes, it has no to restart 
   the associated service. If no changes on the input (variables), the result has to
   be the same as the previous time, without restarting the service.

 * **Each task needs a name** and it should be a block of code, please, do not put 
   lines from diferent tasks together, it makes it difficult to read.
   Divide them in groups and files **using tags** with the same name as the tasks file:
   * `install`: in charge of installing the distribution packages and after 
   running the service should be stopped (unless no configuration is needed).
   * `configure`: in charge of creating the configuration settings and
   make sure that the service is enabled and started.
   * `plugins`, `vhost` ... : in charge of additional setups.

 * Use `vars` for specific distribution parameters of the service, think about 
   something like constants in a programming language. Usually those parameters they 
   do not affect the functionality of the service which you try to install, it is 
   just about package names, file locations, folder names, ... nothing to do with 
   the real settings in the configuration files of the service. In `vars` folder
   there are usually Debian and RedHat files with specific parameters which are 
   going to be loaded in those cases. **Do not work against distribution philosophy**, 
   try to keep the files in the same place where your distribution usually has put 
   those files.

 * If you want to maintain your code, **keep name consistency between the 
   playbooks, inventories, roles and group variables**. In Ansible there is a
   global variable scope, so a good approach is prefixing all role variables
   with the name of the role. I am using `_rolename` (*underscore* prefix) for 
   internal facts defined within the role, in the same way as Python variables.

 * **Use `defaults` to define the service settings** in order to get parameterized 
   roles. There you should define your service defaults settings (to use them in 
   the template), and the recommended defaults (from the owner/programmer) 
   should be defined in the template with `parameter | default()`. By doing in
   that way, one could reuse those templates in other provisioning tools 
   different than Ansible.

 * Make the role at least available for RedHat/Centos and Debian/Ubuntu distributions. 
   To help you on testing it in those ones, just **create a `Vagrantfile`** ready to 
   run it with some defaults for typical usage, like a demo. Finally, at least, **write 
   a Readme file** documenting such typical usage of the role. In my case, I like to 
   put all the parameters commented out in `defaults/main.yml`.


**To sum up: make everything reusable and interchangeable.**

