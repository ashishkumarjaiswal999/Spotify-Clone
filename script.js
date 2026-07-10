async function getsongs() {
    let a = await fetch("http://127.0.0.1:5500/assets/songs/");
    let b = await a.text();
    let c = document.createElement("div");
    c.innerHTML = b;
    let e = c.getElementsByTagName("a");
    let song = [];
    for (let index = 0; index < e.length; index++) {
        const element = e[index];
        if (element.href.endsWith(".mp3")) {
            song.push(element.href);
        }
    }
    return song;
}



async function main() {
    let songs = await getsongs();
    let audio = new Audio(songs[1]);

    audio.addEventListener("loadedmetadata", () => {
        console.log(audio.duration, audio.textTracks, audio.currentTime);
    })
    let byn = document.querySelector(".play");
    byn.addEventListener("click", () => {
        //To play and pause using play btn
        if (audio.paused) {
            audio.play()
        } else {
            audio.pause();
        }
        //currentTime
        console.log(audio.currentTime);
    })
    
}
main();


