fetch('https://jsonplaceholder.typicode.com/photos')
.then(response=>response.text())
.then(result=>{
    const str = JSON.parse(result);
    // console.log(str);
    const data = str.filter((item)=>{return item.albumId === 1});
    // console.log(data);
    for(let i of data){
        document.write(`
          <figure>
          <img src="${i.thumbnailUrl}" alt="${i.title}">
          <figcaption>${i.title}</figcaption>
          </figure>
        `)
    }
})