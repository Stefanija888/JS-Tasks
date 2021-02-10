let header = document.getElementById("header");
let header3 = document.getElementById("header3");
let users = document.getElementById("users");



function printUser(response, storeResult) {

    if (response !== undefined && response.length > 0) {
        for (const user of response) {
            //console.log(response);
            storeResult.innerHTML += ` <table border=1px>
            <tr><td>ID: ${user.id}</td> <td>Name: ${user.name}</td>
            <td>Username: ${user.username}</td><td>Email: ${user.email}</td>
            <td>Adress: ${user.address.city} - ${user.address.street} -${user.address.zipcode}</td> 
            <td>Company name: ${user.company.name} -catchPhrase: ${user.company.catchPhrase}</td>
            <td>Website: ${user.website}</td>
            </tr>
            </table>`;
        }
    }

}

document.getElementById("btn").addEventListener("click", function () {

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
            header3.innerText += `Here are the users!`
            return response.json()
        })
        .then(function (result) {
            printUser(result, users);
        })
        .catch(function (err) {
            header.innerText = "Error!"
            //console.warn(err)
        })
        .finally(function () {
            header.innerText += "WE DID IT!";
        })
})