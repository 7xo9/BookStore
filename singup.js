let Username = document.getElementById("Username")
let email = document.getElementById("email")
let password = document.getElementById("pass")
let singupBtn = document.getElementById("singup")

singupBtn.addEventListener("click", ()=>{
    let userName = Username.value 
    let Emaill = email.value
    let Pasword = password.value

    if(userName.length < 5 && Pasword.length <8 ){
        alert("username must be 5, password must be 8")
    }else if (userName.length >= 5 && Pasword.length <8){
        alert("The password must be 8 characters")
    }else if (userName.length < 5 && Pasword.length < 8){
        alert("The userName must be 5 charavters")
    }else if (userName.length == 0 || Pasword.length == 0){
        alert("please enter your information")
    }else if (userName.length == 0 && Pasword.length ==0){
        alert("It fiex fahad ;)")
    }else if (userName.length >= 5 && Pasword.length >= 8){

        fetch("https://6552924d5c69a779032a2d8c.mockapi.io/usersInfo" ,{
            method: "POST",
            body: JSON.stringify({
                userName,
                Emaill,
                Pasword,
                Auth: "A"
            }),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
            localStorage.setItem("Name", userName)
            alert("Welcome")
            window.location.href = "singedin.html"
    }


})