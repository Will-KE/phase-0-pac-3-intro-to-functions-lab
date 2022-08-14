function shout(){
    return "Hello".toUpperCase();
}

function whisper() {
    return "HELLO".toLowerCase();
}

function logShout(string) {
    console.log("hello".toUpperCase());
}

function logWhisper(string) {
    console.log("HELLO".toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    if(string === string.toLowerCase()) {
        return `I can't hear you!`    
}else if (string === string.toUpperCase()) {
return `YES INDEED!`
}else if(string === `Let's have dinner together!`) {
return `I would love to!`
}
}