const gOne = ["Hello friend! ", "Hola amigo! ", "Aloha hoa! ", "Konnichiwa tomodachi! ", "Bonjour mon ami! "];
const gTwo = ["How are you? ", "Como estas? ", "Howzit? ", "Genkideska? ", "Ca va? "];
const gThree = ["I hope you are well. ", "Espero que estes bien. ", "Maika'i mana'olana au ia 'oe. ", "Anata ga genkidearu koto o negatte imasu. ", "J’espère que vous allez bien. "];
const gFour = ["Bye!", "Adios!", "Aloha!", "Sayonara!", "Au revoir!"];


function messageGenerator() {
    let randIndex = Math.floor(Math.random()*gOne.length);
    let message = gOne[randIndex];
    randIndex = Math.floor(Math.random()*gTwo.length);
    message += gTwo[randIndex];
    randIndex = Math.floor(Math.random()*gThree.length);
    message += gThree[randIndex];
    randIndex = Math.floor(Math.random()*gFour.length);
    message += gFour[randIndex];
    return message;
}


console.log(messageGenerator());
