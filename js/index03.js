// 조회->text()->변수 만들어서 javascript 객체 만들기(str 출력해보기)->console.log(title) 출력하기
fetch('https://jsonplaceholder.typicode.com/todos/10')
.then(item=>item.text())
.then(result=>{
    const str = JSON.parse(result)
    console.log(str)
    console.log(str.title)
    // console.log(result)})
})
