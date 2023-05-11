import fs from 'fs';

const folderPath = 'Latest Hits';
const folderPathFull = 'music/' + folderPath;

const LatestHits = fs.readdirSync(folderPath);

//i want to you create a json file of all items with .mp4 in the folder
// it should have the path, img and SN

//e.g SN = 1(auto),
// fullname = name of file with .mp4
// shortname = name of file without .mp4
//path = 'folderPath/fullname'
//img = 'folderPath/img/shortname.jpg'

const LatestHitsPath = LatestHits.filter((file) => file.endsWith('.mp4')).map(
    (file) => folderPathFull + '/' + file
);

const LatestHitsImg = LatestHits.filter((file) => file.endsWith('.mp4')).map(
    (file) => folderPathFull + '/img/' + file.replace('.mp4', '.jpg')
);

const LatestHitsName = LatestHits.filter((file) => file.endsWith('.mp4')).map((file) =>
    file.replace('.mp4', '')
);

const LatestHitsSN = LatestHits.filter((file) => file.endsWith('.mp4')).map(
    (file) => LatestHitsName.indexOf(file.replace('.mp4', '')) + 1
);

const LatestHitsJson = LatestHitsSN.map((sn, index) => {
    return {
        SN: sn,
        fullname: LatestHitsName[index] + '.mp4',
        shortname: LatestHitsName[index],
        path: LatestHitsPath[index],
        img: LatestHitsImg[index],
    };
});

console.log(LatestHitsJson);

//create json file and place in folderPath
fs.writeFileSync(folderPath + '/LatestHits.json', JSON.stringify(LatestHitsJson));
