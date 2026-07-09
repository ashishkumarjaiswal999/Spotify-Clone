console.log('start');

async function main() {
    let a = await fetch("http://127.0.0.1:5500/assets/songs/");
    let b= await a.text();
    console.log(b);
}
main();