// script.js

// Create calculator layout dynamically
const body = document.querySelector('body');
const calculatorDiv = document.createElement('div');
calculatorDiv.style.margin = '20px';
calculatorDiv.style.padding = '20px';
calculatorDiv.style.border = '2px solid #ccc';
calculatorDiv.style.display = 'inline-block';

// Input display
const display = document.createElement('input');
display.type = 'text';
display.readOnly = true;
display.style.width = '100%';
display.style.height = '40px';
display.style.fontSize = '20px';
display.style.textAlign = 'right';
display.style.marginBottom = '10px';
calculatorDiv.appendChild(display);

// Button labels
const buttons = [
  '7', '8', '9', '/',
  '4', '5', '6', '*',
  '1', '2', '3', '-',
  '0', 'C', '=', '+'
];

// Create buttons
const buttonsDiv = document.createElement('div');
buttonsDiv.style.display = 'grid';
buttonsDiv.style.gridTemplateColumns = 'repeat(4, 50px)';
buttonsDiv.style.gap = '10px';
buttonsDiv.style.justifyContent = 'center';

buttons.forEach(label => {
  const button = document.createElement('button');
  button.textContent = label;
  button.style.height = '50px';
  button.style.width = '50px';
  button.style.fontSize = '18px';
  button.addEventListener('click', () => handleButtonClick(label));
  buttonsDiv.appendChild(button);
});

calculatorDiv.appendChild(buttonsDiv);
body.appendChild(calculatorDiv);

// Handle button click logic
function handleButtonClick(label) {
  if (label === 'C') {
    display.value = '';
  } else if (label === '=') {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = 'Error';
    }
  } else {
    display.value += label;
  }
}
