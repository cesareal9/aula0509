let nextId = 1;
let criado_em = new Date();
//let atualizado_em

const model = (body, id = nextId++) => {
;
    if (body.nome != undefined && body.nome != "") {
        atualizado_em = new Date();
        console.log(atualizado_em);

        return {
            id,
            nome: body.nome,
            criado_em: criado_em,
            atualizado_em: atualizado_em,
        };
    }
};

module.exports = model;