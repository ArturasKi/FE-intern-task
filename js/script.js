// fetch photos and map list in column
fetch('https://picsum.photos/v2/list')
.then(res => res.json())
.then(data => {
    let data1 = '';
    data.map((values) => {
        data1 += `<div class="card">
                    <img src="${values.download_url}" alt="img" onclick="pickPhoto(this)">
                </div>
                <script>
                    function pickPhoto(smallImg) {
                        let fullImg = document.getElementById('imgBox');
                        fullImg.src = smallImg.src;
                    }
                </script>`
    })
    document.getElementById('cards').innerHTML = data1;
})
.catch(error => console.log('ERROR'));

// Get elements
let slider = document.getElementById('slider');
let output = document.getElementById('value');
let img = document.getElementById('imgBox');
let checkboxGray = document.getElementById('check');

// input sliderio 'value=0' yra prilyginamas span tag'e užduotai reikšmei (0);
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

slider.addEventListener("input", imageFilters);
checkboxGray.addEventListener("click", imageFilters);

function imageFilters() {
    let x = slider.value;
    let blurValue = `blur(${x/10}px)`;
    if(checkboxGray.checked) {
        img.style.filter = 'grayscale(100%)' + blurValue;
    } else {
        img.style.filter = 'grayscale(0%)' + blurValue;
    }
};

function pickPhoto(smallImg) {
    let fullImg = document.getElementById('imgBox');
    fullImg.src = smallImg.src;
}
