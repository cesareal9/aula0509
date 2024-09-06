const publicadora_controller = require("../controllers/Publicadora.js");
const genero_controller = require("../controllers/Genero.js");
const estudio_controller = require("../controllers/Estudio.js");
let criado_em = new Date();
let nextId = 1;

const model = (body, id = nextId++) => {
    if (
        body.nome != undefined &&
        body.nome != "" &&
        body.lancado_em != undefined &&
        body.lancado_em != "" &&
        publicadora_controller.show(body.publicadora_id) &&
        genero_controller.show(body.genero_id) &&
        estudio_controller.show(body.estudio_id)
    ) {
        return {
            id,
            nome: body.nome,
            lancado_em: body.lancado_em,
            criado_em: criado_em,
            atualizado_em: atualizado_em,
            publicadora_id: body.publicadora_id,
            genero_id: body.genero_id,
            estudio_id: body.estudio_id,
        };
    }
};
module.exports = model;