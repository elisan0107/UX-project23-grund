const fortuneArray = [];

window.addEventListener('load', () => {
    updateRandomPoem();
});

async function updateRandomPoem() {
    let resp = await fetch('https://poetrydb.org/random')
    let json = await resp.json()
    let poem = document.getElementById('poem')
    let arrayOfLines = json[0].lines;
    poem.innerText = 
    poem.style.visibility = 'visible';
    console.log(arrayOfLines);
}
