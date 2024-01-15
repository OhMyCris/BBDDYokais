const Yokai = require('../models/yokai.model')

const getYokais = async(req, res) => {
    try {
        const allYokais = await Yokai.find();
        return res.status(200).json(allYokais)
    } catch (error) {
        return res.status(500).json(error);
    }
}

const postYokais = async(req, res) => {
    try {
        // console.log(req.body)
        const newYokai = new Yokai(req.body);
        // console.log(newYokai)
        const createdYokai = await newYokai.save() //save sirve para guardar un elemento en la BBDD
        return res.status(201).json(createdYokai)

    } catch (error) {
        return res.status(500).json(error)
    }
}

const putYokais = async(req, res) => {
    try {
        //recoge el parametro de la url que se va a atacar y modificar
            const {id} = req.params;
        //Le mandamos al modelo a validar lo que le pasamos
            const putYokais = new Yokai(req.body);
        //Actualizamos el _id que genera mongo automaticamente por id para poder trabajar mejor
            putYokais._id=id; 
        //Mandamos el id para que sepa cual actualizar
            const updatedYokai = await Yokai.findByIdAndUpdate(id, putYokais, {new:true});
        //Por si alguien escribe mal el id
            if (!updatedYokai) {
                return res.status(404).json({message:"no tenemos ese yokai con ese ID"});
            }
            return res.status(200).json(updatedYokai);

        } catch (error) {
            return res.status(500).json(error);
        }

}

const deleteYokais = async(req, res) => {
    try {
        const {id} = req.params;
        const deleteYokais = await Yokai.findByIdAndDelete(id);
        if (!deleteYokais) {
            return res.status(404).json({message:"no tenemos ese yokai con ese ID"});
        }
        return res.status(200).json(deleteYokais);
    } catch (error) {
        return res.status(500).json(error);
    }
}


module.exports = {
    getYokais, postYokais, putYokais, deleteYokais
}