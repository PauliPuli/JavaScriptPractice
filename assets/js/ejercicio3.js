let result= document.querySelector('.resultado')
let btnsumar= document.querySelector('#btn-sumar')
let btnrestar= document.querySelector('#btn-restar')


btnsumar.addEventListener('click',function(){
    let num1= parseInt(document.querySelector('#valor1').value)
let num2= parseInt(document.querySelector('#valor2').value)

    let suma= num1+num2;
    result.innerHTML=`La suma de los números ${num1} y ${num2} es ${suma}`;
}); 


btnrestar.addEventListener('click', function(){
    let num1= parseInt(document.querySelector('#valor1').value)
let num2= parseInt(document.querySelector('#valor2').value)
    let resta = num1-num2;
    result.innerHTML=`El resultado de la resta entre ${num1} y ${num2} es ${resta}`
})
if (resta >=0){
    result.innerHTML=`0`
}