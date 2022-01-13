var iWord = words.length;
var size = 5;
var aInitial = "abcdefghijklmnopqrstuvwxyz";
function start() {
    var values = score(aInitial, "among");
    var a = 0;
    var mo = 0;
    while (a < values.length) {
        if (values[a] > values[mo]) {
            mo = a;
        }
        a = a + 1;
    }
    console.log(words[mo]);
}
function score(alphabet, word) {
    var list = filter(alphabet, word);
    var scores = [];
    var a = 0;
    var b = 0;
    while (a < iWord) {
        scores[a] = 0;
        if (meets(alphabet, word, words[a])) {
            b = 0;
            while (b < size) {
                scores[a] = scores[a] + list[b][alphabet.indexOf(words[a].substring(b, b + 1))];
                b = b + 1;
            }
        }
        a = a + 1;
    }
    return scores;
}
function filter(alphabet, word) {
    var letters = [[],[],[],[],[]];
    var a = 0;
    var b = 0;
    var c = 0;
    while (a < letters.length) {
        b = 0;
        while (b < alphabet.length) {
            letters[a][b] = 0;
            c = 0;
            while (c < iWord) {
                if (meets(alphabet, word, words[c])) {
                    if (words[c].substring(a, a + 1) == alphabet.substring(b, b + 1)) {
                        letters[a][b] = letters[a][b] + 1;
                    }
                }
                c = c + 1;
            }
            letters[a][b] = letters[a][b]/iWord;
            b = b + 1;
        }
        a = a + 1;
    }
    return letters;
}
function meets(alphabet, word, guess) {
    var out = true;
    var a = 0;
    while (a < guess.length) {
        if (word.substring(a, a + 1) == "-") {
            if (!alphabet.includes(guess.substring(a, a + 1))) {
                out = false;
            }
        } else {
            if (word.substring(a, a + 1) != guess.substring(a, a + 1)) {
                out = false;
            }
        }
        a = a + 1;
    }
    return out;
}