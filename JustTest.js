/**
 * Created by yue on 12/08/15.
 */

//Ctor example in Js
function Rabbit(type) {
    this.type = type;
}

var killerRabbit = new Rabbit("killer");
var blackRabbit = new Rabbit("black");

console.log(blackRabbit.type);

Rabbit.prototype.speak = function (line) {
    console.log("The " + this.type + " rabbit says '" + line + "'");
}
blackRabbit.speak("Doom..");
killerRabbit.speak("I'm a killer");