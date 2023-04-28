fetch('https://jsonplaceholder.typicode.com/users')
.then(response=>response.text())
.then(result=>{
    // console.log(result);
    const str = JSON.parse(result);
    // console.log(str);
    return str[1];
})
.then(str=>{
    const {address} = str;
    // console.log(address);
    return address;
})
.then(address=>{
    const {geo} = address;
    console.log(geo);
    return geo;
})
.then(geo=>{
    const {lat} = geo;
    console.log(lat);
})