const request = require('request');
let breedName = process.argv[2]


request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, response) => {
  if (err) {
    console.log('there has been an error')
  } else if (JSON.parse(response.body)[0] === undefined) {
      console.log('cat name not found')
    } else {
      
      console.log(JSON.parse(response.body)[0])
    }
});

