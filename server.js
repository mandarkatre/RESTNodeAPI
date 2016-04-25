var express = require('express');
var _ = require("underscore");
var app = express();

var responsePayload = [{
  type: 'rentals',
  id: 1,
  attributes: {
    title: 'Grand Old Mansion',
    owner: 'Veruca Salt',
    city: 'San Francisco',
    type: 'Estate',
    bedrooms: 15,
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
  }
}, {
  type: 'rentals',
  id: 2,
  attributes: {
    title: 'Urban Living',
    owner: 'Mike Teavee',
    city: 'Seattle',
    type: 'Condo',
    bedrooms: 1,
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
  }
}, {
  type: 'rentals',
  id: 3,
  attributes: {
    title: 'Downtown Charm',
    owner: 'Violet Beauregarde',
    city: 'Portland',
    type: 'Apartment',
    bedrooms: 3,
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
  }
}];

app.get('/rentals', function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  res.send({data : responsePayload});
});

app.get('/rentals/:id', function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  var result =  _.where(responsePayload, {id : parseInt(req.params.id, 10)});

  if (!result) {
    res.sendStatus(404);
  } else {
    res.send({data : result[0]});
  }
});

app.listen(3001);
console.log('Listening on port 3001...');
