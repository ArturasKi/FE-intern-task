// Get checkbox
let checkboxGray = document.getElementById('check');
// Get image
let photo = document.getElementById('imgBox');

checkboxGray.addEventListener("change", () => {
    if(checkboxGray.checked) {
        photo.style.filter = 'grayscale(100%)';
    } else {
        photo.style.filter = 'initial';
    }
});
