const connection = require('../database/connection');

module.exports = {
    async index (request, response)  {
        // paginacao
        const { page = 1 } = request.query;
        
        console.log('IncidentController.Index');

        const [count] = await connection('incidents').count() // << formato para trazer o primeiro registro usando colchetes

        const incidents = await connection('incidents').select('*')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.city', 'ongs.uf']);

            console.log(count);
        response.header('X-Total-Count', count['counpmnt(*)']);
    
        return response.json(incidents);
    }, 

    async create(request, response){
        console.log('IncidentController.Create');
        const {title, description, value} = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title, 
            description,
            value,
            ong_id
        });

        return response.json({ id });
    },

    async delete(request, response){
        console.log('IncidentController.Delete');

        const {id} = request.params; // para pegar o id na url
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first(); /// << faz diferença pois quando é first nao traz como array!!

        if(incident == null || incident.ong_id != ong_id){
            return response.status(401).json({ error: 'Operation not permitted.'});
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }
}