document.addEventListener("DOMContentLoaded", function() {
  color();
});

// get value of text input
function color() {
  const colorHex = document.getElementById('color').value;
  const splotches = document.getElementById('splotchNum').value;
  const paletteWrapper = document.querySelector('colorGradient');

  for( let i = 0; i < splotches; i++) {
    const div = document.createElement('div');
    div.className = 'splotch';
    div.style.backgroundColor = colorHex || colorPicker;
    document.getElementById('colorGradient').appendChild(div);
  }
}

const inputs = document.querySelectorAll('.controls input');
inputs.forEach(input => input.addEventListener('change', color));
