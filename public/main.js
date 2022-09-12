const deleteBtn = document.querySelectorAll('.fa-trash')

Array.from(deleteBtn).forEach((element)=>{
    element.addEventListener('click', deleteItem)
})

async function deleteItem(){
    
    const itemQuote = this.parentNode.childNodes[3].innerText
    const itemAuthor = this.parentNode.childNodes[6].innerText
    const itemGenre = this.parentNode.childNodes[8].innerText
    try{
        const response = await fetch('deleteItem', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ 
              'quoteOfItem': itemQuote,
              'authorOfItem': itemAuthor,
             
              'genreOfItem': itemGenre
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

