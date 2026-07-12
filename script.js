async function fetcher() {
    let fetch1 = await fetch("/assets/Songs");
    let fetch2 = await fetch1.text();
    let fetch3 = document.createElement("div");
    fetch3.innerHTML = fetch2;
    let fetch4 = fetch3.getElementsByTagName("a")
    let fetch5 = [];
    for (let index = 0; index < fetch4.length; index++) {
        if (fetch4[index].href.endsWith(".mp3")) {
            fetch5.push(fetch4[index].href)
        }

    }
    return fetch5;
}
async function main() {
    let songarray = await fetcher();
    let audio = new Audio(songarray[0]);
    let jplay = document.querySelector(".play");
    let jdur = document.querySelector(".dur");
    let jlist = document.querySelector(".oip");
    let jsongname = document.querySelector(".songname");
    let jeachsong = document.querySelector(".oip").getElementsByTagName("li")

    jplay.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            jplay.src = "/assets/pause.svg";
        } else {
            audio.pause();
            jplay.src = "/assets/play.svg";
        }
    })


    audio.addEventListener("loadedmetadata", () => {
        let orgmins = Math.floor(audio.duration / 60);
        let orgsecs = Math.floor(audio.duration % 60);
        jdur.innerHTML = `0:00/${orgmins}:${orgsecs}`;
    })
    let songname1 = songarray[0];
    let songname2 = songname1.split("/Songs/")[1];
    let songname3 = decodeURIComponent(songname2)
    songname4 = songname3.replaceAll(".mp3", "");
    jsongname.innerHTML = songname4;


    audio.addEventListener("timeupdate", () => {
        let mins = Math.floor(audio.currentTime / 60);
        let secs = Math.floor(audio.currentTime % 60);
        let orgmins = Math.floor(audio.duration / 60);
        let orgsecs = Math.floor(audio.duration % 60);
        if (secs < 10) {
            secs = "0" + secs;
        }
        jdur.innerHTML = `${mins}:${secs}/${orgmins}:${orgsecs}`;
    })

    for (let index = 0; index < songarray.length; index++) {
        let songname1 = songarray[index];
        let songname2 = songname1.split("/Songs/")[1];
        let songname3 = decodeURIComponent(songname2)
        songname4 = songname3.replaceAll(".mp3", "");
        jlist.innerHTML += `<li class="normalhov music">${songname4}</li>`;
    }
    console.log(jeachsong)
    for (let index = 0; index < songarray.length; index++) {
        jeachsong[index].addEventListener("click", () => {
            audio.src = songarray[index];
            if (audio.paused) {
                audio.play();
                jplay.src = "/assets/pause.svg";
            } else {
                audio.pause();
                jplay.src = "/assets/play.svg";
            }
            let songname1 = songarray[index];
            let songname2 = songname1.split("/Songs/")[1];
            let songname3 = decodeURIComponent(songname2)
            songname4 = songname3.replaceAll(".mp3", "");
            jsongname.innerHTML = songname4;
        })

    }
    document.addEventListener("keydown", (e) => {
        if (e.key === " ")
            if (audio.paused) {
                audio.play();
                jplay.src = "/assets/pause.svg";
            } else {
                audio.pause();
                jplay.src = "/assets/play.svg";
            }
    })
}
main()