const messages = ['hello', 'goodbye', 'aloha', 'hola', 'konnichiwa'];
let randIndex = 0;
for (let i = 0; i < messages.length; i++) {
    randIndex = Math.floor(Math.random()*messages.length);
    console.log(messages[randIndex]);
}