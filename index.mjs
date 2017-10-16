import http from 'http';
import {getRandomQuote} from './random-hacker-quotes.mjs';

const requestHandler = (request, response) => {
  const quote = getRandomQuote();

  response.setHeader('Content-Type', 'text/html');
  response.end(
    `
    <html>
      <head>
        <title>Random hacker quotes</title>
        <style>
          body {
            font: 22px Open Sans, sans-serif;
            margin: 1em;
          }

          .cite {
            font-style: italic;
          }
        </style>
      </head>
      <body>
        <h1>Random hacker quote</h1>
        <p><span>${quote.quote}</span></p>
        <p><span class="cite">${quote.cite}</span></p>
      </body>
    </html>
    `
  );
}

const server = http.createServer(requestHandler);

server.listen(3000, (error) => {
  if (error) {
    return console.error('Error', error);
  }
})