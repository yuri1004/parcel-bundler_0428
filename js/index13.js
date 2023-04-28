fetch('https://jsonplaceholder.typicode.com/users')
.then(response=>response.text())
.then(result=>{
    const str = JSON.parse(result);
    // console.log(str)
    const {id} = str[2];
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
    .then(data=>data.text())
    .then(data2=>console.log(data2))

})
