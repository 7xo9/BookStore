let Username = document.getElementById("Username")
let password = document.getElementById("pass")
let singinBtn = document.getElementById("singup")

singinBtn.addEventListener("click", ()=>{

    let uservalu = Username.value 
    let passvalu = password.value

        
        fetch("https://6552924d5c69a779032a2d8c.mockapi.io/usersInfo")
            .then(res => res.json())
            .then(data => {;
                
                for(let i =0; i < data.length; i++){
                    let userInDB = data[i].userName
                    let passInDB = data[i].Pasword
                    console.log(userInDB);
                   

                  if(uservalu == userInDB && passvalu == passInDB){
                   
                    alert("Welcome")
                    window.location.href = "singedin.html"
                    localStorage.setItem("Name", userInDB)
                    
                  }else{
                    alert("The username or Password is incorrect")
                    
                  }
                }})




    }
)