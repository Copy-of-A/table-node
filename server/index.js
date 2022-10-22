const http = require('http')
const table_model = require('./model')

const headParams = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credential": true,
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": 'X-Requested-With,content-type'
}
const host = 'localhost'
const port = 8080

const return200 = (res, params, data) => {
    res.writeHead(200, params);
    res.end(JSON.stringify(data));
}

const return404 = (res, params) => {
    res.writeHead(404, params);
    res.end(JSON.stringify({ message: "Route not found" }));
}

const getFilterParam = (url) => url.split("?")[1]?.split("=")

const requestListener = async function (req, res) {
    const url = req.url;

    if (req.method === 'OPTIONS') {
        res.writeHead(200, headParams);
        res.end();
        return;
    }

    if (req.method === "GET") {
        if (url === '/api') {
            table_model.getAllRows()
                .then((data) => return200(res, headParams, data))
                .catch(() => return404(res, headParams))
        }
        else if (url.match(/\/api\/contains\?([a-z]+)=([a-z]+)/)) {
            const [column, value] = getFilterParam(url);

            table_model.getFilterRowsContains(column, value)
                .then((data) => return200(res, headParams, data))
                .catch(() => return404(res, headParams))
        }
        else if (url.match(/\/api\/equals\?([a-z]+)=([0-9a-z]+)/)) {
            const [column, value] = getFilterParam(url);

            table_model.getFilterRowsEquals(column, value)
                .then((data) => return200(res, headParams, data))
                .catch(() => return404(res, headParams))
        }
        else if (url.match(/\/api\/more\?([a-z]+)=([0-9]+)/)) {
            const [column, value] = getFilterParam(url);

            table_model.getFilterRowsMore(column, value)
                .then((data) => return200(res, headParams, data))
                .catch(() => return404(res, headParams))
        }
        else if (url.match(/\/api\/less\?([a-z]+)=([0-9]+)/)) {
            const [column, value] = getFilterParam(url);

            table_model.getFilterRowsLess(column, value)
                .then((data) => return200(res, headParams, data))
                .catch(() => return404(res, headParams))
        }
        else {
            return404(res, headParams)
        }
    }

}

const server = http.createServer(requestListener)

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`)
})

