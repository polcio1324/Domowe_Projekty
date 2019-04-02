
if (action === 'dot') {

    console.log('decimal key!')
  }
  if (action === 'all-clear') {
    console.log('clear key!')
  }
  if (action === 'equal-sign') {
    console.log('equal key!')
  }

const display = document.querySelector('.calculator-screen')

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
  }
})
