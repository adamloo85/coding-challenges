function fizzbuzz(value) {
    const isFizz = value % 3;
    const isBuzz = value % 5;

    if (isFizz && isBuzz) {
        return 'Fizzbuzz';
    }

    if (isFizz) {
        return 'Fizz';
    }

    if (isBuzz) {
        return 'Buzz';
    }
}

for (let i = 0; i < 100; i++) {
    const result = fizzbuzz(i);
    console.log(result);
}