// FETCH PHOTOS AND MAP LIST IN COLUMN
fetch('https://picsum.photos/v2/list')
.then(res => res.json())
.then(data => {
    let dataList = '';
    let dataInfoInitial = `
        <div class="info">
            <p>Author: <b>${data[0].author}</b></p>
            <p>Dimensions: <b>${data[0].width} x ${data[0].height}</b></p>
        </div>
        `;
        document.getElementById('info').innerHTML = dataInfoInitial;
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
    
    let fullImg = document.getElementById('imgBox');
    fullImg.src = smallImg.src;

    fetch('https://picsum.photos/v2/list')
    .then(res => res.json())
    .then(data => {
        let dataInfo = '';
        document.getElementById('info').innerHTML = dataInfo;

        for (let i = 0; i < data.length; i++) {
            if (fullImg.src === data[i].download_url) {
                dataInfo = `
                <div class="info">
                    <p>Author: <b>${data[i].author}</b></p>
                    <p>Dimensions: <b>${data[i].width} x ${data[i].height}</b></p>
                </div>
                `
                document.getElementById('info').innerHTML = dataInfo;
                console.log(dataInfo);
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

// PAGINATION
let ul = document.querySelector('ul');
let allPages = 30;

function element(allPages, page) {
    let li = '';
    let beforePages = page - 1;
    let afterPages = page + 1;
    let liActive;

    if(page > 1) {
        li += `<li class="btn" onclick="element(allPages, ${page-1})"><i class="fa fa-angle-left"></i></li>`
    }

    for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {

        if(pageLength > allPages) {
            continue;
        }
        if(pageLength === 0) {
            pageLength = pageLength + 1;
        }
        if(page === pageLength) {
            liActive = 'active';
        } else {
            liActive = '';
        }
        li += `<li class="num ${liActive}" onclick="element(allPages, ${page+1})"><span>${pageLength}</span></li>`
    }
    if(page < allPages) {
        li += `<li class="btn" onclick="element(allPages, ${page+1})"><i class="fa fa-angle-right"></i></li>`
    }
    document.getElementById('pagination').innerHTML = li;
    console.log(li);
}

element(allPages, 1)