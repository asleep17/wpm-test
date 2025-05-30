const words = 'apple mirror yellow storm river magic climb light dream bottle chair silent flash paper quick ghost jacket stone whisper bounce'.split(' ');
const wordsCount = words.length;

function randomword() {
    const randomIndex = Math.floor(Math.random() * wordsCount);
    return words[randomIndex];
}
function formatWord(words){
    return `<div class="word><span class="letter">${words.split('').join(`</span><span class='letter>`)}</span></div>`
}

function newgame() {
    const wordsContainer = document.getElementById('words');
    wordsContainer.innerHTML = '';
    for (let i = 0; i < 200; i++) {
        wordsContainer.innerHTML += randomword() + ' ';
    }
}

newgame();
