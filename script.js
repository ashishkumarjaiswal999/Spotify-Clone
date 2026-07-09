console.log('start');

async function main() {
    let a = await fetch("http://127.0.0.1:5500/assets/songs/");
    let b= await a.text();
    let c=document.createElement("div");
    c.innerHTML=b;
    let e=c.getElementsByTagName("a");
    console.log(e); 
}
main();



