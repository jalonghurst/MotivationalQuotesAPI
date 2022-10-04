const deleteBtn = document.querySelectorAll('.fa-trash')
// const changeGenre = document.querySelectorAll('.fa-pencil-alt')

Array.from(deleteBtn).forEach((element)=>{
    element.addEventListener('click', deleteQuote)
})
// Array.from(changeGenre).forEach((element)=>{
//     element.addEventListener('click', changeItemGenre)
// })

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

// async function changeItemGenre(){
    
//   
    // const quoteId = this.parentNode.dataset.id
//     try{
//         const response = await fetch('api/changeItemGenre', {
//             method: 'put',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify({ 
//               'quoteOfItem': itemQuote,
//               'authorOfItem': itemAuthor,
//               'genreOfItem': itemGenre
//             })
//           })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     }catch(err){
//         console.log(err)
//     }
// }
