###### TO START

$ npm run start

###### ABOUT
react: javascript router
redux: predictable state container
webpack: task runner (like gulp, grunt)
Webpack pipes code through babel, then compiles it.

###### CREATE NEW APP
$ mkdir react-my-first-app
$ cd react-my-first-app
$ npm init
$ npm install webpack@1 webpack-dev-server@1 react react-dom
$ npm install babel-loader@6.2.10 babel-core@6.21.0 babel-preset-es2015@6.18.0 babel-preset-react@6.16.0 --save-dev

###### CREATE DIRECTORIES AND FILES
mkdir app
mkdir app/js
mkdir public
touch app/js/main.js
touch public/index.html
touch webpack.config.js

atom .
package.json (quick look)


###### Notes on files:
app (could be called src folder)
app/js/main.js (can name it anything)
public (contains html)
index.html (add basic html skeleton w/ div id='root' or id='root' in body. then add script src at bottom.)
webpack.config.js (Tells webpack where to look for files, what to do with files, and where to send them.)



###### == ./webpack.config.js ==

'''
module.exports = {
  entry: "./app/js/main.js",
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
'''


###### == public/index.html ==

<!DOCTYPE html>
<html>
  <head>
    <title>My First React App</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="bundle.js"></script>
  </body>
</html>



###### == app/js/main.js ==

const app = document.getElementById('app');

app.innerHTML = "Hello ES6!"



###### == TEST ==
$ ./node_modules/.bin/webpack

** Can Add a Script to Run it Automatically by editing package.json ("start": "webpack").  Then run test via: $ npm run start

"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "webpack --watch"
},


###### == app/js/main.js ==
UPDATE MAIN.JS AS BELOW (then $ npm run start)

// const app = document.getElementById('app');
// app.innerHTML = "Hello ES6!"

import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(
  <p>Hello React!</p>,
  document.getElementById('app')
);
