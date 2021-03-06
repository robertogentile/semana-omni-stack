//const express = require('express');
 const connection = require('../database/connection');
 const crypto = require('crypto');

 module.exports = {
    async index (request, response)  {
        console.log('OngController.Index');
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    }, 

    async create(request, response) {
        console.log('OngController.Create');
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
    
        // aguardar o retorno
        await connection('ongs').insert({
            id, 
            name, 
            email,
            whatsapp,
            city,
            uf
        });
    
        return response.json({ id });
    }
 };