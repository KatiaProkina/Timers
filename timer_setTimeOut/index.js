let h2 = document.createElement ('h2')
let input = document.createElement ('input')
h2.textContent = ''
document.body.append(h2)
document.body.append (input)

let changeElement

input.addEventListener('change',changeInput)
changeInput()

 function changeInput() {
    clearTimeout(changeElement)
    h2.textContent = input.value
    changeElement = setTimeout(changeInput,300)
}

