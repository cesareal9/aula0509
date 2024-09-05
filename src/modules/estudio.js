const e

let nextId = 1;

const model = (body, id = nextId++) => {

    if (
        body.dataAluguel != undefined &&
        body.dataAluguel != "" &&
        body.dataDevolucao != undefined &&
        body.dataDevolucao != "" &&
        estudio_controller.show(body.livro_id) &&
        estudante_controller.show(body.estudante_id)
    ) {
        return {
            id,
            dataAluguel: body.dataAluguel,
            dataDevolucao: body.dataDevolucao,
            livro_id: body.livro_id,
            estudante_id: body.estudante_id,
        };
    }
};

module.exports = model;