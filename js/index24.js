async function play(){
    // 실행
    try{
        alert('시작입니다');
        console.log('welcome');
        const str = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const response = await str.text();
        console.log(response);
    }
   // error 
   catch(error){
        alert('에러입니다.');
   }  
   // 마감
   finally{
    console.log('작업이 끝났습니다.')
   } 
 
};

play();