const calculator = document.querySelector('.calculator')

const keys = calculator.querySelector('.calculator__keyboard')

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {

  }
})

const key = e.target
const action = key.dataset.action

if (!action) {
  console.log('number key')
}

if (
  action === 'subtraction' ||
  action === 'division' ||
  action === 'addition' ||
  action === 'multiplication'

) {
  console.log('operador')
}

if (action === deletar) {
  console.log('limpar')
}

if (action === 'calcule') {
  console.log('calcular')
}