const filenameList = [
  {
    filename: 'Calli_Gura_Party.png',
    source: [
      'https://www.reddit.com/r/Hololive/comments/iu0q4r/the_perfect_background_doesnt_exi/?utm_medium=android_app&utm_source=share',
      'https://twitter.com/PokeyPokums/status/1306261569052049408?s=09'
    ],
  },
  {
    filename: 'Amelia_Happy_Injection.png',
    source: [
      'https://www.reddit.com/r/Hololive/comments/iu0q4r/the_perfect_background_doesnt_exi/?utm_medium=android_app&utm_source=share',
      'https://twitter.com/PokeyPokums/status/1306261569052049408?s=09'
    ],
  },
  {
    filename: 'Kiara_Hungry_KFP.png',
    source: [
      'https://www.reddit.com/r/Hololive/comments/iu0q4r/the_perfect_background_doesnt_exi/?utm_medium=android_app&utm_source=share',
      'https://twitter.com/PokeyPokums/status/1306261569052049408?s=09'
    ],
  },
  {
    filename: 'Ina_Drawing_Content.png',
    source: [
      'https://www.reddit.com/r/Hololive/comments/iu0q4r/the_perfect_background_doesnt_exi/?utm_medium=android_app&utm_source=share',
      'https://twitter.com/PokeyPokums/status/1306261569052049408?s=09'
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