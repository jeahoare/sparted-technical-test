function mixPictures(picsList) {
    const len = picsList.length;
    let mixedPics = [...picsList];

    for (let index = 0; index < len; index++) {
        const picSrc = mixedPics[index];
        const indexRandom = Math.floor(Math.random() * len);
        mixedPics[index] = mixedPics[indexRandom];
        mixedPics[indexRandom] = picSrc;
    }
    return mixedPics;
}

module.exports = mixPictures;
