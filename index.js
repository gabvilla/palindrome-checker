const checkBtn = document.getElementById('check-btn');
const inputText = document.getElementById('input-text');
const result = document.getElementById('result');

checkBtn.addEventListener('click', () => {
    if (inputText.value == ""){
        window.alert("Please input a value");
    } else {
        const inputString = inputText.value;
    };
})