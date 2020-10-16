//importar dependencias
const express = require('express');
const path = require('path');
const pages = require('./pages');
//iniciando express   
const server = express();
server
//utilizar body do req
.use(express.urlencoded({ extended: true}))
//usando arquivos do public
.use(express.static('public'))
//configurando template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

//criar rota
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage) 
//ligando o servidor
server.listen(5500)