const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordDumpEl1 = document.getElementById("password-dump-el1")
let passwordDumpEl2 = document.getElementById("password-dump-el2")
let generatePasswordsButton = document.getElementById("generatePasswordsButton")

function getRandomCharacters() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

generatePasswordsButton.addEventListener("click", function() {
    function password1() {
        let randomPassword1 = ""
        for (let i = 0; i < 16; i++) {
             randomPassword1 += getRandomCharacters()
        }
        return randomPassword1
    }
const generatePassword1 = password1()
passwordDumpEl1.textContent = generatePassword1

    function password2() {
        let randomPassword2 = ""
        for (let i = 0; i < 16; i++) {
             randomPassword2 += getRandomCharacters()
        }
        return randomPassword2
    }
const generatePassword2 = password2()    
passwordDumpEl2.textContent = generatePassword2
})
