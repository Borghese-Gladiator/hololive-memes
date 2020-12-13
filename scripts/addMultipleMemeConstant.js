const filenameList = [
  {
    filename: 'gura_scary.gif',
    source: [
      'https://www.reddit.com/r/Hololive/comments/ixkakf/holoen_animations_part_2/?utm_medium=android_app&utm_source=share',
      'https://twitter.com/chrone_co/status/1307615622931427328'
    ],
  },
  {
    filename: 'Kiara_In_Love.gif',
    source: [
      'https://www.reddit.com/r/Hololive/comments/ixkakf/holoen_animations_part_2/?utm_medium=android_app&utm_source=share',
      'https://twitter.com/chrone_co/status/1308330533701562368'
    ],
  },
  {
    filename: 'Amelia_Mustache_Sparkle.gif',
    source: [
      'https://www.reddit.com/r/Hololive/comments/ixkakf/holoen_animations_part_2/?utm_medium=android_app&utm_source=share',
      'https://twitter.com/chrone_co/status/1307974670986010625'
    ],
  },
  {
    filename: 'Mori_Rap.gif',
    source: [
      'https://www.reddit.com/r/Hololive/comments/ixkakf/holoen_animations_part_2/?utm_medium=android_app&utm_source=share',
      'https://twitter.com/chrone_co/status/1307263495977664512'
    ],
  },
  {
    filename: 'Ina_Nod_in_Agreement.gif',
    source: [
      'https://www.reddit.com/r/Hololive/comments/ixkakf/holoen_animations_part_2/?utm_medium=android_app&utm_source=share',
      'https://twitter.com/chrone_co/status/1307254790909353984'
    ],
  }
]
const memeObj = require('./memeObjList');
let memeData = memeObj.getArray();

const pad = function(num) {
  let str = String(num++);
  while (str.length < 4) str = "0" + str;
  return str;
};


filenameList.forEach((obj, idx) => {
  const lastElem = memeData[memeData.length - 1]; // last element
  // get ID number from ID String
  const lastElemID = parseInt(lastElem.id.match(/\d+/));
  const formattedName = obj.filename.replace(/^.*[\\/]/, '').replace(/[_]+/g, ' ')
  
  memeData.push({
    id: pad(lastElemID + 1),
    imgPath: 'memes/hololive/' + obj.filename,
    title: formattedName,
    source: obj.source,
    tags: ["Hololive"],
    userPosted: "Admin_Lumen"
  });
  console.log(memeData.length);
  
});

const fileWrite = require('./fileWrite');
fileWrite.writeToFile(memeData);