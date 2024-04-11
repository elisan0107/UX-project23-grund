const fortuneArray = [];

window.addEventListener('load', () => {
    updateRandomPoem();
});

async function updateRandomPoem() {
    let resp = await fetch('https://poetrydb.org/random')
    let json = await resp.json()
    let poem = document.getElementById('poem')
    let arrayOfLines = json[0].lines;
    /*
        Lägg nu till varje rad i arrayOfLines till
        div-elementet
    */
    array.forEach(element => {      //?
        arrayOfLines,               //?
    });
    poem.innerText = arrayOfLines;
    poem.style.visibility = 'visible';
    console.log(arrayOfLines);
}
