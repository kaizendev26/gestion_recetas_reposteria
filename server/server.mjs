// const http = require('http');
import * as http from 'http';
import { bodyParser } from './bodyParser.mjs'
import {consultarInsumos} from './dbconnection.js'

const CORS_HEADERS = {
    "Access-Control-Allow-Origin":"*", // REQUIRED CORS HEADER
    "Access-Control-Allow-Methods":"GET, POST, DELETE, PUT, PATCH", // REQUIRED CORS HEADER
    "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept" // REQUIRED CORS HEADER
}

const requestClient = (res,head,write)=>{

    const { status, type } = head;

    res.writeHead(status,CORS_HEADERS);
    if(status === 200)
        res.write(JSON.stringify(write));
    if(status == 400)
        res.write(write);

    res.end()
}

const obtenerInsumos = async(req, res)=>{
    try {
        // console.log(req)
        await bodyParser(req)
        consultarInsumos(req,(response)=>{
            requestClient(res,{status:200,type:"application/json"},response)
        })
    } catch (error) {
        console.log(error)
        requestClient(res,{status:400,type:"text/plain"},error)
    }

}

let server = http.createServer(function (req, res) {   

    const {url,method} = req;

    switch(method){
        case 'POST':
            if(url === '/insumos'){
                obtenerInsumos(req, res)
            }
            break;
        case "OPTIONS":
            res.writeHead(200,CORS_HEADERS);
            res.end();
		break;
        default:
            requestClient(res,{status:400,type:"text/plain"},"404 Not Founded")
    }



}); 

server.listen(5000);

console.log('Node.js web server at port 5000 is running..')