const str = {
    userId:1,
    title:"title01",
    body:"내용 101"
}

fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    body:JSON.stringify(str)
})
.then(response=>response.text())
.then(result=>console.log(result))
