
<p>
  <img src="https://github.com/fromdenisvieira/carcara-angular/blob/master/carcara.jpg" width="150">
</p>

# Carcará Angular Webpack Boilerplate

Carcará-angular is a simple Boilerplate to start angular projects with the most common structures and tasks of my workflow.

## About the Name Carcará
In 2013, serve the Brazilian army through the core of preparation of reserve officers (NPOR) of 59th motorized infantry battalion in Maceió-AL. CARCARÁ was the name given to my squad, which went through a great experience that contributed to my life in many ways and naming this project and others to come is a way to demonstrate his great use to me, but also I hope it is for all to see.


This is a demo of angular, webpack, oclazyload(to lazyLoad modules), sass.

The base app has pages 1-3, and page4 module is optional.  See below to build it.

This project uses or makes :

1. Atomic SASS Styles
2. oclazyload(to lazyLoad modules) :ok:
3. Editor Config
4. Babel :ok:
5. Tests
   * Jasmine
   * Karma
   * Protractor
4. Webpack :ok:
   * Compile Sass :ok:
   * Watch Files :ok:
   * Live Reload
   * Uglify & Concat JS
   * JS Linter :ok:
   * Move to Dist Folder :ok:
   * Minify images
   * Create Sprites

## Getting Started

### Installation

First of all, install the dependencies to run this boilerplate.

- [NodeJS](http://nodejs.org/)
- [Bower](http://bower.io/)
- [Webpack](https://webpack.github.io/)


```sh
# Clone this repository
$ git clone git@github.com:fromdenisvieira/carcara-angular-webpack.git [name_of_project]
$ cd [name_of_project]

# install bower globally
$ npm install bower -g

# install webpack globally
$ npm install webpack -g

# install webpack-dev-server globally
$ npm install webpack-dev-server -g

# install dependencies
$ npm install

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

Run webpack dev server

```
npm run dev
```

Build dev

```
npm run build
```

Build production with minification

```
npm run deploy
```

To compile and add optional module
```
npm run demo

```

## Credits

This boilerplate uses as a base in the awesome referencies
- [webpack-angular-oclazyload](https://github.com/ay13/webpack-angular-oclazyload) by Andrew Young .


## License

© Denis Vieira Rufino


<!--Simple, not?-->

<!--###To development-->

<!--Run-->

<!--```-->
<!--Gulp server-->
<!--```-->

<!--And work normally... When finish your work the `dist` folder already exists and is solemnly send to production!-->
