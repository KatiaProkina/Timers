let h2 = document.createElement ('h2')
let input = document.createElement ('input')
h2.textContent = ''
document.body.append(h2)
document.body.append (input)

input.addEventListener('change',changeInput)
changeInput()

function changeInput() {
    h2.textContent = input.value
    setTimeout(changeInput,300)
}

