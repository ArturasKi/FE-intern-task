// Get checkbox
let checkboxGray = document.getElementById('check');
// Get image
let image = document.getElementById('img');

checkboxGray.addEventListener("change", () => {
    if(checkboxGray.checked) {
        image.style.filter = 'grayscale(100%)';
    } else {
        image.style.filter = 'initial';
    }
});
