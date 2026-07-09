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
    console.log(songs);
    let audio=new Audio(songs[0]);
    audio.play();
}
main();