fetch('https://jsonplaceholder.typicode.com/todos')
.then(response=>response.text())
.then(result=>{
    // console.log(result);
    const data = JSON.parse(result);
    // console.log(data);
    const str = data.filter((item)=>item.userId === 4);
    // console.log(str);
    for(let i in str){
       document.write(`
       <p>${data[i].id} : ${data[i].title} : ${data[i].completed}</p>
       `) 
    }
})