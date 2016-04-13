
<p>
  <img src="https://github.com/fromdenisvieira/carcara-angular/blob/master/carcara.jpg" width="200">
</p>

# Carcará Angular Boilerplate

Carcará-angular is a simple Boilerplate to start angular projects with the most common structures and tasks of my workflow.

1. Atomic SASS Styles
2. AngularAMD
3. Editor Config
4. Babel
5. Tests
   * Jasmine
   * Karma
   * Protractor
4. Gulp
   * Compile Sass :ballot_box_with_check:
   * Watch Files :ballot_box_with_check:
   * Live Reload :ballot_box_with_check:
   * Uglify & Concat JS
   * JS Linter
   * Move to Dist Folder 
   * Minify images
   * Create Sprites

## Getting Started

### Installation

First of all, install the dependencies to run this boilerplate.

- [NodeJS](http://nodejs.org/)
- [GulpJS](http://gulpjs.com/)
- [Bower](http://bower.io/)


```sh
# Clone this repository
$ git clone git@github.com:fromdenisvieira/carcara-angular.git [name_of_project]
$ cd [name_of_project]

# install gulp globally
$ npm install -g gulp

# install bower globally
$ npm install -g bower

# install dependencies
$ npm install
$ bower install

```
Wait and enjoy!!!

With the commands above, you have everything to start.

### Folders and Files

```sh
├── README.md
├── build
│   ├── css
│   │   └── style.css
│   ├── img 
│   ├── index.html
│   └── js
│       └── main.js
├── gulpfile.babel.js
├── package.json
└── src
    ├── img 
    ├── js 
    ├── styl
    │   ├── _core/*.styl
    │   ├── atoms/*.styl
    │   ├── molecules/*.styl
    │   ├── organisms/*.styl
    │   ├── widgets/*.styl 
    │   ├── pages/*.styl 
    │   └── style.styl
    └── jade
        └── index.jade
```

Those folders and file will change during the project.

## Tasks

- `gulp`: run all tasks and initialize watch for changes and a server
- `gulp js`: execute js files
- `gulp jade`: compile jade files
- `gulp css`: compile stylus files
- `gulp images`: compress image files
- `gulp connect`: inicialize a server
- `gulp watch`: call for watch files 
- `gulp build`: run all tasks  

## Credits

This boilerplate uses as a base in the awesome referencies
- [Qualy Boierplate](https://github.com/Qualy-org/qualy) by Willian_justen
- [Kratos Boilerplate](https://github.com/LFeh/kratos-boilerplate) by Felipe Fialho


## License

© Denis Vieira Rufino


<!--Simple, not?-->

<!--###To development-->

<!--Run-->

<!--```-->
<!--Gulp server-->
<!--```-->

<!--And work normally... When finish your work the `dist` folder already exists and is solemnly send to production!-->
