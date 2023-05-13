# Postman Tutorial

## Table of Contents
[Overview](#overview)  
[Postman UI](#postman-ui)  
[GET and POST request example](#make-a-new-request-get-and-post)  
[Responses](#responses)  


## Overview
Postman is used to send requests to APIs and receive responses. 
There are various types of requests that are supported by Postman  
![Postman Header](/week-3-review/assets/pm-header.png)
In the header, you can click on the dropdown with the word `GET` to switch to the request type you want to be working with. 

Postman also has features for debugging, automated testing, and managing APIs.

## Postman UI
![Postman UI](/week-3-review/assets/pm-UI.png)
The postman interface can be a little confusing when you first look at it, but it is pretty intuitive!

- On the left hand sidebar, you can organize your requests into collections. You can see in the image that I have a collection for "RepCode", "Project Fake", and "New Collection".
- In the middle big section, you can set up the requests and view the responses
- On the right is a response section, where you can click on the different sections to see more details on the responses and requests.
![Postman Right](/week-3-review/assets/pm-right-panel.png)

## Make a New Request GET and POST
You can create a new request by clicking the + tab
![New Test](/week-3-review/assets/plus.png)

Now follow the below steps:
1. In the request type dropdown, select the request you want to send (GET, POST, etc)
2. In the URL bar, enter the URL of the API endpoint you want to hit. Usually, it will be something along the lines of "http://localhost:3000/api/users/register"
3. For the GET request, you can navigate to Body, click on x-www-form-urlencoded (if you are working with a form for example) and then input the key values
![User Login Example](/week-3-review/assets/login.png)
4. For the POST request, you can navigate to Body and input the relevant information you want to send as well. 
![User Register](/week-3-review/assets/register.png)

! If you are looking to send JSON data, go to raw and select JSON. Just ensure that you are formatting your json object correctly!
![JSON](/week-3-review/assets/json.png)

5. After you are done setting up your request, you can send it by clicking the "send" button

## Responses
Once you send a request, the response will appear in the response section.

The information you will want to pay most attention to is the status code, and the body of the response (which can be viewed in different formats like pretty, raw, preview, etc).



## :(
! Sam is bogged with sadness and work, so the writeup for this week is scarce. Sorry sorry. Regardless, hope this gives you some idea on Postman if you are confused. You will be using Postman a lot for the backend as you use express, so you will get more and more familiarity with it!

Don't stress, trust the process
