const checkButton = document.getElementById('check-btn');
const inputText = document.getElementById('text-input');
const result = document.getElementById('result');
const regEx = /[^a-zA-Z 123456789]/g;

checkButton.addEventListener('click', () => {
    if (inputText.value == ""){
        window.alert("Please input a value");
    } else {
        const inputString = inputText.value;
        const stringArray = inputString.replace(/\s/g, '').replace(regEx, '').split('');
        const reversedString = stringArray.reverse().join().replace(regEx, '').toLowerCase();
        const originalString = stringArray.reverse().join().replace(regEx, '').toLowerCase();
        console.log(originalString + ' ' + reversedString);
        if (originalString == reversedString) {
            result.innerText = `${inputString} is a palindrome!`
        } else {
            result.innerText = `${inputString} is not a palindrome.`
        }
    }
})
