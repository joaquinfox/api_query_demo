const express = require('express');
const fetchUrl = require('fetch').fetchUrl;

express()
  .set('view engine', 'ejs')
  //   .use(fetchUrl())
  .get('/', (req, res) => {
    res.render('search');
  })
  .get('/search', (req, res) => {
    let searchTerm = req.query.search_term;
    let url = 'http://www.omdbapi.com/?s=' + searchTerm + '&apikey=thewdb';
    fetchUrl(url, (err, meta, body) => {
      let result = JSON.parse(body);
      res.render('results', { results: result });
    });
  })
  .listen(process.env.PORT || 3000, () => {
    console.log('listening');
  });
