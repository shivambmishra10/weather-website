//const weather = require("../../src/utils/weather")

console.log('javascript is loaded')
/*fetch('http://puzzle.mead.io/puzzle').then((response)=>
{
    response.json().then((data)=>{
        console.log(data)
    })
})*/

const weatherform=document.querySelector('form')
const search=document.querySelector('input')
const messageone=document.querySelector('#message-1')
//messageone.textContent='From javascript'
weatherform.addEventListener('submit',(e)=>
{
    e.preventDefault()
    const location=search.value
    messageone.textContent="Loading...."
    fetch('http://localhost:3000/weather?address='+location).then((response)=>
{
    response.json().then((data)=>{
        if(data.error)
        return messageone.textContent=data.error
        messageone.textContent="Forcast:"+data.forcast+" "+"Location:"+data.location
        console.log(data)
    })
})
})
