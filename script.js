let bigContainer = document.getElementById("con")

function gettingBooks(){

    fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=5FXJDVFlJaeJFnnhodVVLJsz4vvcbFFC")
        .then(res => res.json())
        .then(data => {

            let result = data.results.books;

           
            
            for(let i =0; i< result.length;i++){
                console.log(result);
                
    

                let arr =[i]


               let bigDiv = document.createElement("div")
               let newDiv = document.createElement("div")
               let imgDiv = document.createElement("div")
            
          
               let prices = document.createTextNode(result[i].price)
               let pic = result[i].book_image

        
               let books = document.getElementById("bookCon")
                newDiv.className = "newDiv"
                imgDiv.className = "imgDiv"
                bigDiv.className = "bigDiv"
                
              imgDiv.style.cssText = `background-image: url(${pic})`


              bigDiv.appendChild(newDiv)
              newDiv.innerHTML = `<h5> Author: ${result[i].author} `
              newDiv.appendChild(imgDiv)
              books.appendChild(newDiv)

  
            }

        })
}

gettingBooks()