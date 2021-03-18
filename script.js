//define variables


var lower = 'abcdefghijklmnopqrstuvwxyz';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '1234567890';
var special = '!@#$^&%*()+=-[]{}|:<>?,.';

var pwd = '';

var lowerSelection = false;
var upperSelection = false;
var numberSelection = false;
var specialSelection = false;


//function to generate a random password

function generate() {
    var confirmLength = '';
//asking user to input desired character length
    while (isNaN(confirmLength) || confirmLength < 8 || confirmLength > 128) {
        confirmLength = prompt("What length would you like the password to be? (Between 8 to 128 characters)");
        if (confirmLength === null) {
            break;
        }
    }
//getting user input for which character types to use for the password
    if (confirmLength) {
        if (confirm("Would you like to use lowercase characters?") == true) {
            lowerSelection = true
        } 

        if (confirm("Would you like to use uppercase characters?") == true) {
            upperSelection = true
        }

        if (confirm("Would you like to use numerical characters?") == true) {
            numberSelection = true
        }

        if (confirm("Would you like to use special characters?") == true) {
            specialSelection = true
        }

        
        
//if none of the character types are selected, alerts the user to choose at least one
        if (lowerSelection === false && upperSelection === false && specialSelection === false && numberSelection === false) {
            alert("At least one character type must be selected")
        }
    }
//generate random password
    var characters = '';
    characters += (lowerSelection ? lower : '');
    characters += (upperSelection ? upper : '');
    characters += (numberSelection ? numbers : '');
    characters += (specialSelection ? special : '');

    pwd = password(confirmLength, characters);

    document.getElementById("password").innerHTML = pwd;

}

function password(l, characters) {
    var pwd = '';
    for (var i = 0; i < l; ++i) {
        pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
}

//function to copy password to computer clipboard
function copied() {
    document.getElementById("password").select();
    document.execCommand("copy");
    alert("The password has been copied to you clipboard!");
}






