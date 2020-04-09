const request = require("request");
const fs = require('fs');

const catBreed = process.argv.slice(2);
const catName = (catBreed[0].toLowerCase());

const requestWrapper = function() {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${catName}`, (error, response, body) => {

    if (error) {
      console.log("error. check your URL and make sure it is correct");
      return;
    }

    const data = JSON.parse(body);

    if (data[0] === undefined) {
      console.log("This cats name is not in our index. try again");
    } else {
      console.log(data[0].description);
    }

  });
};

if (catName) {
  requestWrapper();
} else {
  console.log("please give me the name of a cat");
}