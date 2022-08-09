fetch('https://picsum.photos/v2/list')
.then(res => res.json())
.then(data => {
    let data1 = '';
    data.map((values) => {
        data1 += `<div class="card">
                    <img src="${values.download_url}" alt="img">
                </div>`
    })
    document.getElementById('cards').innerHTML = data1;
})
.catch(error => console.log('ERROR'));

{/* <div class="card">
    <h4 class="author">${values.author}</h4>
    <p class="dimmensions">Size: ${values.height}x${values.width}</p>
    <img src="${values.download_url}" alt="img">
</div> */}