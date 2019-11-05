// non-recursive
function reverse(word) {
    let reversed = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
    }

    return reversed;
}

console.log(reverse("adam") === "mada");

// recursive
function recursiveReverse(str) {
    if (str.length === 1) {
        return str;
    }

    const lastIdx = str.length - 1;
    return str[lastIdx] + recursiveReverse(str.slice(0, lastIdx));
}

console.log(recursiveReverse("orange") === "egnaro");
