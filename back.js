class Persona {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }

    getFullName() {
        console.log(this.nombre +" "+ this.apellido);
    }

    countMascotas () {
        console.log(this.mascotas.length);
    }

    addbookNames(nombre, autor) {
        this.libros.push({nombre: nombre, autor: autor})
        console.log(this.libros);
    }

    getBooksName () {
        let libros = this.libros
        let nombreLibro = libros.map((libro)=> libro.nombre);
        console.log(nombreLibro);
        return nombreLibro
        
    }
}

const nacho = new Persona("Ignacio" , "dieguez" ,[], ["cherry" , "ginger"])

console.log(nacho);
nacho.getFullName()
nacho.countMascotas
console.log(nacho.mascotas.length);
nacho.addbookNames("Rebelion en la granja", "George orwell")
nacho.addbookNames("jiji", "jaja")
console.log(nacho);
nacho.getBooksName()