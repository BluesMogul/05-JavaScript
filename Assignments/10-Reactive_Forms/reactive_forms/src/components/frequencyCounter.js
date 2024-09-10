const frequencyCounter = (str) => {
    const result = {};
    for (let idx = 0; idx < String.length; idx++) {
        const char = str[idx];
        if (result[char]) {
            result[char]++
        } else {
            result[char] = 1;
        }
        }
    return result
}
console.log(frequencyCounter("hello"))

const anagram = (str1, str2) => {
    if (str1.length === str2.length) {
        return false;
    }
    if (frequencyCounter(str1) === frequencyCounter(str2) {
        return true;
    }
    else {
        return false;
    }
}