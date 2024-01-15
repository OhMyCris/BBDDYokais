const Videojuego = require('../models/videojuegos.model')

const getVideojuegos = async(req, res) => {
    try {
        const allVideojuegos = await Videojuego.find().populate('yokais', 'nombre tipo desc foto');
        return res.status(200).json(allVideojuegos)
    } catch (error) {
        return res.status(500).json(error);
    }
}

const postVideojuegos = async(req, res) => {
    try {
        // console.log(req.body)
        const newVideojuego = new Videojuego(req.body);
        // console.log(newYokai)
        const createdVideojuego = await newVideojuego.save() //save sirve para guardar un elemento en la BBDD
        return res.status(201).json(createdVideojuego)

    } catch (error) {
        return res.status(500).json(error)
    }
}

const putVideojuegos = async(req, res) => {
    try {
        //recoge el parametro de la url que se va a atacar y modificar
            const {id} = req.params;
        //Le mandamos al modelo a validar lo que le pasamos
            const putVideojuegos = new Videojuego(req.body);
        //Actualizamos el _id que genera mongo automaticamente por id para poder trabajar mejor
            putVideojuegos._id=id; 
        //Mandamos el id para que sepa cual actualizar
            const updatedVideojuego = await Videojuego.findByIdAndUpdate(id, putVideojuego, {new:true});
        //Por si alguien escribe mal el id
            if (!updatedVideojuego) {
                return res.status(404).json({message:"no tenemos ese videojuego con ese ID"});
            }
            return res.status(200).json(updatedVideojuego);

        } catch (error) {
            return res.status(500).json(error);
        }

}

const deleteVideojuegos = async(req, res) => {
    try {
        const {id} = req.params;
        const deleteVideojuegos = await Videojuego.findByIdAndDelete(id);
        if (!deleteVideojuegos) {
            return res.status(404).json({message:"no tenemos ese videojuego con ese ID"});
        }
        return res.status(200).json(deleteVideojuegos);
    } catch (error) {
        return res.status(500).json(error);
    }
}


module.exports = {
    getVideojuegos, postVideojuegos, putVideojuegos, deleteVideojuegos
}