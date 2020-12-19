/**VARIABLE____________
 **************************/
/**Roman Number*/
let romanInput = document.querySelector("#roman input");
let convertButton = document.querySelector("#roman button")
let romanSaisis;
let romanResult = document.querySelector("#romanResult span");
const romanNumber = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
const number = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
let convert = "";

/**ROMAN NUMBER____________
 **************************/
/*function */
function convertToRoman(num) {
    convert = ""
    romanSaisis = romanInput.value;
    for (let i = 0; i < number.length; i++) {
        while (number[i] <= romanSaisis) {
            convert += romanNumber[i];
            romanSaisis -= number[i];
        }
    }
    romanResult.innerHTML = convert
}

/**CODE PRINCIPALE_________
 **************************/
document.addEventListener("DOMContentLoaded", function () {
    /**Roman Number*/
    convertButton.addEventListener("click", convertToRoman);
});