// take a presidential Wikipedia page and return the president’s name and birthday.
const rp = require("request-promise");
const $ = require("cheerio");

const potusParse = function (url) {
  return rp(url)
    .then(function (html) {
      return {
        name: $(".firstHeading", html).text(),
        birthday: $(".bday", html).text(),
      };

      //   console.log($(".firstHeading", html).text());
      //   console.log($(".bday", html).text());
    })
    .catch(function (err) {
      // handle error
    });
};

module.exports = potusParse;
