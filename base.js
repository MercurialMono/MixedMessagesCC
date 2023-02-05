const firstLine = ['I believe in one thing', 'All that glitters', 'A stopped clock',  ];
const secondLine = ['and one thing only', 'is not', 'is right', ];
const thirdLine = ['the power of human will.', 'gold.', 'twice a day.', ];

function randomFirst(arr) {
    const first = arr[Math.floor(Math.random() * arr.length)];
    return first;
}

function randomSecond(arr) {
    const second = arr[Math.floor(Math.random() * (arr.length - 1))];
    return second;
}

function randomThird(arr) {
    const third = arr[Math.floor(Math.random() * (arr.length - 1))];
    return third;
}

console.log(randomFirst(firstLine) + ' ' + randomSecond(secondLine) + ' ' + randomThird(thirdLine));