const apiKey = '0M1OCUZTI229BTFV'
const alpha = require('alphavantage')({ key: apiKey })
const https = require('https')


function searchStock(stockName, callback) {
    let apiUrl = 'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=' + stockName + '&apikey=' + apiKey
    https.get(apiUrl, (res) => {
        res.on('data', (data) => {
            //console.log(String(data))

            //console.log(results);

            callback(data)
        })
    })
}
module.exports.searchStock = searchStock;
module.exports.alphavantage = alpha;