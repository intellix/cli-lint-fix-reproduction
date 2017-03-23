const compression = require('compression');
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
// const sources = {
//   'default-src': `'self'`,
//   'script-src': `'self' 'unsafe-inline' https://www.google-analytics.com https://assets.zendesk.com https://www.google.com https://www.gstatic.com`,
//   'img-src': `'self' https://www.google-analytics.com https://steamcdn-a.akamaihd.net https://steamcommunity-a.akamaihd.net http://i.imgur.com data:`,
//   'frame-src': `'self' https://assets.zendesk.com https://www.google.com`,
//   'style-src': `'self' 'unsafe-inline' https://fonts.googleapis.com`,
//   'font-src': `'self' https://fonts.googleapis.com https://fonts.gstatic.com`,
//   'connect-src': `'self' http://app.csgoroll.com http://sockets.csgoroll.com:3000 ws://sockets.csgoroll.com:3000 https://csgoroll.zendesk.com`,
// };

// Security
// app.use(function(req, res, next) {
//   const csp = Object.keys(sources).map(key => `${key} ${sources[key]};`).join(' ');
//   res.setHeader('Content-Security-Policy', csp);
//   res.setHeader('X-Frame-Options', 'DENY');
//   return next();
// });

// Gzip
app.use(compression());

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/../dist'));

// Start the app by listening on the default
// Heroku port
app.listen(port);

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/../dist/index.html'));
});

console.log(`Server listening on ${port}`);
