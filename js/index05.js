fetch('https://jsonplaceholder.typicode.com/todos')
.then(response=>response.text())
.then(result=>{
    const str = JSON.parse(result);
    // console.log(str);
    const data = str.filter(item=>item.userId === 4);
    // console.log(data);
    for(let i in data){
        document.write(`
         <p>${data[i].id} : ${data[i].title}</p>
        `)
    }
})