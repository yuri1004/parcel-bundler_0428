async function fetchStr(){
    const str = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await str.text();
    // console.log(data);
    const user = await JSON.parse(data)
    // console.log(user);
    const num = user.filter((item)=>{return item.albumId === 61});
    // console.log(num);
    for(let i of num){
        document.write(`
        <figure>
        <img src="${i.thumbnailUrl}" alt="${i.title}">
        <figcaption>${i.title}</figcaption>
        </figure>
        `)
    }
}

fetchStr();