/* 
  INPUT: path to folders (line )
  OUTPUT: data.json file as JS object to use in a constants.js
*/
const fs = require('fs');
let data = []; // data to write to file

// necessary to override Date toJSON function
Date.prototype.toJSON = function () {
  var timezoneOffsetInHours = -(this.getTimezoneOffset() / 60); //UTC minus local time
  var sign = timezoneOffsetInHours >= 0 ? '+' : '-';
  var leadingZero = (Math.abs(timezoneOffsetInHours) < 10) ? '0' : '';

  //It's a bit unfortunate that we need to construct a new Date instance 
  //(we don't want _this_ Date instance to be modified)
  var correctedDate = new Date(this.getFullYear(), this.getMonth(), 
      this.getDate(), this.getHours(), this.getMinutes(), this.getSeconds(), 
      this.getMilliseconds());
  correctedDate.setHours(this.getHours() + timezoneOffsetInHours);
  var iso = correctedDate.toISOString().replace('Z', '');

  return iso + sign + leadingZero + Math.abs(timezoneOffsetInHours).toString() + ':00';
}

const pad = (function(num) {
  return function() {
    let str = String(num++);
    while (str.length < 4) str = "0" + str;
    return str;
  }
})(1);

fs.readdirSync('../public/memes/hololive/').forEach((filename, content) => {
  const formattedName = filename.replace(/^.*[\\/]/, '').replace(/[_]+/g, ' ')
  data.push({
    id: pad(),
    imgPath: 'memes/hololive/' + filename,
    title: formattedName,
    source: ["https://www.reddit.com/r/Hololive/comments/kbu0qk/akina/"],
    tags: ["Hololive"],
    userPosted: "Admin_Lumen"
  })
});
fs.readdirSync('../public/memes/animemes/').forEach((filename, content) => {
  const formattedName = filename.replace(/^.*[\\/]/, '').replace(/[_]+/g, ' ')
  data.push({
    id: pad(),
    imgPath: 'memes/animemes/' + filename,
    title: formattedName,
    source: ["https://www.reddit.com/r/Hololive/comments/kbu0qk/akina/"],
    tags: ["Animeme"],
    userPosted: "Admin_Lumen"
  })
});

const fileWrite = require('./fileWrite');
fileWrite.writeToFile(data);