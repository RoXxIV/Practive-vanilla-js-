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
/**post-it*/
let newItemForm = document.querySelector("input[type='submit']");
let list = document.querySelector("#post-it ul");
let newPostItText;
let deletePostIt = document.querySelector("#post-it ul");
/**ROMAN NUMBER____________
 **************************/
/*function */
function convertToRoman(num) {
    convert = ""
    if (romanInput.value > 1000 || romanInput.value <= 0) {
        convert = "💀"
    } else {
        romanSaisis = romanInput.value;
        for (let i = 0; i < number.length; i++) {
            while (number[i] <= romanSaisis) {
                convert += romanNumber[i];
                romanSaisis -= number[i];
            }
        }
    }

    romanResult.innerHTML = convert
}
/**POST-IT____________
 **************************/
//ajout dun nouveau post
function addPostIt(e) {
    newPostItText = document.querySelector("input[type = 'text']").value;
    list.innerHTML += `<li class=" col-10 col-sm-6 my-1">${newPostItText}</li>`;
    document.querySelector("input[type = 'text']").value = "";
    e.preventDefault();

}
function onClickdeletePostIt(event) {

    event.target.remove()
}

/**CODE PRINCIPALE_________
 **************************/
document.addEventListener("DOMContentLoaded", function () {
    /**Roman Number*/
    convertButton.addEventListener("click", convertToRoman);
    /**post-it */
    newItemForm.addEventListener("click", addPostIt)
    //deletePostIt.addEventListener("click", onClickdeletePostIt)
    deletePostIt.addEventListener("click", onClickdeletePostIt);

});
