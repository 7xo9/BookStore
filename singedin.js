let bigContainer = document.getElementById("con")
let AdminUsers = ["Admain1"]
let local = document.getElementById("local")


function gettingBooks(){

    fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=5FXJDVFlJaeJFnnhodVVLJsz4vvcbFFC")
        .then(res => res.json())
        .then(data => {

            let result = data.results.books;
          
            console.log(result);
            let localName = localStorage.getItem("Name")
            local.innerText = localName
            
            for(let i =0; i< result.length;i++){
               
                
    
                let arr =[i]
              



               let bigDiv = document.createElement("div")
               let newDiv = document.createElement("div")
               let imgDiv = document.createElement("div")
               let deleteBTN = document.createElement("button")
               
               let prices = document.createTextNode(result[i].price)
               let pic = result[i].book_image

        
             let books = document.getElementById("bookCon")
                newDiv.className = "newDiv"
                imgDiv.className = "imgDiv"
                
              imgDiv.style.cssText = `background-image: url(${pic})`
                let id = result[i].rank
              deleteBTN.className = "delBTN"
              bigDiv.appendChild(newDiv)
              newDiv.innerHTML = `<h5> Author: ${result[i].author}`
              deleteBTN.innerText = `Delete Book ${id}`
              newDiv.appendChild(imgDiv)
              newDiv.appendChild(deleteBTN)
              books.appendChild(newDiv)
              
              

              deleteBTN.addEventListener("click", (id)=>{
                fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=5FXJDVFlJaeJFnnhodVVLJsz4vvcbFFC`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data =>{console.log(data);})
              })




              fetch("https://6552924d5c69a779032a2d8c.mockapi.io/usersInfo")
              .then(res => res.json())
              .then(data => {
                
                  for (let i =0 ; i < data.length;i++){
      
                      let nameToSerach = data[i].userName
                      
                      let localN = localStorage.getItem("Name")
      
                     if (nameToSerach = "Admin1"){
                          deleteBTN.style.cssText = "display: flex"
                        }else{
                            deleteBTN.style.cssText = "display: none"

                        }
                  }
                  
              })

              

  
            }
            
            
           

        })

}

function matchAuth(){


}
gettingBooks()
matchAuth()