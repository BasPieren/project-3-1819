# Project 3 @cmda-minor-web · 2018-2019 ⚙️

This is my repo for project 3 of the web development minor.

![Jiskefet Redesign](https://i.imgur.com/WFCIds2.png)
> Jiskefet Redesign

## Table of Contents 🗃
* [To Do](#to-do-)
* [Description](#description-)
* [Installing](#installing-)
  * [Packages and Technologies](#packages-and-technologies)
* [Concept](#concept-)
* [UI Design](#ui-design-)
* [Sources](#sources-)
  * [Honourable Mentions](#honourable-mentions)
* [Licence](#licence-)

## To Do 📌
This is a list of things I want to do in this project:

- [X] Create a concept to improve the [runs](http://cmd.jiskefet.io/runs?pageSize=16&pageNumber=1) page.
- [X] Design a new UI the [runs](http://cmd.jiskefet.io/runs?pageSize=16&pageNumber=1) page.
- [X] Create a basic prototype using HTML, CSS and Javascript. 

## Description 📝
For this project we where asked to help out some students form software engineering with their project that they where working on in collaboration with [CERN](https://home.cern/), the European Organization for Nuclear Research. They are making a dashboard for [ALICE](https://home.cern/science/experiments/alice) (A Large Ion Collider Experiment) which displays data like their logs and runs. They asked us to help out with some of their user stories. I choose the following user story (in Dutch):

> (O2B-100) ALS Gebruiker WIL IK op al mijn devices een intuïtieve webapplicatie kunnen gebruiken ZODAT Ik door alle opgeslagen metadata kan zoeken.

I choose to make a redesign of the [runs](http://cmd.jiskefet.io/runs?pageSize=16&pageNumber=1) page and create a basic prototype using HTML, CSS and Javascript. The focus was to create a better mobile webpage.

## Installing 🔍
To install this application enter the following into your terminal:
```
git clone https://github.com/BasPieren/project-3-1819.git

cd project-3-1819
```

### Packages and Technologies
This project makes use of the following packages and technologies:

  * None!

## Concept 💡
Here I explain the concept for this project.

![Current Jiskefet runs page](https://i.imgur.com/DPIAViT.png)
> Current Jiskefet runs page

The main problem with the current runs page is as follows: there is just to much information. This is because there is a very large table which holds a lot of information. On a desktop it is already hard to read. On a mobile it is nearly impossible because the table overflows from the viewport. So this was the main problem I wanted to tackle.

I started by drawing a lo-fi sketch.

![Lo-Fi Skecth](https://i.imgur.com/fR2AhbT.jpg)
> Lo-Fi Sketch

My plan was to use collapsable parts to hide information from the users until they needed it. All the runs have a unique run number so I used that as the only information that the user can see directly. I also wanted to combine the time O&#178;/TRG start and end field into one single field to also save space.  

I also wanted to add some extra interaction indicators so that user would know what kind of actions they could preform on the page.

## UI Design 🎨
Here I explain the UI design process for this project.

So when I started designing the new UI I had a couple of points I wanted to pay close attention to:

  * Hide information the user doesn't need (yet).
  * Make smarter use of the mobile viewport.
  * Use more visual pleasing colors.

For the colors I tried finding a balance between visual pleasing and practicality. I went with a darker set of colors for the background and lighter colors for the more import elements and information. I also gave interaction items a completely different color, orange, so that they would stand out more and user would know it is an element they could interact with.

Furthermore I also wanted to allow users to be able to navigate the data in a way that they want. Thats why there are options to sort the data using ascending/descending and the page size.

The final designs look are as follows:

Homepage (Old)                                    |  Homepage (New)
:------------------------------------------------:|:-------------------------:
![Old Homepage](https://i.imgur.com/BEFktlK.jpg)  |  ![New Homepage](https://i.imgur.com/bTE4JuL.jpg)

Expanded filter (Old)                                    |  Expanded filter (New)
:-------------------------------------------------------:|:-------------------------:
![Old Expanded filter](https://i.imgur.com/3xKdJuB.jpg)  |  ![New Expanded filter](https://i.imgur.com/1tYeIq9.jpg)

Expanded table item (Old)                         |  Expanded table item (New)
:------------------------------------------------:|:-------------------------:
![Old Homepage](https://i.imgur.com/BEFktlK.jpg)  |  ![Expanded table item](https://i.imgur.com/Tdxq7VA.jpg)

Filter tags (Old)                                    |  Filter tags (New)
:---------------------------------------------------:|:-------------------------:
![Old Filter tags](https://i.imgur.com/Mu9gFLy.jpg)  |  ![New Filter tags](https://i.imgur.com/2dcJQly.jpg)


## Sources 📚
This is a list of all the sources I used during this project:

  * None!

### Honourable Mentions

  * [Calvin Huynh](https://github.com/CalvinHuynh)
  * [Ramon Gill](https://github.com/RamonG92)
  * [Amin Chihab](https://github.com/aminChihab)

## Licence 🔓
MIT © [Bas Pieren](https://github.com/BasPieren)
