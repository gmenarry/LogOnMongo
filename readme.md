## folder structure

public is anything front end i.e css, front end js

views contains any handlebars templates (html) and individual pages like your log in page, index.js etc

views/layouts - contains the layout for how each page will look/render

index.js - all comes together iside of this file

lib - for any custom modules. i.e modules for querying an api 

## to install:

- npm i -y (sets up package.json)
- npm i express
- npm i express-handlebars path express body-parser
- npm i dotenv

## in index.js:

create the variables and require them. for exmaple: 
const hbs = require('express-handlebars')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

## git ignore: 
need a .gitignore file which you will add what you want git to ignore. In this case, i googled
node express gitignore and copied the data from the first link onto the .gitignore file.

