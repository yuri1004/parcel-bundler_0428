// 조회->text()화 하기->console.log()로 받기
fetch('https://jsonplaceholder.typicode.com/todos/10')
.then(response=>response.text())
.then(result=>console.log(result));