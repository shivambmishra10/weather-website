const request=require('request')
const weather=(latitude,longitude,callback)=>
{
 const url='http://api.weatherstack.com/current?access_key=3aece02bcd707204bf1506c01457531f&query='+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)

request({url:url,json:true},(error,{body})=>
{
   if(error)
   callback("Some problem in weather services!",undefined)
   else if(body.error)
   console.log("Location not able to find!",undefined)
   else{
   const temp=body.current.temperature
   const weat=body.current.weather_descriptions[0]
   callback(undefined,{temp:temp,weather:weat})
}

}

)
}
module.exports=weather