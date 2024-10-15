function play() {
    hideElementById('home-screen');
    hideElementById('final-screen');
    showElementById('play-screen');

    // reset score and life 
    setTextElementById('score', 0);
    setTextElementById('life', 5);



    continueGame()
};



// utility file 
function continueGame() {
    // step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();

    // step-2: set alphabet
    const currenAlpha = document.getElementById('current-apha');
    currenAlpha.innerText = alphabet;

    // set baground color
    setBackgroundColorById(alphabet)
}



// keyboard events
function handleKeyboardButtonPress(event) {
    const gamerPressed = event.key;

    if(gamerPressed==='Escape'){
        gameOver();
    }

    // get the expected to press
    const currentAlphaElement = document.getElementById('current-apha');
    const currentAlpha = currentAlphaElement.innerText;

    // chack matched or not
    if (gamerPressed === currentAlpha) {

        const currentSco = getTextElementValueById('score');
        const newScore = currentSco + 1;
        setTextElementById('score', newScore);


        // -----------------------------------------
        // update score
        // const currentScoreElement = document.getElementById('score');
        // const currentScore = currentScoreElement.innerText;
        // const currentScoreNum = parseInt(currentScore);
        // currentScoreElement.innerText = newScore;

        removeBackgroundColorById(currentAlpha);
        continueGame();
    }
    else {
    
        const currentLi = getTextElementValueById('life');
        const newLife = currentLi - 1;
        setTextElementById('life', newLife);

        // ---------------------------------
        // reduce life
        // const currentLifeElement = document.getElementById('life');
        // const currentLife = currentLifeElement.innerText;
        // const currentLifeNum = parseInt(currentLife);
        // currentLifeElement.innerText = newLife;

        if (newLife === 0) {

            gameOver();

            // -----------------------------------
            // show the final screen 
            // const nextScreen = document.getElementById('play-screen')
            // nextScreen.classList.add('hidden');

            // const finalScreen = document.getElementById('final-screen');
            // finalScreen.classList.remove('hidden');
        }
    }
}
document.addEventListener('keyup', handleKeyboardButtonPress)