async function fetcher() {
    let fetch1 = await fetch("assets/Songs/");
    let fetch2 = await fetch1.text();
    let fetch3 = document.createElement("div");
    fetch3.innerHTML = fetch2;
    let fetch4 = fetch3.getElementsByTagName("a");
    let arr = [];
    for (let index = 0; index < fetch4.length; index++) {
        if (fetch4[index].href.endsWith(".mp3")) {
            arr.push(fetch4[index].href);
        }
    }
    return arr;

}
async function main() {
    let songsarray = await fetcher();
    let song = new Audio;
    let playbtn = document.querySelector(".play");
    let playlist = document.querySelector(".oip");
    let eachsong = document.querySelector(".oip").getElementsByTagName("li");
    let songname = document.querySelector(".songname");
    let duration = document.querySelector(".dur");
    let mutebtn = document.querySelector(".mute");

    song.src = songsarray[0];





    document.addEventListener("keydown", (e) => {
        if (e.key == " ") {
            if (song.paused) {
                song.play();
                playbtn.src = "assets/pause.svg"

            }
            else {
                song.pause();
                playbtn.src = "assets/play.svg"
            }
        }
    })
    playbtn.addEventListener("click", () => {
        if (song.paused) {
            song.play();
            playbtn.src = "assets/pause.svg"
        } else {
            song.pause();
            playbtn.src = "assets/play.svg"

        }
    })
    for (let index = 0; index < songsarray.length; index++) {
        let playlist1 = songsarray[index];
        let playlist2 = playlist1.split("/Songs/")[1];
        let playlist3 = decodeURIComponent(playlist2);
        let playlist4 = playlist3.replaceAll(".mp3", "");
        playlist.innerHTML += `<li class="normalhov music">${playlist4}</li>`;

    }

    for (let index = 0; index < songsarray.length; index++) {
        eachsong[index].addEventListener("click", () => {
            song.src = songsarray[index];
            if (song.paused) {
                song.play();
                playbtn.src = "assets/pause.svg"
            } else {
                song.pause();
                playbtn.src = "assets/play.svg"
            }
            songname1 = decodeURIComponent(songsarray[index]);
            songname2 = songname1.split("/Songs/")[1];
            songname3 = songname2.replaceAll(".mp3", "");
            songname.innerHTML = songname3;


        })
    }
    song.addEventListener("timeupdate", () => {
        let sec = Math.floor(song.currentTime % 60);
        let min = Math.floor(song.currentTime / 60);
        let osec = Math.floor(song.duration % 60);
        let omin = Math.floor(song.duration / 60);

        duration.innerHTML = `${min}:${sec}/${omin}:${osec}`;
    })
    document.addEventListener("keydown", (e) => {
        if (e.key == "m" || e.key == "M") {
            if (song.volume == 0) {
                song.volume = 1;
                mutebtn.src = "assets/mute.svg";
            } else {
                song.volume = 0;
                mutebtn.src = "assets/unmute.svg";
            }
        }
    })
    mutebtn.addEventListener("click",()=>{
        if (song.volume==0) {
            song.volume=1;
            mutebtn.src="assets/mute.svg";
        } else {
            song.volume=0;
            mutebtn.src="assets/unmute.svg";
        }
      
    })




}
main();
