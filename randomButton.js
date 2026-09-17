const btn = document.getElementById("btn");
const user = document.getElementById("user");

// user.innerHTML = '<div>' + "Ms" + ' ' + "Jeremiah" +' ' + "Hernadez" +'</div> '+'<div>'+"jeremiah.hernandez@example.com"+'</div>'+'<div>'+ "female"
// +'</div>';

async function call_api() {
    try {
        const api = await fetch("https://randomuser.me/api/");
        const response = await api.json();
        const img = response.results[0].picture;
        const name = response.results[0].name;
        const email = response.results[0].email;
        const gender = response.results[0].gender;

        user.innerHTML = "<div><img src='" + img.medium + "'></div>" +"<div>" + name.title + " " + name.first + " " + name.last + "</div>" +"<div>" + email + "</div>" + "<div>" + gender + "</div>";

    } catch (err) {
        console.log(err.message);
    }
}

call_api(); 

        btn.addEventListener("click",call_api)
        

