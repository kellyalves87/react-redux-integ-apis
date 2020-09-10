

export const submitUserAction = (data) => {
    let url = "http://localhost:8080/usuario"
    fetch(url, {
        method:"POST",
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(response => response.json())
    .then(json => {console.log(json)})
}