class Usuarios {

    constructor() {
        this.personas = [];
    }

    //CREAMOS UN NUEVO OBJETO
    agregarPersona(id, nombre, sala) {

        let persona = { id, nombre, sala };

        //AGREGAR A LA PERSONA AL ARREGLO
        this.personas.push(persona);

        return this.personas;

    }

    //CREAMOS UNA FUNCION QUE NOS PERMITA OBTENER POR EL ID LA INFO DE UNA PERSONA EN ESPECIFICO

    getPersona(id) {
        let persona = this.personas.filter(persona => persona.id === id)[0];

        return persona;
    }

    //METODO PARA OBTENER A TODAS LAS PERSONAS

    getPersonas() {
        return this.personas;
    }

    //METODO PARA OBTENER A LAS PERSONAS POR SALA

    getPersonasPorSala(sala) {
        let personasEnSala = this.personas.filter(persona => persona.sala === sala);
        return personasEnSala;
    }

    //METODO PARA BORRAR A LA PERSONA DEL CHAT SI SE DESCONECTA O ETC

    borrarPersona(id) {

        let personaBorrada = this.getPersona(id);

        this.personas = this.personas.filter(persona => persona.id != id);
        return personaBorrada;


    }


}


module.exports = {
    Usuarios
}