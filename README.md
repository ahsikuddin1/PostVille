# PostVille
 [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**PostVille** is a hybrid twitter/reddit blogging app. Users can post their thoughts along with repost, favorite, and comment on each others postings. 


<br>

## MVP

PostVille's MVP includes
- A functioning server with SQL tables for Users, User Posts, and User Comments.
- Enabling users to sign up and login
- User Authentication
- Users being able to like and comment on posts
- Users being able to CRUD (Create, read, update and delete) posts


<br>

### Goals
- Create a interactive and dynamic engaging application.
- Full CRUD functionality
- Utilize Ruby & Ruby on Rails for Server side rendering & React for client.
- Authorization for the user to Login.

<br>

### Libraries and Dependencies



|    Library    | Description                                          |
| :-----------: | :--------------------------------------------------- |
|     React     | _Library for building front end interfaces with JSX_ |
| React Router  | _Used to create route changes in React apps_ |
|  Styled Components| _Library that keeps styling and element architecture separated and make components more readable_ |         
| Ruby on Rails | _Framework for building back ends with Ruby_         
|   Axios            | Requests to external resources_ 
|    bcrypt     | _Library used for hashing passwords_                      |
|      JWT      | _Library used for creating tokens_                        |

<br>

### Client (Front End)

#### Wireframes
Home
![home](https://imgur.com/BekqmDO.png)

<br>

Login

![login](https://i.imgur.com/O2mnzVs.png)

<br>

Sign Up
![signup](https://i.imgur.com/Nl8wrtu.png)

<br>

Post
![post](https://i.imgur.com/ewjTtEN.png)

Edit Post
![edit](https://i.imgur.com/FRCgWmq.png)

#### Component Tree



![whimsical](https://i.imgur.com/rBNkXw0.png[/img)

#### Component Hierarchy



``` structure

src
|__ components/
            |__ Nav.jsx
            |__ Footer.jsx
            |_ SortBy.jsx
|__ screens/
            |__ Home.jsx
            |__ SearchBar.jsx
            |__ Login.jsx
            |__ Signup.jsx
            |__ Blogs.jsx
   

```

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|  Navigation  | functional |   Y  |   n   | _User will be provided links to each of the pages._       |
|  Home Page   |   functional |   Y   |   n   | The homepage will display the posts as well as the searchbar._      |
| Searchbar | functional |   Y  |   Y  | _The user will be able to search posts._                 |
| Sort By | functional |   Y  |   n  | _The user will be able to sort posts by date or by name._                 |
| Blogs | functional |   Y  |   Y  | _The user will be able to create posts or blogs._                 |
| Login | functional |   Y  |   Y  | _The user will be able to login._                 |
| Sign Up | functional |   Y  |   Y  | _The user will be able to sign up for an account._                 |
| Footer | functional |   Y  |   n  | _The footer will show info about me and a link to my portfolio._ |

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task      | Priority | Estimated Time | Time Invested | Actual Time |
| --------- | :------: | :------------: | :-----------: | :---------: |
| CSS       |    H     |     20 hrs     |   TBD    |   TBD    |
| Front End |    VH    |     35 hrs     |    TBD    |   TBD  |
| Back End  |    H     |     10 hrs     |     TBD    |    TBD    |
| TOTAL     |          |     60 hrs     |   TBD    |   TBD |



<br>

### Server (Back End)

#### ERD Model

![erd](https://i.imgur.com/gMbBtPG.png)


***

## Post-MVP
- Create a dark mode
- Implement Css animations
- Implement profanity filtering
- Allow users to post videos and pictures

***

## Code Showcase



## Code Issues & Resolutions


