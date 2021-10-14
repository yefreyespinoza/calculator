var signState  = false
var drawSignState = true
var sign = ''
var firstNumber = ''
var secondNumber = ''
var resultDiv = document.querySelector('.result')
//operations 
function drawSign (s) {
  if (secondNumber) {
    drawSignState = false
  }
  if (firstNumber && drawSignState){
    sign = s
    signState = true
    resultDiv.innerHTML = `<p>${firstNumber} ${sign} ${secondNumber}</p>`
  }
}
function add () {drawSign('+')}
function subtract () {drawSign('-')}
function mulyiply () {drawSign('x')}
function divide () {drawSign('/')}

//numbers
function drawNumber (n) {
  !signState ? firstNumber += n : secondNumber += n
  resultDiv.innerHTML = `<p>${firstNumber} ${sign} ${secondNumber}</p>`
}
function one () {drawNumber('1')}
function two () {drawNumber('2')}
function three () {drawNumber('3')}
function four () {drawNumber('4')}
function five () {drawNumber('5')}
function six () {drawNumber('6')}
function seven () {drawNumber('7')}
function eight () {drawNumber('8')}
function nine () {drawNumber('9')}
function cero () {drawNumber('0')}

function clear () {
  sign = ''
  signState = false;
  drawSignState = true;
  firstNumber = '';
  secondNumber = '';
}
function clearResult () {
  clear();
  resultDiv.innerHTML = `00`;
}
function equalFunction() {
  if (secondNumber && sign) {
    const numbers = {
    firstNumber: parseInt(firstNumber),
    secondNumber: parseInt(secondNumber)
  }
  const res = sign == '+' ? numbers.firstNumber + numbers.secondNumber :
    sign == '-' ? numbers.firstNumber - numbers.secondNumber :
    sign == 'x' ? numbers.firstNumber * numbers.secondNumber :
    numbers.firstNumber / numbers.secondNumber
  resultDiv.innerHTML = res;
  clear()
  } else {alert('enter the values')}
}