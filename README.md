## File App

An app for displaying information about software packages. 

## Motivation

This app has been created as an answer to a pre-assignment.

## Screenshots

![Alt text](./app.png?raw=true "Screenshot")

## Tech/framework used

Built with 
* JavaScript
* React.js

## Features

This app presents what is in a file called /var/lib/dpkg/status that holds information about software packages that the system knows about. The app lists all installed packages alphabetically. If you click a name of some package, you will arrive to a page with the name of that file, a description, dependencies and reverse dependencies. Both of those dependencies are clickable and the user can navigate the package structure by clicking from package to package.

## Installation

The app requires only installation of node_modules.

```
npm install
```
