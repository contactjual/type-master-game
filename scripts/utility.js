
function hideElementById(elementId) {
    const homeScreen = document.getElementById(elementId);
    homeScreen.classList.add('hidden');
}
function showElementById(elementId) {
    const homeScreen = document.getElementById(elementId);
    homeScreen.classList.remove('hidden');
}


function getARandomAlphabet() {
    // create an aphabet array
    const aphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = aphabetString.split('');

    // get a random index betwen 0-25
    const randomNumberIndex = Math.round(Math.random() * 25)
    const alphabet = alphabets[randomNumberIndex]
    // console.log(randomNumberIndex ,alphabet)
    return alphabet;
}

function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function setOtherBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-red-700');
}

function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}
// function removeOtherBackgroundColorById(elementId) {
//     const element = document.getElementById(elementId);
//     element.classList.remove('bg-red-700');
// }
function resetOtherColorKeyByCls(elementClass) {
    const elementByClass = document.getElementsByClassName(elementClass);
    for (const key of elementByClass) {
        key.classList.remove('bg-red-700');
    }
}

function getTextElementValueById(elementId) {
    const currentScoreElement = document.getElementById(elementId);
    const currentScore = currentScoreElement.innerText;
    const currentScoreNum = parseInt(currentScore);
    return currentScoreNum;
}

function setTextElementById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getElementTextById(elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

function gameOver() {
    hideElementById('play-screen');
    showElementById('final-screen');

    // update final score
    // const finalScoreElement = document.getElementById('final-score')
    // const finalScore = finalScoreElement.innerText;
    // finalScore.innerText = newScore;
    const finalScore = getTextElementValueById('score');
    setTextElementById('final-score', finalScore);

    // clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById("current-apha");
    removeBackgroundColorById(currentAlphabet);
}