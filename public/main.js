const deleteBtn = document.querySelectorAll('.fa-trash')
const changeFavorite = document.querySelectorAll('.fav')

Array.from(deleteBtn).forEach((element)=>{
    element.addEventListener('click', deleteQuote)
})
Array.from(changeFavorite).forEach((element)=>{
    element.addEventListener('click', markFavorited)
})

async function deleteQuote(){
    
    const quoteId = this.parentNode.dataset.id
    try{
        const response = await fetch('api/deleteQuote', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ 
              'quoteIdFromJsFile' : quoteId
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markFavorited(){
    const quoteId = this.parentNode.dataset.id
    try{
        const response = await fetch('api/markFavorited', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'quoteIdFromJSFile': quoteId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}


