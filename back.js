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

// const fs = require('fs')


// class Contenedor {
//     constructor(archivo) { 
//         this.archivo = archivo;
//             try { this.productos = fs.readFileSync(this.archivo, "utf-8");
//                 this.productos = JSON.parse(this.productos); 
//             } catch (error) { 
//                 this.productos = []; 
//             } }

//             async save(title, price, url){
//                     try {
//                             let newProduct = { title, price, url };
//                                 newProduct.id = this.productos.length + 1;
//                                     this.productos.push(newProduct);
//                                         await fs.promises.writeFile(
//                                                 this.archivo,
//                                                     JSON.stringify(this.productos, null, "\t")
//                                                         );
//                     } catch (error) {
//                             console.log(error);
//                         }}

//             async getById(id){
//                 try{
//                     let productos = await fs.promises.readFile(this.archivo, 'utf-8')
//                     productos = JSON.parse(productos)
//                     // console.log(productos);
//                     let producto = productos.find(prod => prod.id == id)
//                     console.log(producto.title);
//                     return producto.title
//                 }catch(err){
//                     console.log(`no se encuentra el id o hubo un error ${err}`);
//                 }
//             }

//             async getAll(){
//                 try{
//                     let productos = await fs.promises.readFile(this.archivo, 'utf-8')
//                     productos = JSON.parse(productos)
                    
//                     console.log(productos);
//                     return productos
//                 }catch (err){
//                     console.log('D:');
//                 }
//             }

//             async deleById(id) {
//                 try {
//                     let productos = await fs.promises.readFile(this.archivo, 'utf-8')
//                     productos = JSON.parse(productos)
//                     productos = productos.filter(prod => prod.id !== id)
    
//                     await fs.promises.writeFile(this.path, JSON.stringify(productos))
    
//                     console.log('producto elimina2', productos);
    
//                     return productos
//                 }catch(err){
//                     console.log(`el error es ${err}`);
//                 }
//             }

//             async deleAll() {
//                 try {
//                     await fs.promises.writeFile(this.archivo, '[]')
//                     console.log('elimina2');
//                 }catch(err){
//                     console.log(`D: ${err}`);
//                 }
//             }

// }

// productos = new Contenedor('back.json')

// // productos.save('birrita','250', 'img')
// // productos.save('cigarro', 140, 'img2' )
// // productos.getById(1)
// // productos.getAll()
// // productos.deleById(1)
// // productos.deleAll()



// const http = require('http')
// const puerto = 8080

// const server = http.createServer((req, res) => {
//     const tiempo = new Date()
//     const hora = tiempo.getHours()

//     if (hora >= 6 & hora <= 12){
//         res.end('buenos dias')
//     } else if (hora >= 12 & hora <= 18){
//         res.end('buenas tardes')
//     }else{
//         res.end('buenas noches')
//     }
// })

// server.listen(puerto, ()=>{
//     console.log(`servidor escuchando puerto: ${puerto}`);
// })


const express = require('express')

const app = express()
const puerto = 8080

app.get('/', (req, res)=>{
    res.send('holaa')
})

app.listen(puerto, ()=> {
    console.log(`el servidor se inicio en el puerto ${puerto}`);
})



