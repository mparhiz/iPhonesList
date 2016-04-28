# iPhoneList, simple app to showcase power of [AngularJS](http://www.angularjs.org/)

***

## Purpose

iPhoneList is a simple application to show a list of iPhones and search through them.
The idea is to **demonstrate how to write a typical code using AngularJS**. In this simple application, I have written a controller, directive, service and filter and tried to show how to work together.
On the other hand, this is a best practise to develop your knowledge in Testing. I have used the most popular tools to have a fully test on the application. The Karma to execute unit-tests and Jasmine to write unit-tests.

## Installation

You need to install the latest [Node.js](http://nodejs.org/download/) at the first. 


* Make a working directory like iPhoneList and clone this repository 

```
git clone https://github.com/mparhiz/iPhonesList.git
cd iPhoneList
```

## Running
As you do not have browser-sync now to serve the files, you need a web server to return the json file. If you cannot add a web server, just mention that they have to serve this folder via a web server. 
The current readme does not say anything about how to run the app.


## Testing

* I have added a package.json file (I used npm init to create it and then just ran the commands you mentioned to get them working).
* I added all the dependencies to package.json to simplify the installation.
* Normally it is recommended you do not rely on global packages. So, I added karma to local plugins. The reason it was not working was we needed phantomjs-prebuilt package to be installed locally as well. It is now taken care of as I added it to package.json.
* Now the only thing to install everything is to run: 

```
npm install

```

* I added a command to package.json (test) in which it directly calls karma. This way to run the tests the user only needs to run:
```
npm test

```

* In your karma.conf.js singleRun was set to false which prevents node to exit after it ran all the tests (I needed CTRL+C every time after running tests). I changed it to true. So make sure you have that one in place.

