//Audio

// var audioElement = new Audio("assets/theme.mp3");
// audioElement.autoplay = true;
// audioElement.load();

$(document).ready(function () {
    // Objects
    var characters = {

        "Cloud Strife": {
            name: "Cloud Strife",
            avatar: "assets/images/Cloud_Portrait.jpg",
            age: 21,
            hp: 120,
            attack: 12,
            counterAttack: 10
        },

        "Tifa Lockhart": {
            name: "Tifa Lockhart",
            avatar: "assets/images/Tifa_Portrait.jpg",
            age: 20,
            hp: 100,
            attack: 5,
            counterAttack: 8
        },

        "Barret Wallace": {
            name: "Barret Wallace",
            avatar: "assets/images/Barret_Portrait.jpg",
            age: 35,
            hp: 130,
            attack: 8,
            counterAttack: 11
        },

        "Sephiroth": {
            name: "Sephiroth",
            avatar: "assets/images/Sephiroth_Portrait.jpg",
            age: 27,
            hp: 170,
            attack: 20,
            counterAttack: 15
        }
    }

    var selectedCharacter; //this holds the selected character end user is playing as
    var enemiesAvailable = [] //this holds the remaining objects available to choose from as an enemy
    var defender; //this holds the selected enemy player has chosen from enemies available
    var turnCounter = 1;

    var killCount = 0;
    // var charAvailable = characters; //this holds all my objects as its value is available characters to choose from 


    var renderCharacter = function (character, renderArea) {
        // This block of code builds the character card, and renders it to the page.
        var charDiv = $("<div class='character' data-name='" + character.name + "'>");
        var charName = $("<div class='character-name'>").html(character.name);
        var charImage = $("<img alt='image' class='character-image'>").attr("src", character.avatar);
        var charHealth = $("<div class='character-health'>").text(character.hp);
        charDiv.append(charName).append(charImage).append(charHealth);
        $(renderArea).append(charDiv);
    };


    //this loads the characters into the character section to be clicked

    var initializeGame = function () {
        //loop through the characters object and call the render character function so each show in section 

        for (var key in characters) {
            renderCharacter(characters[key], "#clickable-characters")
        }
    };

    initializeGame();

    //This function will render the potential enemies. 

    var updateCharacter = function (charObj, areaRender) {
        $(areaRender).empty();
        renderCharacter(charObj, areaRender);
    };

    var renderEnemies = function (enemyArr) {
        for (var i = 0; i < enemyArr.length; i++) {
            renderCharacter(enemyArr[i], "#enemies-available")
        }
    };

    var renderMessage = function (message) {
        var gameMessageSet = $("#game-message");
        var newMessage = $("<div>").text(message);
        gameMessageSet.append(newMessage);

    };

    var restartGame = function (resultMessage) {
        //What is the location reload? 
        var restart = $("<button>Restart</button>").click(function () {
            location.reload();
        });

        var gameState = $("<div>").text(resultMessage);

        $("body").append(gameState);
        $("body").append(restart);
    };

    var clearMessage = function () {
        var gameMessage = $("#game-message");

        gameMessage.text("");
    };

    $("#clickable-characters").on("click", ".character", function () {

        var name = $(this).attr("data-name");
        console.log("You clicked someone");
        console.log(characters[name]);


        if (!selectedCharacter) {
            selectedCharacter = characters[name];

            for (var key in characters) {
                if (key !== name) {
                    enemiesAvailable.push(characters[key]);
                }
            }

            $("#clickable-characters").hide();

            updateCharacter(selectedCharacter, "#selected-character");
            renderEnemies(enemiesAvailable);
             }
        });


    $("#enemies-available").on("click", ".character", function () {
        var name = $(this).attr("data-name");

        if ($("#defender").children().length === 0) {
            defender = characters[name];
            updateCharacter(defender, "#defender");

            $(this).remove();
            clearMessage();
        }
    });

    $("#attack-button").on("click", function () {
        if ($("#defender").children().length !== 0) {
            var attackMessage = "You attacked " + defender.name + " for " + selectedCharacter.attack * turnCounter + " damage.";
            var counterAttackMessage = defender.name + " attacked you back for " + defender.counterAttack + " damage";
            clearMessage();

            defender.health -= selectedCharacter.attack * turnCounter;

            if (defender.hp > 0) {

                updateCharacter(defender, "#defender");

                renderMessage(attackMessage);
                renderMessage(counterAttackMessage);

                selectedCharacter.hp -= defender.counterAttack;

                updateCharacter(selectedCharacter, "#selected-character");

                if (selectedCharacter.hp <= 0) {
                    clearMessage();
                    restartGame("You have been defeated...GAME OVER!!!");
                    $("#attack-button").off("click");
                }
            }
            else {
                $("#defender").empty();

                var gameStateMessage = "You have defeated " + defender.name + ", you  can choose to fight another enemy.";
                renderMessage(gameStateMessage);

                killCount++

                if (killCount >= enemiesAvailable.length) {
                    clearMessage();
                    $("#attack-button").off("click");
                    restartGame("You Won!!! GAME OVER!!!");
                }
            }
            turnCounter++;
        }
        else {
            clearMessage();
            renderMessage("No enemy here.");
        }
    });
});

