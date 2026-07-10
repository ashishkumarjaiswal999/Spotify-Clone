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
    let songli = document.querySelector(".oip")
    songli.innerHTML=""
    console.log(songs)
    for (let index = 0; index < songs.length; index++) {
        let k=songs[index].split("/songs/")[1];
        let u=k.replaceAll("%20"," " )
        let t=u.replaceAll("%5"," ");
        let y=u.replaceAll(".mp3",".")
        songli.innerHTML += `<li> ${y} </li>`;

    }


    audio.addEventListener("loadedmetadata", () => {
        console.log(audio.duration, audio.currentTime);
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


