const connection = require('../database/connection');

module.exports = {

    /**
     * Busca os incidents de uma ong
     * 
     * @param {*} request 
     * @param {*} response 
     */
    async index(request, response) {
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*');
        
        return response.json(incidents);
    }
}