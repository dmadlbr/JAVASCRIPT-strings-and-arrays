

const response = fetch('https://randomuser.me/api/');
response.then((res)=>{
    return res.json();
}).then((res)=>{
    const p = document.createElement("p");
    p.innerHTML = res.results[0].gender;
    document.body.appendChild(p);
})