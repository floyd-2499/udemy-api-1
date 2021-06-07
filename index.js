// alert(' test js,... hello hello test... 1 2 3.. hmm')

const req = new XMLHttpRequest();

req.onload = function () {
    console.log('All done with request')
    const data = JSON.parse(this.responseText);
    console.log(data.ticker.price);
}

req.onerror = function () {
    console.log('Error !!')
    console.log(this);
}

req.open('Get', 'https://api.cryptonator.com/api/ticker/btc-usd')
req.send();

// so when you request , if api has any error your promise gets rejected