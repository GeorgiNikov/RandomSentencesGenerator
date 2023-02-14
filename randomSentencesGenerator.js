function randomSentenceGenerator() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let names = ["Peter", "Michell", "Jane", "Steve","Stefan","George"];
    let places = ["Sofia", "Plovdiv", "Varna", "Burgas","Vidin","Asenovgrad","Svilengrad"];
    let verbs = ["eats", "holds", "sees", " plays with", "brings","threw",];
    let nouns = ["stones", "cakes", "apple", "laptop", "bikes","phone"];
    let adverbs = ["slowly", "digitaly", "warmly", "sadly", "rapidly"];
    let details = ["near the river", "at home", "in the park",""];

    function getRandomWord(array) {
        let word = array[Math.floor(Math.random() * array.length)];
        return word;
    }

    let randomName = getRandomWord(names);
    let randomPlace = getRandomWord(places);
    let randomVerb = getRandomWord(verbs);
    let randomNoun = getRandomWord(nouns);
    let randomAdverb = getRandomWord(adverbs);
    let randomDetail = getRandomWord(details);

    let who = `${randomName} from ${randomPlace}`;
    let action = `${randomAdverb} ${randomVerb} ${randomNoun}`;
    let sentence = `${who} ${action} ${randomDetail}`;

    console.log('Hello, this is your first random generator sentence:');
    console.log(sentence);

    let recursiveAsyncReadLine = function () {
        readline.question(`Click [Enter] to generate a new one` ) 
    }
}
randomSentenceGenerator()