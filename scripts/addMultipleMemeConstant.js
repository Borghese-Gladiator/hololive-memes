const filenameList = [
  {
    filename: 'Miko_Vibing.gif',
    source: [
      'https://www.reddit.com/r/Hololive/comments/j17fjm/reminder_that_a_certain_elite_is_waiting_to/?utm_medium=android_app&utm_source=share'
    ],
  },
  {
    filename: 'Coco_Lets_gtfo.gif',
    source: [
      'https://www.reddit.com/r/Hololive/comments/j1ee1h/just_a_smug_kaichou/?utm_medium=android_app&utm_source=share'
    ],
  },
  {
    filename: 'Miko_Will_Blow_Up_Those_Guys.jpg',
    source: [
      'https://twitter.com/keru720/status/1310871668126961667?s=03'
    ],
  },
  {
    filename: 'fubuki_cheerful.png',
    source: [
      'https://www.reddit.com/r/Hololive/comments/j23y5a/hololive_gamers/?utm_medium=android_app&utm_source=share',
    ],
  },
  {
    filename: 'Korone_Cheerful_Agreement.png',
    source: [
      'https://www.reddit.com/r/Hololive/comments/j23y5a/hololive_gamers/?utm_medium=android_app&utm_source=share',
    ],
  },
  {
    filename: 'Okayu_Smug_Point.png',
    source: [
      'https://www.reddit.com/r/Hololive/comments/j23y5a/hololive_gamers/?utm_medium=android_app&utm_source=share',
    ],
  },
  {
    filename: 'Mio_Cheerful_Hug.png',
    source: [
      'https://www.reddit.com/r/Hololive/comments/j23y5a/hololive_gamers/?utm_medium=android_app&utm_source=share',
    ],
  },
  {
    filename: 'Korone_Happy_Chainsaw.gif',
    source: [
      'https://www.pixiv.net/en/artworks/82163461'
    ]
  },
  {
    filename: 'Korone_Tear_Sad.gif',
    source: [
      'https://www.reddit.com/r/Hololive/comments/j2kdzm/korone_wants_something/?utm_medium=android_app&utm_source=share',
      'https://twitter.com/0725akaba/status/1310874459289522178'
    ]
  },
  {
    filename: 'Coco_Sleepy.png',
    source: [
      'https://www.reddit.com/r/Hololive/comments/j3j0db/daily_cocos_fanart_challenge_day_3/?utm_medium=android_app&utm_source=share',
      'https://twitter.com/potadragon/status/1311797720521138177'
    ]
  },
  {
    filename: 'Coco_Just_Woke_Up.png',
    source: [
      'https://www.reddit.com/r/Hololive/comments/j49ub4/daily_cocos_fanart_challenge_day_4/?utm_medium=android_app&utm_source=share',
      'https://twitter.com/potadragon/status/1312251361329725440'
    ]
  },
  {
    filename: 'Ina_Wiggle_Wiggle.gif',
    source: [
      'https://www.reddit.com/r/Hololive/comments/j5b1af/wiggle_wiggle/?utm_medium=android_app&utm_source=share',
      'https://twitter.com/potadragon/status/1312251361329725440'
    ]
  },
  {
    filename: 'Pekora_Pain_Lost_Ice_Cream.jpg',
    source: [
      'https://www.reddit.com/r/Hololive/comments/j5f6oa/pain_peko/?utm_medium=android_app&utm_source=share',
      'https://twitter.com/0725akaba/status/1273730708213809152'
    ]
  },
  {
    filename: 'Pekora_Happy_Ice_Cream.png',
    source: [
      'https://www.reddit.com/r/Hololive/comments/j5hks8/happy_peko/',
      'https://twitter.com/0725akaba/status/1286305818770436098'
    ]
  },
  {
    filename: 'Coco_Kanata_maybe_nsfw.jpg',
    source: [
      'https://www.pixiv.net/en/artworks/83174498'
    ]
  },
  {
    filename: 'Flare_Nosebleed.jpg',
    source: [
      'https://twitter.com/Tropical_umiusi/status/1312723441439576064?s=03'
    ]
  },
  
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