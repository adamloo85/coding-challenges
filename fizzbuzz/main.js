// long verbose solution
function fizzBuzz(value) {
    const isFizz = value % 3 === 0;
    const isBuzz = value % 5 === 0;

    if (isFizz && isBuzz) {
        return 'FizzBuzz';
    }

    if (isFizz) {
        return 'Fizz';
    }

    if (isBuzz) {
        return 'Buzz';
    }
}

// one line solution
const betterFizzBuzz = value => `${value % 3 === 0 ? 'Fizz' : ''}${value % 5 === 0 ? 'Buzz' : ''}`

for (let i = 0; i < 100; i++) {
    const result = betterFizzBuzz(i);
    console.log(result);
}