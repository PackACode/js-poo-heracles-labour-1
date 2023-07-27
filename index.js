// First Labour : Heracles vs Nemean Lion
// use your Figher class here

const Fighter = require('./src/Fighter.js');

const Fighters = [
    Heracles = new Fighter("🧔 Heracles",20,6),
    NemeanLion = new Fighter("🦁 Nemean Lion",11,13),
];

let Round = 0

while (Fighters[0].life > 0 && Fighters[1].life > 0) {

    // Fight

    Heracles.Fight(NemeanLion);
    NemeanLion.Fight(Heracles);

    // Round Info

    Round += 1

    console.log("⏱️ Round: #" + Round)

    console.log(Fighters[0].name + ": ❤️" + Fighters[0].life)
    console.log(Fighters[1].name + ": ❤️" + Fighters[1].life)

};

if (Fighters[1].IsAlive == true) {

    console.log("⏱️ Round: #Result")
    console.log(Fighters[0].name + " was defeated by " + Fighters[1].name)
    

} else {

    console.log("⏱️ Round: #Result")
    console.log(Fighters[0].name + " was defeated by " + Fighters[1].name)

};