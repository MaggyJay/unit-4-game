// Objects

var cloudStrife = {
    firstName : "Cloud",
    lastName: "Strife",
    age : 21,
    hp: 120,
    calcAttackPower: function (ap) {
        console.log('This is a test to see if Im calling the function correctly.');

       var ap = 12;
       return ap += ap;


    },
    counterAttack: 10
}

var tifaLockhart = {
    firstName: "Tifa",
    lastName: "Lockhart",
    age: 20,
    hp: 100, 
    calcAttackPower: function(ap) {
        var ap = 5;
        return ap += ap;
    },
    counterAttack: 8
}

var barretWallace = {
    firstName: "Barret",
    lastName: "Wallace",
    age: 35, 
    hp: 130,
    calcAttackPower: function(ap) {
        var ap= 8;
        return ap += ap;
    },
    counterAttack: 11
}

var sephiroth = {
    firstName: "Seiphiroth",
    lastName: undefined,
    age: 27, 
    hp: 170,
    calcAttackPower: function(ap){
        var ap= 20;
        return ap += ap;
    },
    counterAttack: 15
}


// cloudStrife.calcAttackPower();
console.log(cloudStrife.calcAttackPower());
console.log(tifaLockhart.calcAttackPower());
// console.log(cloudStrife.calcAttackPower); this syntax prints the function 
// console.log(cloudStrife.calcAttackPower()); this actuallyp performs the function but also gives an undefined reuslt, maybe because function is empty? 
console.log(cloudStrife.firstName);

