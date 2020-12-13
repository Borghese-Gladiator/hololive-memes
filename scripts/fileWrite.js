
function writeToFile(data) {
  const util = require('util'); // writes ['https://twitter.com/#!/101Cookbooks', 'http://www.facebook.com/101cookbooks']
  const fs = require('fs');
  
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
}

exports.writeToFile = writeToFile;