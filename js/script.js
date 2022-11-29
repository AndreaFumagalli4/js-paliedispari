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

const button = document.getElementById('button-1');

button.addEventListener('click', function() {

    let userWord = document.getElementById('word').value;

    let isPalindrome = palindrome(userWord);

    console.log(isPalindrome);

    let text = 'La parola è palindroma';

    if ( ! isPalindrome) {
        text = 'La parola non è palindroma';
    } 
    document.getElementById('output-1').innerHTML = text;
});


// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer attraverso una funzione.
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari attraverso un'altra funzione
// Dichiariamo chi ha vinto.

/**
 * 1. Fare scegliere all'utente pari o dispari e fargli inserire un numero da 1 a 5;
 * 2. Creare una funzione in cui si generi un numero random (QUESTO SARA` IL NUMERO SCELTO DAL COMPUTER);
 * 3. Sommare i due numeri
 * 4. Creare una funzione che stabilisca se la somma dei numeri sia pari o dispari
 * 5. Stabiliamo chi ha vinto.
 */

// 2.

function getComputerRandomNumber (numMin, numMax){
    let randomNumber = Math.floor ( Math.random() * ( numMax - numMin + 1 ) + numMin );
    return randomNumber;
}

// 4.

function isSumOddOrEven (numberSum){

    ( numberSum % 2 === 0 ) ? 'pari' : 'dispari';
    
    return numberSum;
}

const buttonTwo = document.getElementById('button-2');

buttonTwo.addEventListener('click', function() {

    let userChoice = document.getElementById('odd-or-even').value;

    let userNumber = parseInt(document.getElementById('number').value, 10);
    console.log('Numero scelto dall\'utente ' + userNumber);

    let computerNumber = getComputerRandomNumber(1, 5);
    console.log('Numero generato dal computer ' + computerNumber);

    let sum = userNumber + computerNumber;
    console.log('Somma dei due numeri ' + sum);

    let sumResult = isSumOddOrEven (sum);
    console.log(sumResult);

    let quote = 'L\'utente ha vinto';
    
    if ( sumResult !== userChoice ) {
        quote = 'Il computer ha vinto!';
    } 

    document.getElementById('output-2').innerHTML = quote;
})
