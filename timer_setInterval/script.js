
document.addEventListener('DOMContentLoaded',function(){
    let numberInput = document.querySelector ('.number_input')
    let countdownBlock = document.querySelector ('.countdown-block')
    let startBtn = document.querySelector('.start-btn')
    
    startBtn.addEventListener('click',timer)
    let timeAdd
    let countDown 
    
    function timer() {
        clearInterval(countDown)
        function updateDiv(){
        timeAdd = numberInput.value
        countdownBlock.innerHTML = timeAdd
        }
        countDown = setInterval(function () {
            if (timeAdd >= 0){
                countdownBlock.innerHTML = timeAdd--
            }
        },1000)
        updateDiv()
     }
     
})
