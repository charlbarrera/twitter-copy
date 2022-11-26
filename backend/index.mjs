import http from 'node:http';

const requestListener = (req, res) => {

}

const server = http.createServer();


const port = 8080;
const host = 'localhost';
server.listen(port, host, () => {
   console.log(`listening at port ${port} host: ${host}`)
})

