const names = [
    'Aaron',
    'Chris',
    'Christopher',
    'Cameron',
    'Sara',
    'Taylor',
    'Sammie',
    'Sophia',
    'Julian',
    'David',
    'Gabe',
    'Ced',
    'Cedric',
    'Justin',
    'Robert',
    'Somer',
    'Jennifer',
    'Ryann',
    'Tina',
    'Nick',
    'Doug',
    'Abby',
    'Ellie',
    'Joel',
    'Zack',
    'Brandon',
    'Alicia',
    'Courtney',
    'Mason',
    'Ken',
    'PJ',
    'Michael',
    'Elisa',
    'Tony',
    'Trey',
    'CJ',
    'Nick',
    'Nina',
    'Gareth',
    'Caleb',
    'Oscar',
];

const thoughtBody = [
    'Real Eyes, Realize, Real Lies',
    'Water is better at room temp!',
    'Alicia Keys\' No One>>>',
    'Is anyone else without power?',
    'Playstation 5 came in!!!!',
    'Woke up and went on a run',
    'Can\'t sleep :(',
    'I have now been to 6 National Parks',
    'Call Me If You Get Lost',
    'Because the Internet',
];

const possibleReactions = [
    'I disagree!',
    'I agree!',
    'This.',
    'Okay...?',
    'It\'s different, it\'s really different',
    'I don\'t know how you do it',
    'Call me back!',
];

// Get a random item from an array
const randomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Creates a full name from the list of names
const getRandomName = () =>
    `${randomArrItem(names)} ${randomArrItem(names)}`;

// Creates a random thought and includes a reaction
const getRandomThought = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            thoughtText: randomArrItem(thoughtBody),
            reactions: [...getReaction(2)],
        });
    }
    return results;
};

// Creates the reaction for the thought
const getReaction = (int) => {
    if (int === 1) {
        return randomArrItem(possibleReactions);
    }
    let results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            reactions: randomArrItem(possibleReactions),
            username: getRandomName(),
        });
    }
    return results;
}

module.exports = {getRandomName, getRandomThought}