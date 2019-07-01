//Audio
// The below doesn't do anything but I'm assuming it's because there are web browser things in place to prevent audio from auto playing. Even when using the audioElement.play() it doesnt load. It only works when it's within a jquery function. 
var audioElement = new Audio("assets/theme.mp3");
audioElement.autoplay = true;
audioElement.load();


// Objects

var characters = {

    cloudStrife: {
        firstName: "Cloud",
        lastName: "Strife",
        avatar: "assets/images/Cloud_Portrait.jpg",
        age: 21,
        hp: 120,
        calcAttackPower: function (ap) {
            console.log('This is a test to see if Im calling the function correctly.');

            var ap = 12;
            return ap += ap;
        },
        counterAttack: 10
    },

    tifaLockhart: {
        firstName: "Tifa",
        lastName: "Lockhart",
        avatar: "assets/images/Tifa_Portrait.jpg",
        age: 20,
        hp: 100,
        calcAttackPower: function (ap) {
            var ap = 5;
            return ap += ap;
        },
        counterAttack: 8
    },

    barretWallace: {
        firstName: "Barret",
        lastName: "Wallace",
        avatar: "assets/images/Barret_Portrait.jpg",
        age: 35,
        hp: 130,
        calcAttackPower: function (ap) {
            var ap = 8;
            return ap += ap;
        },
        counterAttack: 11
    },

    sephiroth: {
        firstName: "Seiphiroth",
        lastName: undefined,
        avatar: "assets/images/Sephiroth_Portrait.jpg",
        age: 27,
        hp: 170,
        calcAttackPower: function (ap) {
            var ap = 20;
            return ap += ap;
        },
        counterAttack: 15
    }
}

var selectedCharacter; //this holds the selected character end user is playing as
var enemiesAvailable= [] //this holds the remaining objects available to choose from as an enemy
var defender; //this holds the selected enemy player has chosen from enemies available
var charAvailable = characters; //this holds all my objects as its value is available characters to choose from 

// Begin Jquery Code 
$(document).ready(function () {

    $('#enemies-available').hide();
    $('#enemy-character').hide();



    $('#Cloud').on('click', function () {
        alert('Hey, you picked Cloud!');//simply testing to make sure the function works

        // audioElement.play(); this works
        

        $('#Tifa').removeClass("main-characters").addClass("remaining-characters");
        $('#Barret').removeClass("main-characters").addClass("remaining-characters");
        $('#Sephiroth').removeClass("main-characters").addClass("remaining-characters");
        $('#Tifa').appendTo(".remaining-character1");
        $('#Barret').appendTo(".remaining-character2");
        $('#Sephiroth').appendTo(".remaining-character3");
        
        $('#enemies-available').show();

        //The above technically works as expected but the text doesn't move. I'm not quite worried about that because information from the object is supposed to be showing like the name property for example. But this is just another example of how I'm unsure on how to link objects together with html along with my jquery. 


    });

      //The Cloud click function can be an example of how I expect the code to function and look from a front-end perspective. But how on earth can I do this for other characters? Let's say I wanted to select Tifa from remaining characters. Could I do an if/else statement? But how can I do an if-else statement when one of the arguments is a .click? Or if instead of playing Cloud I wanted to play as Sephiroth-- do I need if else using the above code? There has to be an eaiser way than that. 

      //For the most DRY code possible I need a function that recognizes that the images in the html are links to objects. Am I doing getElementById? Or perhaps I would do the attr() method somehow? 


     // audioElement.loop(); looping doesn't work regardless if this is in the jquery function or not
})


//DEBUGGING AREA

console.log(cloudStrife.calcAttackPower());
console.log(tifaLockhart.calcAttackPower());
console.log(barretWallace.calcAttackPower());
console.log(sephiroth.calcAttackPower());
// console.log(cloudStrife.calcAttackPower); this syntax prints the function 
// console.log(cloudStrife.calcAttackPower()); this actually performs the function but also gives an undefined result, maybe because function param is empty? 
console.log(cloudStrife.firstName);

