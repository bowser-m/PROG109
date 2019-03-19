// *** Base Stat Declarations *** //

function rand(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

class Race {
    constructor(name, hp, stam, speed, ageMin, ageMax) {
        this.name = name;
        this.health = hp;
        this.stamina = stam;
        this.speed = speed;
        this.ageMin = ageMin;
        this.ageMax = ageMax;
    }

    age() {
        return rand(this.ageMin, this.ageMax);
    }

    toString() {
        return "<strong class=\"name\">" + this.name + "</strong><br><br>"
                + "<strong>HP</strong>: " + this.health
                + "<br><strong>Stamina</strong>: " + this.stamina
                + "<br><strong>Speed</strong>: " + this.speed
                + "<br><strong>Age</strong>: " + this.age();
    }
}

class Ability {
    constructor(name, pMin, pMax, aMin, aMax) {
        this.name = name;
        this.powMin = pMin;
        this.powMax = pMax;
        this.accMin = aMin;
        this.accMax = aMax;
    }

    power() {
        return rand(this.powMin, this.powMax);
    }

    accuracy() {
        return rand(this.accMin, this.accMax);
    }

    toString() {
        return "<strong>" + this.name + "</strong>: " + this.power() + "% <em>power</em> | " + this.accuracy() + "% <em>accuracy</em>";
    }
}

class ClassType {
    constructor(name, ab0, ab1) {
        this.name = name;
        this.ability0 = ab0;
        this.ability1 = ab1;
    }

    toString() {
        return "<strong class=\"name\">" + this.name + "</strong><br><br>"
                + this.ability0.toString() + "<br>"
                + this.ability1.toString();
    }
}

class Character {
    constructor(race, classType) {
        this.race = race;
        this.classType = classType;
    }

    toString() {
        return this.race.toString() + "<hr>" + this.classType.toString();
    }
}

// *** Code *** //

// Races
var race_Elf = new Race("Elf", 100, 150, 1.2, 50, 250);
var race_Human = new Race("Human", 125, 125, 1.0, 24, 65);
var race_Dwarf = new Race("Dwarf", 200, 100, 0.8, 100, 1000);
var races = [race_Elf, race_Human, race_Dwarf];

// Abilities
var archer_ab0 = new Ability("Volley", 50, 200, 75, 100);
var archer_ab1 = new Ability("Power Shot", 100, 250, 25, 100);
var swordsman_ab0 = new Ability("Flurry", 50, 150, 75, 100);
var swordsman_ab1 = new Ability("Heavy Slash", 150, 200, 25, 100);

// Classes
var class_archer = new ClassType("Archer", archer_ab0, archer_ab1);
var class_swordsman = new ClassType("Swordsman", swordsman_ab0, swordsman_ab1);
var classes = [class_archer, class_swordsman];

var char = new Character(races[rand(0, 2)], classes[rand(0, 1)]);

document.getElementById("stats").innerHTML = char.toString();