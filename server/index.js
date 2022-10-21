const http = require('http')

const host = 'localhost'
const port = 8080

const table_model = require('./model')

const requestListener = async function (req, res) {
    const url = req.url;

    if (req.method === "GET") {
        if (url === '/api') {
            table_model.getAllRows()
                .then((data) => {
                    res.writeHead(200, { "Content-Type": "application/json" });
                    res.end(JSON.stringify(data));
                })
        }
        else if (url.match(/\/api\/contains\?([a-z]+)=([a-z]+)/)) {
            const [column, value] = url.split("?")[1].split("=");
            console.log("column = ", column, " ; value = ", value)

            table_model.getFilterRowsContains(column, value)
                .then((data) => {
                    res.writeHead(200, { "Content-Type": "application/json" });
                    res.end(JSON.stringify(data));
                })
        }
        else if (url.match(/\/api\/equals\?([a-z]+)=([0-9a-z]+)/)) {
            const [column, value] = url.split("?")[1].split("=");
            console.log("column = ", column, " ; value = ", value)

            table_model.getFilterRowsEquals(column, value)
                .then((data) => {
                    res.writeHead(200, { "Content-Type": "application/json" });
                    res.end(JSON.stringify(data));
                })
        }
        else if (url.match(/\/api\/more\?([a-z]+)=([0-9]+)/)) {
            const [column, value] = url.split("?")[1].split("=");
            console.log("column = ", column, " ; value = ", value)

            table_model.getFilterRowsMore(column, value)
                .then((data) => {
                    res.writeHead(200, { "Content-Type": "application/json" });
                    res.end(JSON.stringify(data));
                })
        }
        else if (url.match(/\/api\/less\?([a-z]+)=([0-9]+)/)) {
            const [column, value] = url.split("?")[1].split("=");
            console.log("column = ", column, " ; value = ", value)

            table_model.getFilterRowsLess(column, value)
                .then((data) => {
                    res.writeHead(200, { "Content-Type": "application/json" });
                    res.end(JSON.stringify(data));
                })
        }
        else {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Route not found" }));
        }
    }

}

const server = http.createServer(requestListener)

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`)
})

