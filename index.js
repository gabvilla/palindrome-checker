const checkButton = document.getElementById('check-btn');
const inputText = document.getElementById('input-text');
const result = document.getElementById('result');

checkButton.addEventListener('click', () => {
    if (inputText.value == ""){
        window.alert("Please input a value");
    } else {
        const inputString = inputText.value;
        const stringArray = inputString.replace(/\s/g, '').replace(/[^\w\s]/gi, '').split('');
        const reversedString = stringArray.reverse().join().replace(/[^\w\s]/gi, '');
        const originalString = stringArray.join().replace(/[^\w\s]/gi, '');
        console.log(originalString + ' ' + re)
        if (originalString == reversedString) {
            result.innerText = `${inputString} it's a palindrome!`
        } else {
            result.innerText = `${inputString} it's not a palindrome.`
        }
    }
})