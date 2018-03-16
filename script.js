// get value of text input
function color() {
  const colorHex =document.getElementById('color').value;
  const paletteWrapper = document.querySelector('colorGradient');

  // document.getElementById('colorGradient').innerHTML = colorHex;

  for( let i = 0; i < 10; i++) {
    const div = document.createElement('div');
    div.className = 'splotch';
    div.style.backgroundColor = colorHex;
    document.getElementById('colorGradient').appendChild(div);
  }
}
