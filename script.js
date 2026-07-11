async function songsfetch() {
    let fetchobj = await fetch("/assets/Songs/");
    let txt = await fetchobj.text();
    let folder = document.createElement("div");
    folder.innerHTML = txt;
    let data = folder.getElementsByTagName("a");
    let songs = [];
    for (let index = 0; index < data.length; index++) {
        if (data[index].href.endsWith(".mp3")) {
            songs.push(data[index].href);
        }
    }
    return songs;
}

async function main() {
    let songarray = await songsfetch();
    let audio = new Audio(songarray[0]);
    let pl = document.querySelector(".play")
    pl.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            pl.src = "/assets/pause.svg";
        } else {
            audio.pause();
            pl.src = "/assets/play.svg";
        }
    })
    console.log(songarray);
    let plist = document.querySelector(".oip");
    for (let index = 0; index < songarray.length; index++) {
        let u = songarray[index].split("/Songs/")[1];
        let k = decodeURIComponent(u);
        let names = k.replaceAll(".mp3", "")
        plist.innerHTML += `<li class="normalhov music">${names}</li>`
    }
    for (let index = 0; index < songarray.length; index++) {
        let duration = document.querySelector(".dur")
        let i = document.querySelector(".songname");
        let o = songarray[index].split("/Songs/")[1];
        let r = decodeURIComponent(o);
        let j = r.replaceAll(".mp3", " ")
        i.innerHTML = j;

        audio.addEventListener("timeupdate", () => {
            console.log(audio.duration)
            let mins = Math.floor(audio.currentTime / 60);
            let omins = Math.floor(audio.duration / 60);
            let secs = Math.floor(audio.currentTime % 60);
            let osecs = Math.floor(audio.duration % 60);
            if (secs < 10) {
                secs = "0" + secs;
            }
            if (mins < 1) {
                mins = "0" + mins;
            }
            duration.innerHTML = `${mins}:${secs}/${omins}:${osecs}`;

        })
    }
    let kik=document.querySelector(".oip").getElementsByTagName("li");
    console.log(kik)
    for (let index = 0; index < songarray.length; index++) {
        kik[index].addEventListener("click",()=>{
            audio.src=songarray[index];
            audio.play();
            if (audio.paused) {
                pl.src="assets/play.svg"
                
            } else {
                pl.src="assets/pause.svg"
            }
        })
        
    }
}
main();

