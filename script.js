let currSong = new Audio();
let songsarray = [];
let currFolder;




async function getSongs(folder) {




    currFolder = folder;
    let getSongs1 = await fetch(`/${folder}/`);
    let getSongs2 = await getSongs1.text();
    let getSongs3 = document.createElement("div");
    getSongs3.innerHTML = getSongs2;
    let getSongs4 = getSongs3.getElementsByTagName("a");
    songsarray = [];
    for (let index = 0; index < getSongs4.length; index++) {
        if (getSongs4[index].href.endsWith(".mp3")) {
            songsarray.push(getSongs4[index].href.split(`/${folder}/`)[1]);

        }
    }

    let songlist1 = document.querySelector(".oip");
    songlist1.innerHTML = "";
    for (let index = 0; index < songsarray.length; index++) {
        let clean1 = decodeURIComponent(songsarray[index]);
        let clean2 = clean1.replaceAll(".mp3", "");
        songlist1.innerHTML += `<li class ="nhov music">${clean2} </li>`;

    }
    let eachsong = document.querySelector(".oip").getElementsByTagName("li");
    for (let index = 0; index < songsarray.length; index++) {
        eachsong[index].addEventListener("click", () => {
            playsong(songsarray[index]);

        })


    }
    return songsarray;


}
function playsong(songname) {
    let playbtn = document.querySelector(".play");
    currSong.src = `/${currFolder}/` + songname;
    currSong.play();
    playbtn.src = "assets/pause.svg";
}
getSongs("assets/Songs/Alec");



async function displayAlbums() {
    let albums = [];
    let cards = document.querySelector(".cards");
    let displayAlbums1 = await fetch("assets/Songs/");
    let displayAlbums2 = await displayAlbums1.text();
    let displayAlbums3 = document.createElement("div");
    displayAlbums3.innerHTML = displayAlbums2
    let displayAlbums4 = displayAlbums3.getElementsByTagName("a")
    for (let index = 0; index < displayAlbums4.length; index++) {
        if (displayAlbums4[index].href.includes("/assets/Songs/")) {
            albums.push(displayAlbums4[index].href.split("/Songs/")[1]);
        }

    }
    for (let index = 0; index < albums.length; index++) {

        let albums1 = await fetch(`assets/Songs/${albums[index]}/info.json`);
        let albums2 = await albums1.json();
        cards.innerHTML += `<div data-folder=${albums[index]} class="card">
        <img src="assets/Songs/${albums[index]}/cover.jpg" alt="" class="im">
            <h2 class="txt1">${albums2.title}</h2>
            <p class="txt2">${albums2.description}</p>
            </div>`
    }
    for (let index = 0; index < albums.length; index++) {
        albums[index].addEventListener("click", () => {
            console.log()
        })

    }


}
displayAlbums()