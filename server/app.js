const fs = require('fs')

class Contenedor {
    constructor(archivo) { 
        this.archivo = archivo;
            try { this.productos = fs.readFileSync(this.archivo, "utf-8");
                this.productos = JSON.parse(this.productos); 
            } catch (error) { 
                this.productos = []; 
            } }

            async save(title, price, url){
                    try {
                            let newProduct = { title, price, url };
                                newProduct.id = this.productos.length + 1;
                                    this.productos.push(newProduct);
                                        await fs.promises.writeFile(
                                                this.archivo,
                                                    JSON.stringify(this.productos, null, "\t")
                                                        );
                    } catch (error) {
                            console.log(error);
                        }}

            async getById(id){
                try{
                    let productos = await fs.promises.readFile(this.archivo, 'utf-8')
                    productos = JSON.parse(productos)
                    // console.log(productos);
                    let producto = productos.find(prod => prod.id == id)
                    console.log(producto.title);
                    return producto.title
                }catch(err){
                    console.log(`no se encuentra el id o hubo un error ${err}`);
                }
            }

            async getAll(){
                try{
                    let productos = await fs.promises.readFile(this.archivo, 'utf-8')
                    productos = JSON.parse(productos)
                    
                    console.log(productos);
                    return productos
                }catch (err){
                    console.log('D:');
                }
            }

            async deleById(id) {
                try {
                    let productos = await fs.promises.readFile(this.archivo, 'utf-8')
                    productos = JSON.parse(productos)
                    productos = productos.filter(prod => prod.id !== id)
    
                    await fs.promises.writeFile(this.path, JSON.stringify(productos))
    
                    console.log('producto elimina2', productos);
    
                    return productos
                }catch(err){
                    console.log(`el error es ${err}`);
                }
            }

            async deleAll() {
                try {
                    await fs.promises.writeFile(this.archivo, '[]')
                    console.log('elimina2');
                }catch(err){
                    console.log(`D: ${err}`);
                }
            }

}

productos = new Contenedor('productos.json')

// productos.save('birrita','250', 'img')
// productos.save('cigarro', 140, 'img2' )
// productos.save('cigarro caja 20', 220, 'img2' )
// productos.getById(1)
// productos.getAll()
// productos.deleById(1)
// productos.deleAll()

module.exports = products