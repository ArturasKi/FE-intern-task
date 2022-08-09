fetch('https://picsum.photos/v2/list')
.then(res => res.json())
.then(data => {
    // console.log(data);
    // document.getElementById('root').
    // innerHTML=data[0].author;
    let data1 = '';
    data.map((values) => {
        data1 += `<div class="card">
                    <h4 class="author">${values.author}</h4>
                    <span class="height">Size: ${values.height}x${values.width}</span>
                    <img src="${values.download_url}" alt="img">
                </div>`
    })
    document.getElementById('cards').innerHTML=data1;
})
.catch(error => console.log('ERROR'))