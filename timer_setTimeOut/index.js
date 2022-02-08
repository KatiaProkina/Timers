let h2 = document.createElement ('h2')
let input = document.createElement ('input')
h2.textContent = ''
document.body.append(h2)
document.body.append (input)

let changeElement

input.addEventListener('input',changeInput)

 function changeInput() {
    clearTimeout(changeElement)
    changeElement = setTimeout(function (){
        h2.textContent = input.value
    },1000)

}

