// Objects

var cloudStrife = {
    firstName : "Cloud",
    lastName: "Strife",
    age : 21,
    hp: 120,
    calcAttackPower: function (ap) {
        console.log('This is a test to see if Im calling the function correctly.');

       var ap = 6;
       return ap += ap;


    },
    counterAttack: 10
}
// cloudStrife.calcAttackPower();
console.log(cloudStrife.calcAttackPower());
// console.log(cloudStrife.calcAttackPower); this syntax prints the function 
// console.log(cloudStrife.calcAttackPower()); this actuallyp performs the function but also gives an undefined reuslt, maybe because function is empty? 
console.log(cloudStrife.firstName);

