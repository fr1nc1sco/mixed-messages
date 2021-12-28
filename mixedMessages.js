const mOne = ["Hello friend! ", "Hola amigo! ", "Aloha hoa! ", "Konnichiwa tomodachi! ", "Bonjour mon ami! "];
const mTwo = ["How are you? ", "Como estas? ", "Howzit? ", "Genkideska? ", "Ca va? "];
const mThree = ["I hope you are well. ", "Espero que estes bien. ", "Maika'i mana'olana au ia 'oe. ", "Anata ga genkidearu koto o negatte imasu. ", "J’espère que vous allez bien. "];
const mFour = ["Goodbye!", "Adios!", "Aloha!", "Sayonara!", "Au revoir!"];
const mArray = [mOne, mTwo, mThree, mFour];

function messageGenerator() {
    let message = '';
    mArray.forEach(array => {
        message += array[Math.floor(Math.random()*array.length)];
    })
    return message;
}

console.log(messageGenerator());