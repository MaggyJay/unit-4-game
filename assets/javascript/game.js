// Objects

var cloudStrife = {
    firstName : "Cloud",
    lastName: "Strife",
    age : 21,
    hp: 120,
    attackPower: function (ap) {
        ap += 2;

    },
    counterAttack: 10
}

console.log(cloudStrife.firstName);
cloudStrife.attackPower(6);
console.log(attackPower);