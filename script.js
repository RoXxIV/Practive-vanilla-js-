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
    list.innerHTML += `<li>${newPostItText}</li>`;
    document.querySelector("input[type = 'text']").value = "";
    e.preventDefault();

}
function onClickdeletePostIt(event) {

    event.target.remove()
}
/**RANDOM QUOTE____________
 **************************/
function displayQuote(quote) {
    document.querySelector("#quote p").innerHTML = `"${quote.content}"`
    document.querySelector("#quote span").innerHTML = quote.originator.name
    console.log(quote)
}
function newQuoteOnClick() {

    ajaxJsonApi(displayQuote)
}
function ajaxJsonApi(callback) {
    fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "5580bb8b22mshf8aff281808d06ep16f60cjsn3c82a544bf84",
            "x-rapidapi-host": "quotes15.p.rapidapi.com"
        }
    })
        .then((response) => response.json())
        .then((datas) => callback(datas));
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
    document.querySelector("#newQuote").addEventListener("click", newQuoteOnClick)

});
