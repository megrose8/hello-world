'use strict'

function getName(){
    let userName = prompt ('❤️ Hi! What is your name? ❤️');
    console.log (userName);
    document.write ('Hi ' + userName + '  Welcome to PetSpace!');    
} 

function getPet(){
let userPet = prompt("Do you have any pets? (yes/no)");
return userPet;
}

function whilePet(){

  let userPet;
  while (true) {
    userPet = getPet();
    // if (userPet===''){
      //   userPet = prompt("Please enter yes or no");
      // } 
      
      if(userPet === "yes") {
        document.write('We are so happy to have another proud pet-parent!');
        break;
      } else if (userPet === "no"){ 
        document.write("I'm so sorry to hear that you have no pets!");
        break;
      } else {
            alert("Please enter 'yes' or 'no'");
        }
      }
      
    }

function cuteAlert (){
alert('⚠️🥰be warned. you are at risk for cuteness overload...🥰⚠️');
}
function howManyDogs(){
        let numOfDogs = prompt('How many Kiwis would you like to see?');
      
        for(let i = 0; i < numOfDogs; i++){
          document.write("<img class='loop-img' src='kiwi-sunflower.jpg' alt='little dog in front of sunflowers smiling' >")
        }
}