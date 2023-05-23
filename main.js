/*
*
*
*
*/

 //main function

 function generateResult(){

    const min = document.querySelector(".input-number").value 
    const max = document.querySelector(".input-number-two").value

    const result = Math.floor(Math.random() * (max - min) + min);

    alert(`O número sorteado é: ` + result);
 }