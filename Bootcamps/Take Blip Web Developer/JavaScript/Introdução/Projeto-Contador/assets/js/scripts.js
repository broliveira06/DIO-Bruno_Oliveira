var currentNumberWarpper = document.getElementById('currentNumber');
var currentNumber = 0;

var mais = document.getElementById('adicionar');
var menos = document.getElementById('subtrair');

mais.addEventListener("click", increment);
menos.addEventListener("click", decrement);

    function increment(){
        if(currentNumber < -1){
            currentNumberWarpper.style.color = 'red';
        }else{
            currentNumberWarpper.style.color = 'green'
        } 
        if(currentNumber < 11 ){
            currentNumber = currentNumber + 1;
            currentNumberWarpper.innerHTML = currentNumber;

        }
    }

    function decrement(){
        if(currentNumber <= 0 ){
            currentNumberWarpper.style.color = 'red';
        }else{
            currentNumberWarpper.style.color = 'black';
        }
            currentNumber =  currentNumber = currentNumber -1;
            currentNumberWarpper.innerHTML = currentNumber;
       }