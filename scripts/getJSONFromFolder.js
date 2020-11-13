/* 
  INPUT: path to folders (line )
  OUTPUT: data.json file as JS object to use in a constants.js
*/

const fs = require('fs');
const util = require('util'); // writes ['https://twitter.com/#!/101Cookbooks', 'http://www.facebook.com/101cookbooks']
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

fs.readdirSync('../src/memes/hololive/').forEach((filename, content) => {
  const formattedName = filename.replace(/^.*[\\/]/, '').replace(/[_]+/g, ' ')
  data.push({
    imgPath: 'hololive/' + filename,
    title: formattedName,
    source: "",
    tags: ["Hololive"],
    userPosted: "Admin_M"
  })
});
fs.readdirSync('../src/memes/animemes/').forEach((filename, content) => {
  const formattedName = filename.replace(/^.*[\\/]/, '').replace(/[_]+/g, ' ')
  data.push({
    imgPath: 'animemes/' + filename,
    title: formattedName,
    source: "",
    tags: ["Hololive"],
    userPosted: "Admin_M"
  })
});

data.forEach((val) => {
  const datePosted = `new Date("${new Date().toJSON()}")`;
  val.datePosted = datePosted;
  return val;
})


// Change Date data to be usable (in export default JS constants file)
const input = util.inspect(data);  // util.inspect(data) --> returns Pretty JSON data
let finalObjString = "";
let i = j = 0;

// iterate per line of pretty JSON data
while ((j = input.indexOf('\n', i)) !== -1) {
  let lineText = input.substring(i, j);
  // remove quotes from  datePosted text
  if (lineText.startsWith('    datePosted')) {
    lineText = lineText.replace(/[']+/g, '');
  }
  finalObjString += lineText + '\n';
  i = j + 1;
}
finalObjString += input.substring(i);


// Write Data to File
fs.writeFileSync('./data.json', finalObjString, 'utf-8');