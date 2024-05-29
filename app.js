const summ = document.getElementById('summ')
const comm = document.getElementById('comm')
const form = document.querySelector('form')
const button = document.querySelector("button")

const ass = summ.addEventListener('input', () => {
    document.body.style.backgroundColor = summ.value;
})
const acc = comm.addEventListener('input', () => {
    document.body.style.backgroundColor = comm.value;
})
const plus = ass + acc
form.addEventListener('submit', (e) => {
    e.preventDefault()
    
})

button.addEventListener('click', () => {
    form['ccr-rus'].disabled = false;
    body.backgroundColor = plus
})