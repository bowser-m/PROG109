var msg = "Input a string of at least 5 words with 25 or more characters. (-1 to exit)";
var str = getInput(); // Initial string input
var arr = stringMethods(); // Do string methods and get array of words

document.write("<hr>");
arrayMethods();

function getInput() {
    var input = prompt(msg);
    while(input != -1) {
        if(input.length >= 25) {
            if(input.split(' ').length >= 5) return input;
        }
        alert("Incompatible string.");
        input = prompt(msg);
    }
}

/*
 * String methods. Returns the array of words from the string.
 */
function stringMethods() {
    output(str); // #2
    output(str.toLowerCase()); // #3
    output(str.toUpperCase()); // #4
    output(str.length); // #5
    output(str.substring(5, 10)); // #6
    output(str.substr(8, 5)); // #7
    str += " Here's another string, with twenty-five+ characters.";
    output(str); // #8
    str = str.replace(/,/g, "");
    return str.replace(/\./g, "").toLowerCase().split(' '); // #9
}

function arrayMethods() {
    outputArray(arr); // #1
    output(arr.length); // #2
    arr.shift();
    outputArray(arr); // #3
    arr.push("banana");
    outputArray(arr); // #4
    arr.reverse();
    outputArray(arr); // #5
    arr[2] = "stardust";
    outputArray(arr); // #6
    arr.sort();
    outputArray(arr); // #7
}

/*
 * Writes a string to the page inside <p> tags.
 */
function output(s) {
    document.write("<p>" + s + "</p>");
}

/*
 * Converts an array to a readable string and outputs to the page.
 */
function outputArray(a) {
    var s = "[";
    for(i = 0; i < a.length; i++) {
        s += a[i];
        if(i < a.length - 1) s += ", ";
    }
    s += "]";
    output(s);
}