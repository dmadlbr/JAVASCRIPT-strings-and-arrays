//JSON

const jsonString = '{"name":"Dheema","age":22,"place":"Kozhikode"}'
const jsonObj = JSON.parse(jsonString);
console.log(jsonObj);

const toStr = JSON.stringify(jsonObj);
console.log(toStr);


//API fetch

const api = fetch('https://randomuser.me/api/');
api.then((res)=>{
    return res.json();
}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})

const response = fetch('https://randomuser.me/api/');
response.then((res)=>{
    return res.json();
})
.then((res)=>{
    const p = document.createElement("p");
    const result = res.results[0].email;
    p.innerHTML = result;
    document.body.appendChild(p);
    const div = document.createElement("div");
    div.innerHTML= res.results[0].name.title;
    document.body.appendChild(div)
})
                            //ERROR

        // const response2 = fetch('https://rqandomuser.me/api/');
        // response2.then((res)=>{
        //     return res.json()
        // }).then((res)=>{
        //     console.log(res);
        // }).catch((err)=>{
        //     alert('API is not working');
        //     console.log(err.message);
        // })
