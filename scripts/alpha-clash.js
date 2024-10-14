function play() {
    // to hide screen by adding hidden class
    const homeScreen = document.getElementById('home-screen');
    homeScreen.classList.add('hidden');

    // show the next screen
    const nextScreen = document.getElementById('play-screen')
    nextScreen.classList.remove('hidden');
    continueGame()
};



// utility file 
function continueGame() {
    // step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();

    // step-2: set alphabet
    const currenAlpha = document.getElementById('current-apha');
    currenAlpha.innerText=alphabet;

    // set baground color
    setBackgroundColorById(alphabet)
}



// keyboard events
function handleKeyboardButtonPress(){
    console.log('buttonPress')
}
document.addEventListener('keyup', handleKeyboardButtonPress)