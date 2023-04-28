fetch('https://jsonplaceholder.typicode.com/photos/4')
.then(item=>item.text())
.then(result=>{
    let str = JSON.parse(result);
    console.log(str);
    // 데이터 가져오기
    let str2 = str.thumbnailUrl;
    document.write(`
      <img src="${str2}" alt="샘플">
    `)
}
    /* console.log(result) */)