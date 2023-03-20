import  ItemDeFactura  from "./ItemDeFactura.mjs"
let instance;
let fechaHoy = new Date()
 fechaHoy.toLocaleDateString('es-AR')

export default class Factura {
    #id
    fecha
    nombre
    lista = []
    total = 0
    instance;
   
    
      constructor(nombre = 'Cliente'){
        if (instance) {
          throw new Error("New instance cannot be created!!");
        }
        console.log('fui creado')
        instance = this;
          this.nombre = nombre
          this.fecha = fechaHoy.toLocaleDateString('es-AR')
        }

    getNombre (){
        return console.log(this.nombre) 
    }

    setNombre(nombre){
      this.nombre = nombre
    }
    editItem(id,item){
      this.lista.forEach(element => {
        if(element == id){
          element = item
        }
      })
      console.log(this.list);
    }
    addItem(item){
      if(item instanceof ItemDeFactura){
        this.lista.push(item)
        return;
      }else{
        return console.log("Tiene que ser un objeto creado de una clase valida");
      }
    }
    
    getLista(){

      return this.lista
    }
    getTotal(){
      let total=0;
      this.lista.map((item) => {
        total += item.getSubTotal() 
      })
      return total 
    }
    
    setTotal(){
      this.total = this.getTotal();
    }

    getItem(id){
      return this.lista.find(element =>element.id == id)
        }  
        
    setItem(object){
      this.list.map(element => {
        if(element.id == object.id){
          element = object
        }
      });

    }
    deleteItem(item){
      this.lista = this.lista.filter((element)=> element.id !== item)
      console.log(this.lista)
        }  
  
  }