// Get slider
let slider = document.getElementById('slider');
let output = document.getElementById('value');
let img = document.getElementById('img');

// input sliderio 'value=0' yra prilyginamas span tag'e užduotai reikšmei (0);
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

slider.addEventListener("mousemove", () => {
    let x = slider.value;
    let blurValue = 'blur(' + x + 'px' + ')';
    img.style.filter = blurValue;
});
