const checkButton = document.getElementById('check-btn');
const inputText = document.getElementById('input-text');
const result = document.getElementById('result');

checkButton.addEventListener('click', () => {
    if (inputText.value == ""){
        window.alert("Please input a value");
    } else {
        const inputString = inputText.value;
        const inputArray = inputString.split('');
        const outputString = inputArray.toString().replace(/,/g,"");
        console.log(inputString + " " + outputString)
        if (inputString === outputString){
            result.innerText = `${inputString} it's a palindrome!`
        } else {
            result.innerText = `${inputString} it's not a palindrome.`
        }
    };
})