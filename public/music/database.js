import fs from 'fs';

function createJSON(folderName) {
    const folderPath = 'music/' + folderName;
    const MP4_List = fs.readdirSync(folderName).filter((file) => file.endsWith('.mp4'));
    const songPath = MP4_List.map((file) => folderPath + '/' + file);
    const songImgPath = MP4_List.map((file) => folderPath + '/img/' + file.replace('.mp4', '.jpg'));
    const songName = MP4_List.map((file) => file.replace('.mp4', ''));
    const songSN = MP4_List.map((file) => songName.indexOf(file.replace('.mp4', '')) + 1);
    const songJson = songSN.map((sn, index) => {
        return {
            SN: sn,
            fullname: songName[index] + '.mp4',
            shortname: songName[index],
            path: songPath[index],
            img: songImgPath[index],
        };
    });
    console.log(songJson);
    if (!fs.existsSync('database')) fs.mkdirSync('database');
    fs.writeFileSync('database/' + folderName + '.json', JSON.stringify(songJson));
}

createJSON('Fifty Sixty');
createJSON('Seventy');
createJSON('Eighty');
createJSON('Ninety');
createJSON('2000');
createJSON('Latest Hits');
createJSON('Country');
createJSON('Karaoke');
createJSON('Special Occasion');
createJSON('Christmas Song');
