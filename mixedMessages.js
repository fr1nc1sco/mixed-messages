const gOne = ["Hello friend! ", "Hola amigo! ", "Aloha hoa! ", "Konnichiwa tomodachi! ", "Bonjour mon ami! "];
const gTwo = ["How are you? ", "Como estas? ", "Howzit? ", "Genkideska? ", "Ca va? "];
const gThree = ["I hope you are well. ", "Espero que estes bien. ", "Maika'i mana'olana au ia 'oe. ", "Anata ga genkidearu koto o negatte imasu. ", "J’espère que vous allez bien. "];
const gFour = ["Bye!", "Adios!", "Aloha!", "Sayonara!", "Au revoir!"];


function randomArrayString(array) {
    return array[Math.floor(Math.random()*array.length)];
}

function messageGenerator() {
    let message = randomArrayString(gOne);
    message += randomArrayString(gTwo);
    message += randomArrayString(gThree);
    message += randomArrayString(gFour);
    return message;
}

console.log(messageGenerator());
