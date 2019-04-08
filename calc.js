const init = () => {
    const c = document.getElementById('calculator-keys');
    console.log(c.children);
}
const fields = ['1', '2', '3', '4', '5', '6', '7', '8', '9','0','C','+', '-', '=', 'Display'];
const init = () => {
const container = document.getElementById('calculator-keys');
fields.forEach(el => {
const div = document.createElement('div')
div.textContent = el;
container.appendChild(div);
});
}

window.addEventListener('DOMContentLoaded', function(){});