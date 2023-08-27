const validarFiledTitle = (request, response, next) => {
    const { body } = request;

    if(body.title == undefined){
        return response.status(400).json( { message: "O titulo é obirgatório"});
    }

    if(body.title == ''){
       return response.status(400).json( { message: "O titulo esta vazio"});
    }

    next();
}

const validarFiledStatus = (request, response, next) => {
    const { body } = request;

    if(body.status == undefined){
        return response.status(400).json( { message: "O status é obirgatório"});
    }

    if(body.status == ''){
       return response.status(400).json( { message: "O status esta vazio"});
    }

    next();
}

module.exports = {
    validarFiledTitle,
    validarFiledStatus
}