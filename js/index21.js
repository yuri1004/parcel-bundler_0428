async function main(){
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const result = await response.text();
    // console.log(result);
    const str = JSON.parse(result);
    // console.log(str);
    const user = str.filter((item)=>item.postId === 2);
    // console.log(user);
    for(let i in user){
       document.write(`
         <dl>
           <dt>${user[i].name}</dt>
           <dd>${user[i].email}</dd>
           <dd>${user[i].body}</dd>
         </dl>
       `)
    }
}

main();