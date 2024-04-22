const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/')
        res.end("Welcome to our homepage")

    else if (req.url === '/about')
        res.end("We are the best company")

    else {
        res.end(
            '<h1>Oops</h1>' +
            '<p>We cant see package you are looking for</p>' +
            '<a href="/">back home</a>'
        )
    }
})

server.listen(5000)