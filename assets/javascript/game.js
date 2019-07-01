//Audio
var audioElement = new Audio("assets/theme.mp3");
audioElement.autoplay=true;
audioElement.load();
 

// Objects

 var characters = {

    cloudStrife :  {
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

    tifaLockhart : {
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

    barretWallace : {
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

    sephiroth : {
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
 
 //audioElement.setAttribute("src", "assets/theme.mp3");
 
// Begin Jquery Code 
// Selecting Main Character
$(document).ready(function () {

    // $('audioElement').play()
    // //Link objects to js

    var renderOne = function(character, renderArea, makeChar) {
        //character: obj, renderArea: class/id, makeChar: string
        var charDiv = $("<div class='character' data-name='" + character.name + "'>");
        var charName = $("<div class='character-name'>").text(character.name);
        var charImage = $("<img alt='image' class='character-image'>").attr("src", character.avatar);
        var charHealth = $("<div class='character-health'>").text(character.health);
        charDiv.append(charName).append(charImage).append(charHealth);
    }

    // function charObj (characters) {
    //     characters.firstName= name;
    //     characters.hp= hp;
    //     characters.calcAttackPower()= ap;
    //     characters.counterAttack=  ca;
    //     characters.avatar= avatar;

    // }
    

    $('#Cloud').on('click', function () {
        alert('Hey, you picked Cloud!');
        
        $('#Cloud' ).removeClass("main-characters").addClass("remaining-characters");
         $('#enemies-available').show(); //this works but the others dont?
         $('charDiv').appendTo('#enemy-chracter');
         $('.main-character').hide();

    });

    

    // $('.character').on('click', function () {
    //     $('#attack-button').hide();
    // });

    // $('button').on('click', function () {
    //     alert('This is a working button');
    // });



    // $("#main-characters").on("click", function () {

    //     $("img").click(function () {
    //         $(this).css({ border: '10px solid #000' });
    //     })

    //     // $("#remaining-characters").replaceWith ("#main-characters");
    //     // $("#main-characters").appendTo("#remaining-characters");
    //     // alert('This is to test if this function works!');
    //     // $("img").click(function() {
    //     // $(this).css ({border: '10px solid #000'});
    //     // })

    // });
   
})


// cloudStrife.calcAttackPower();
console.log(cloudStrife.calcAttackPower());
console.log(tifaLockhart.calcAttackPower());
console.log(barretWallace.calcAttackPower());
console.log(sephiroth.calcAttackPower());
// console.log(cloudStrife.calcAttackPower); this syntax prints the function 
// console.log(cloudStrife.calcAttackPower()); this actuallyp performs the function but also gives an undefined reuslt, maybe because function is empty? 
console.log(cloudStrife.firstName);

