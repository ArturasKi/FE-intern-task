// FETCH PHOTOS AND MAP LIST IN COLUMN
fetch('https://picsum.photos/v2/list')
.then(res => res.json())
.then(data => {
    // console.log(data);
    let dataList = '';
    data.map((values) => {
        dataList += `<div class="card">
                        <img src="${values.download_url}" alt="img" onclick="pickPhoto(this)">
                    </div>`;
})
    document.getElementById('cards').innerHTML = dataList;
})
.catch(error => console.log('ERROR'));

// ENLARGE PICKED PHOTO FROM LIST
function pickPhoto(smallImg) {
    let dataInfo = '';
    let fullImg = document.getElementById('imgBox');
    fullImg.src = smallImg.src;

    fetch('https://picsum.photos/v2/list')
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
                if (fullImg.src === data[i].download_url) {
                    dataInfo = `
                    <div">Author: ${data[i].author}</div>
                    <div">Width and height: ${data[i].width}x${data[i].height}</div>
                    `
                    document.getElementById('info').innerHTML = dataInfo;
                }
        }
    })
}



// function pickPhoto(smallImg) {
//     let fullImg = document.getElementById('imgBox');
//     fullImg.src = smallImg.src;
//     fullImg = `<img class="img" src="${fullImg.src}" alt="#">`;
//     document.getElementById('imgBox').innerHTML = fullImg;
// }

// IMAGE FILTERS
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