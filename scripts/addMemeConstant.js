const filename = "Aloe-Shamiko-Edit.gif";
const memeObj = require('./memeObjList');
const memeData = memeObj.getArray();


const pad = function(num) {
  let str = String(num++);
  while (str.length < 4) str = "0" + str;
  return str;
};


const lastElem = memeData[memeData.length - 1]; // last element
// get ID number from ID String
const lastElemID = parseInt(lastElem.id.match(/\d+/));
const formattedName = filename.replace(/^.*[\\/]/, '').replace(/[_]+/g, ' ')

memeData.push({
  id: pad(lastElemID + 1),
  imgPath: 'memes/hololive/' + filename,
  title: formattedName,
  source: ["https://www.reddit.com/r/Hololive/comments/kbu0qk/akina/"],
  tags: ["Hololive"],
  userPosted: "Admin_Lumen"
})

const fileWrite = require('./fileWrite');
fileWrite.writeToFile(memeData);