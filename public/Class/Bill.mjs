import  Cells  from "./Cells.mjs"
let instance;
let fechaHoy = new Date()
 fechaHoy.toLocaleDateString('es-AR')

export default class Bill {
    #id
    date
    name
    list = [];
    total = 0;
    instance;
   
    
      constructor(name){
        if (instance) {
          throw new Error("New instance cannot be created!!");
        }
        console.log('fui creado')
        instance = this;
          this.name = name
          this.date = fechaHoy.toLocaleDateString('es-AR')
        }

    getName (){
        return this.name
    }
    
    addCells(cell){
      if(cell instanceof Cells){
        this.list.push(cell)
        return;
      }else{
        return console.log("Tiene que ser un objeto creado de una clase valida");
      }
    }

  setList(lista){
    this.list = lista
  }
  deleteCell(idCell){
  this.list = this.list.filter((e)=> e.id !== idCell)
  }
  
  setTotal(){
    let acumulador = 0
    console.log(this.list)
    if(this.list.length !== 0){
     this.total =  this.list.map((item) => {
      this.total += item.subTotal 
     });
    }
     console.log(this.total)

    }  

    getTotal(){
      return this.total 
    }
  
  
  }