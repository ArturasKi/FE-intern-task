let page = 1;
let DATA;
let allPages;
let slider = document.getElementById("slider");
let output = document.getElementById("value");
let pagination = document.getElementById("pagination");
let img = document.getElementById("imgBox");
let checkboxGray = document.getElementById("check");
let ul = document.querySelector("ul");

fetch("https://picsum.photos/v2/list")
  .then((res) => res.json())
  .then((data) => {
    window.DATA = data;
    window.allPages = data.length;
    element(1);
    let dataList = "";
    let dataInfoInitial = `
        <div class="info">
            <p>Author: <b>${data[0].author}</b></p>
            <p>Dimensions: <b>${data[0].width} x ${data[0].height}</b></p>
        </div>
        `;
    document.getElementById("info").innerHTML = dataInfoInitial;
    data.map((values) => {
      dataList += `<div class="card">
                        <img src="${values.download_url}" alt="img" onClick="pickPhoto(this)">
                    </div>`;
    });
    document.getElementById("cards").innerHTML = dataList;
  })
  .catch((error) => console.log("ERROR"));

function pickPhoto(smallImg) {
  let dataInfo = "";
  let fullImg = document.getElementById("imgBox");
  fullImg.src = smallImg.src;
  let galleryItem = window.DATA.find(
    (item) => item.download_url === fullImg.src
  );
  dataInfo = `
            <div class="info">
                <p>Author: <b>${galleryItem.author}</b></p>
                <p>Dimensions: <b>${galleryItem.width} x ${galleryItem.height}</b></p>
            </div>
            `;
  document.getElementById("info").innerHTML = dataInfo;
}

output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};

slider.addEventListener("input", imageFilters);
checkboxGray.addEventListener("click", imageFilters);
pagination.addEventListener("click", renderImage);

function renderImage() {
  let dataInfo = "";
  let fullImg = document.getElementById("imgBox");
  fullImg.src = window.DATA[window.page].download_url;
  dataInfo = `
    <div class="info">
        <p>Author: <b>${window.DATA[window.page].author}</b></p>
        <p>Dimensions: <b>${window.DATA[window.page].width} x ${
    window.DATA[window.page].height
  }</b></p>
    </div>
    `;
  document.getElementById("info").innerHTML = dataInfo;
}

function imageFilters() {
  let x = slider.value;
  let blurValue = `blur(${x / 10}px)`;
  if (checkboxGray.checked) {
    img.style.filter = "grayscale(100%)" + blurValue;
  } else {
    img.style.filter = "grayscale(0%)" + blurValue;
  }
}

function element(page) {
  let li = "";
  let beforePages = page - 1;
  let afterPages = page + 1;
  let liActive;

  window.page = page - 1;

  if (page > 1) {
    li += `<li class="btn" onclick="element(${
      page - 1
    })"><i class="fa fa-angle-left"></i></li>`;
  }

  for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
    if (pageLength > window.allPages) {
      continue;
    }
    if (pageLength === 0) {
      pageLength = pageLength + 1;
    }
    if (window.page === window.DATA[window.page]) {
      li += `<li class="num ${liActive}" onclick="element(${page})"><span>${pageLength}</span></li>`;
    }
    if (page === pageLength) {
      liActive = "active";
    } else {
      liActive = "";
    }
    li += `<li class="num ${liActive}" onclick="element(${
      page + 1
    })"><span>${pageLength}</span></li>`;
  }
  if (page < window.allPages) {
    li += `<li class="btn" onclick="element(${
      page + 1
    })"><i class="fa fa-angle-right"></i></li>`;
  }
  document.getElementById("pagination").innerHTML = li;
}