// async function getsongs() {
//     let a = await fetch("http://127.0.0.1:5500/assets/songs/");
//     let b = await a.text();
//     let c = document.createElement("div");
//     c.innerHTML = b;
//     let e = c.getElementsByTagName("a");
//     let song = [];
//     for (let index = 0; index < e.length; index++) {
//         const element = e[index];
//         if (element.href.endsWith(".mp3")) {
//             song.push(element.href);
//         }
//     }
//     return song;
// }



// async function main() {
//     let songs = await getsongs();
//     let audio = new Audio(songs[1]);
//     let songli = document.querySelector(".oip")
//     for (let index = 0; index < songs.length; index++) {
//         let k = songs[index].split("/songs/")[1];
//         let u = k.replaceAll("%20", " ")
//         let t = u.replaceAll("%5", " ");
//         let y = u.replaceAll(".mp3", ".")
//         songli.innerHTML += `<li class="music normalhov">&nbsp; ${y} </li>`;
//     }

//     let byn = document.querySelector(".play");
//     byn.addEventListener("click", () => {
//         //To play and pause using play btn
//         if (audio.paused) {
//             audio.play();
//             byn.src = "/assets/pause.svg"


//         } else {
//             audio.pause();
//             byn.src = "/assets/play.svg"
//         }
//     })

//     let f = document.querySelector(".songlist").getElementsByTagName("li");
//     for (let index = 0; index < f.length; index++) {
//         f[index].addEventListener("click", () => {
//             audio.src = songs[index];
//             audio.play();

//             let j = document.querySelector(".name");

//             j.innerHTML = decodeURIComponent(audio.src.split("/songs/")[1])
//                 .replace(".mp3", "");
//             let h = document.querySelector(".dur");
//             audio.addEventListener("timeupdate", () => {
//                 let minutes = Math.floor(audio.currentTime / 60);
//                 let seconds = Math.floor(audio.currentTime % 60);

//                 if (seconds < 10) {
//                     seconds = "0" + seconds;
//                 }
//                 h.innerHTML = `${minutes}:${seconds}`;
//             })
//         })
//     }



// }
// main();




async function songsfetch() {
    let fetchobj=await fetch("/assets/Songs/");
    let txt=await fetchobj.text();
    let folder=document.createElement("div");
    folder.innerHTML=txt;
    let data=folder.getElementsByTagName("a");
    let songs=[];
    for (let index = 0; index < data.length; index++) {
        if (data[index].href.endsWith(".mp3")) {
            songs.push(data[index].href);
        }
    }
    return songs;
}

async function main() {
    let songarray=await songsfetch();
    let audio=new Audio(songarray[0]);
    let pl=document.querySelector(".play")
    pl.addEventListener("click",()=>{
        if (audio.paused) {
            audio.play();
            pl.src="/assets/pause.svg";
        } else {
            audio.pause();
            pl.src="/assets/play.svg";
        }
    })
    console.log(songarray);
    let plist=document.querySelector(".oip");
    for (let index = 0; index < songarray.length; index++) {
        let u=songarray[index].split("/Songs/")[1];
        let k=decodeURIComponent(u);
        let names=k.replaceAll(".mp3",".")
        plist.innerHTML+=`<li class="normalhov music">${names}</li>`
    }
    
   

}
main();