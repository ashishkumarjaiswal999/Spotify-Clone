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
//     console.log(songs);
//     let audio = new Audio(songs[]);
//     audio.play();
//     audio.addEventListener("loadedmetadata", () => {
//         console.log(audio.duration);
//     })
// }    
// main();





console.log("hi")
async function getsongs() {
    let a = await fetch("/assets/songs");
    let b = await a.text();
    let c = document.createElement("div");
    c.innerHTML = b;
    let d = c.getElementsByTagName("a");
    let s = [];
    for (let index = 0; index < d.length; index++) {
        const element = d[index];
        if (element.href.endsWith(".mp3")) {
            s.push(element.href);
        }
    }
    return s;
}
async function main() {
    let z=await getsongs();
    console.log(z);
    let song=new Audio(z[1]);
    song.play()
    
}
main();