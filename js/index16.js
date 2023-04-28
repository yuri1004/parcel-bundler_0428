fetch('https://jsonplaceholder.typicode.com/users')
.then(response=>response.text())
.then(result=>{
    // console.log(result);
    const str = JSON.parse(result);
    // console.log(str);
    // console.log(str[6]);
    const {id} = str[5];
    console.log(id);
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
})
.then(item=>item.text())
.then(posts=>{
    const data = JSON.parse(posts);
    // console.log(data);
    const num = data[0];
    console.log(num);
    console.log(num.title);
})
