'use strict'

function getName(){
    let userName = prompt ('❤️ Hi! What is your name? ❤️');
    console.log (userName);
    document.write ('Hi ' + userName + '  Welcome to PetSpace!');    
} 

function getPet(){
let response = prompt("Do you have any pets? (yes/no)").toLowerCase();
    if (response === "yes") {
        document.write("🐱A proud pet-parent!🐶");
    }
    else {
        document.write("No pets?? I'm so sorry to hear that.😣");
    }
}
function cuteAlert (){
alert('⚠️🥰be warned. you are at risk for cuteness overload...🥰⚠️');
}
