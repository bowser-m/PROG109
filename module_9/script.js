var person = {
    firstName: "Michael",
    lastName: "Bowser",
    age: 22,
    id: "928560",
    major: "Computer Science",
    gender: "M",
    interests: ["programming", "gaming", "running"],
    getFullName: function() {
        return person.firstName + " " + person.lastName;
    },
    getNameIDMajor: function() {
        return "<p>" + person.firstName + " " + person.lastName
                + "<br>ID: " + person.id + "<br>Major: " + person.major
                + "</p>";
    }
}

document.write(person.getFullName());
document.write(person.getNameIDMajor());

// Generates a random number between 500-1000.
function rand() {
    var num = Math.floor((Math.random() * 500) + 501);
    return num;
}

person.scholarship = rand();

document.write("<p>You are receiving a scholarship in the amount of $" + person.scholarship + "</p>");

function getClass() {
    classes = ["Warrior", "Knight", "Mage"];
    c = Math.floor(Math.random() * 3);
    return classes[c];
}

person.classType = getClass();

document.write("<p>Your class type is: " + person.classType + "</p>");

/* DOCUMENT OBJECT MODEL */

// text = document.getElementById("fav").innerHTML;
// alert(text);
document.getElementById("fav").innerHTML = "My favorite movie is Thor: Ragnarok.";

document.getElementById("none").setAttribute("class", "red");
document.getElementById("red").setAttribute("class", "blue");