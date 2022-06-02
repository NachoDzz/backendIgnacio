//EJERCICIO 1

// class Persona {
//     constructor(nombre, apellido, libros, mascotas){
//         this.nombre = nombre
//         this.apellido = apellido
//         this.libros = libros
//         this.mascotas = mascotas
//     }

//     getFullName() {
//         console.log(this.nombre +" "+ this.apellido);
//     }

//     countMascotas () {
//         console.log(this.mascotas.length);
//     }

//     addbookNames(nombre, autor) {
//         this.libros.push({nombre: nombre, autor: autor})
//         console.log(this.libros);
//     }

//     getBooksName () {
//         let libros = this.libros
//         let nombreLibro = libros.map((libro)=> libro.nombre);
//         console.log(nombreLibro);
//         return nombreLibro
        
//     }
// }

// const nacho = new Persona("Ignacio" , "dieguez" ,[], ["cherry" , "ginger"])

// console.log(nacho);
// nacho.getFullName()
// nacho.countMascotas
// console.log(nacho.mascotas.length);
// nacho.addbookNames("Rebelion en la granja", "George orwell")
// nacho.addbookNames("jiji", "jaja")
// console.log(nacho);
// nacho.getBooksName()


// EJERCICIO 2 //

const fs = require('fs')



class Contenedor {
    constructor(path){
        this.path = path
    }

    async save(title, precio, img){
        
        try{
            let id 
            let productos = await fs.promises.readFile(this.path, 'utf-8' )
            productos = JSON.parse(productos)
            if (productos.length == 0){
                id = 1
            } else {
                id = productos[productos.length - 1].id + 1
            }

            productos.push({id: id, title: title, precio: precio, img:img})

            await fs.promises.writeFile(this.path, JSON.stringify(productos))

            console.log('producto guardado', id);
            
            return id
        }catch(err) {
            console.log(`error al guardar produto   error:${err}`);
        }
    } 
}

const productos = new Contenedor('contenedor.json')

productos.save('sds', 20, 'img')