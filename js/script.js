// Chiedere all’utente di inserire una parola:
// Creare una funzione per capire se la parola inserita è palindroma

function palindrome(str) {
    let re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    let len = str.length;
    for (let i = 0; i < len/2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

const button = document.getElementById('button');

button.addEventListener('click', function() {

    let userWord = document.getElementById('word').value;

    let isPalindrome = palindrome(userWord);

    console.log(isPalindrome);

    let text = 'La parola è palindroma';

    if (isPalindrome) {
        
    } else {
        text = 'La parola non è palindroma';
    }
    
    document.getElementById('output-1').innerHTML = text;
});


