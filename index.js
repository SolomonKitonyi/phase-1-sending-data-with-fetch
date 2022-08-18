// Add your code here
function submitData(userName,userEmail) {
    const FormData = {
        name: userName,
        email: userEmail
    }
    const configurationObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(FormData)
    }
   let p = document.createElement("p")
   return fetch("http://localhost:3000/users",configurationObj)
    .then(res => res.json())
    .then(data => {
        let p = document.createElement("p")
        p.textContent = data.id
        document.querySelector("body").appendChild(p)
   })
   .catch(err => {
    let p = document.createElement("p")
    p.textContent = err.message;
    document.querySelector("body").appendChild(p)
   })
}