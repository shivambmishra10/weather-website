const request=require('request')
const geo=(location,callback)=>
{
  const url1='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(location)+'.json?access_token=pk.eyJ1Ijoic2hpdmFtYm1pc2hyYTEwIiwiYSI6ImNrdWdpbGF5djA5bmwzMm15ejFnMDNpMmUifQ.Ztavn5sYGKCJylWeFtsf_A'
request({url:url1,json:true},(error,{body})=>
{
    if(error)
    callback("problem in weather services!",undefined)
    else if(body.features.length===0)
    callback('mention location',undefined)
    else{
    
    callback(undefined,{latitude:body.features[0].center[1],longitude:body.features[0].center[0],location:body.features[0].place_name})
    }
    
}
)
}
module.exports =geo