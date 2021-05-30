let myYoutubeVideoOne = {
    title: 'Loops in javascript',
    videoLength: 15,
    videoCreator: 'Dipesh Chaudhari',
    videoDescription: 'this is the video description and a long one'
}

let myYoutubeVideoTwo = {
    title: 'Loops in javascript',
    videoLength: 10,
    videoCreator: 'Dipesh Chaudhari',
    videoDescription: 'this is the video description and a long one'
}

// console.log(myYoutubeVideo);
// console.log(`Hey new Video on ${myYoutubeVideo.title} by ${myYoutubeVideo.videoCreator}`);

let changeVideoLength = function (myObject) {
    return {
        formatOne: `Time of this video is: ${myObject.videoLength + 2}`,
        formatTwo: `Time of this video is: ${myObject.videoLength + 1}`
    }
}

let adOne = (changeVideoLength(myYoutubeVideoOne));
console.log(adOne.formatOne);