const request = require('request')

const forecast = (latitude, longitude, callback) =>  {
    const url = 'https://api.darksky.net/forecast/4e7c6e973d569fb85f87d29230c75b20/' + longitude + ',' + latitude
    request({ url, json: true}, (error, { body }) =>  {
        if (error) {
            callback('Unable to connect to location services!')}
        else if (body.error){
            callback('Unable to find location', undefined)
        }
        else
        callback(undefined, body.daily.data[1].summary + 'It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability*100 +'% chance of rain.')
        
    
}   ) 
}
    
module.exports = forecast