async function fetchStr(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const result = await response.text()
    // console.log(result);
    const str = JSON.parse(result);
    // console.log(str);
    // const user = await str[1];
    // // console.log(user);
    // const {address} = user;
    // // console.log(address);
    // const {geo} = address;
    // // console.log(geo);
    // console.log(geo.lat);

    // console.log(str[1].address.geo.lat);
    document.write(`
    <p>${str[1].address.geo.lat}</p>
    `)
}

fetchStr();