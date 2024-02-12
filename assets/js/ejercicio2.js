let boton1 = document.querySelector('#btn-1')
let boton2 = document.querySelector('#btn-2')
let boton3 = document.querySelector('#btn-3')
let boton4 = document.querySelector('#btn-4')
let boton5 = document.querySelector('#btn-5')
let boton6 = document.querySelector('#btn-6')
let box = document.querySelector('#caja')


boton1.addEventListener('click', function(){
    box.setAttribute('style', 'border:1px solid black;width: 100%;height: 100%; background-color: #e53e3e')
})
boton2.addEventListener('click', function(){
    box.setAttribute('style', 'border:1px solid black;width: 100%;height: 100%; background-color: #dd6b20')
})
boton3.addEventListener('click', function(){
    box.setAttribute('style', 'border:1px solid black;width: 100%;height: 100%; background-color: #faf089')
})
boton4.addEventListener('click', function(){
    box.setAttribute('style', 'border:1px solid black;width: 100%;height: 100%; background-color: #48bb78')
})
boton5.addEventListener('click', function(){
    box.setAttribute('style', 'border:1px solid black;width: 100%;height: 100%; background-color: #81e6d9')
})
boton6.addEventListener('click', function(){
    box.setAttribute('style', 'border:1px solid black;width: 100%;height: 100%; background-color: #d53f8c')
})