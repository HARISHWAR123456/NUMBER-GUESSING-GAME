
let min=1;
let max=100;
let randomNumber=getRandomNumber(min,max);
let attempts=0;
let arr=[55];

console.log(randomNumber);
console.log(arr);

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
 let guess=document.getElementById("num");
let guessinput=document.getElementById('button1');
let output=document.getElementById('iscorrect');
let input=guess;
document.getElementById('arr1').textContent=arr;
function takingInput(){
    if(input.value==0||input.value<0||input.value>100){
        output.textContent=`enter a valid number it must be between 1-100 you entered ${input.value};`
        return;
    }
    attempts++;

     if(input.value<randomNumber){
        output.textContent=`your guess is toolow`;
    }
    else if(input.value>randomNumber){
        output.textContent=`your guess is too high `;

    }
    else if(input.value==randomNumber){
        output.textContent=`you guessed the correct number`;
        document.getElementById('num').disabled=true;

    }
    arr.push(input);
    document.getElementById('num').value='';
}
document.getElementById('button1').addEventListener('click',takingInput);



