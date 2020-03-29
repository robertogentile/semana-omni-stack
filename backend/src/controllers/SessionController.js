const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        console.log('SessionController.Create');
        const { id } = request.body;

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first(); /// << faz diferença pois quando é first nao traz como array!!

        if(ong == null || ong.name == null) {
            return response.status(400).json({ error: "No ONG found with this ID."});
        }

        return response.json(ong);

    }
}