const express=require('express')
const path=require('path')
const app=express()
const hbs=require('hbs')
const request=require('request')
const geo=require('./utils/geocode')
const weather=require('./utils/weather')
app.use(express.json())
const port=process.env.PORT || 3000
//app.com
//app.com/help
//app.com/about
const public=path.join(__dirname,'../public')
const views=path.join(__dirname,'../templates/views')
const partial=path.join(__dirname,'../templates/partial')
app.set('view engine','hbs')
app.set('views',views)
hbs.registerPartials(partial)
app.use(express.static(public))
app.get('/',(req,res)=>
{
    res.render('index',{
        title:'weather-app',
        name:'shivam'
    })
})
app.get('/help',(req,res)=>
{
    res.render('help',{
        age:9,
        name:'shivam',
        title:'help'
    })
})
app.get('/about',(req,res)=>
{
    res.render('about',{
        name:"shivam mishra",
        title:'about'
    })
})

app.get('/weather',(req,res)=>
{
    if(!req.query.address)
    return res.send({error:'You must provide a address term'})
    geo(req.query.address,(error,{latitude,longitude}={})=>
{
    if(error)
    return res.send({error})
    // console.log('error',error)
    // console.log('data',data)
    weather(latitude,longitude,(error,dataset)=>
{
    if(error)
    return res.send({error})
    // console.log('error',error)
    //console.log('location',location)
    res.send({
        forcast:dataset.temp,
        location:req.query.address
    })
    
}
)
    
})
    
})

app.get('/help/*',(req,res)=>
{
    res.render('404',{
        name:'shivam',
        title:'help page is not updated',
        errormessage:'the page not found'
    })
})
app.get('*',(req,res)=>
{
    res.render('404',{
        name:'shivam',
        title:'404 page',
        errormessage:'the page not found'
    })
})
app.listen(port,()=>
{
    console.log('port connected')
})
