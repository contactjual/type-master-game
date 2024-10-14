
function getARandomAlphabet(){
    // create an aphabet array
    const aphabetString='abcdefghijklmnopqrstuvwxyz';
    const alphabets = aphabetString.split('');

    // get a random index betwen 0-25
    const randomNumberIndex = Math.round(Math.random()*25)
    const alphabet = alphabets[randomNumberIndex]
    // console.log(randomNumberIndex ,alphabet)
    return alphabet;
}



function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}