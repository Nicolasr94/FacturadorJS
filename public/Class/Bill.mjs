import  Cells  from "./Cells.mjs"
let instance;
let fechaHoy = new Date()
 fechaHoy.toLocaleDateString('es-AR')

export default class Bill {
    #id
    fecha
    name
    list = []
    total = 0
    instance;
   
    
      constructor(name){
        if (instance) {
          throw new Error("New instance cannot be created!!");
        }
        console.log('fui creado')
        instance = this;
          this.name = name
          this.fecha = fechaHoy.toLocaleDateString('es-AR')
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
  deleteCell(cell,list){
  console.log(this.list.filter((e)=> e.id !== cell))

  
  }  

    getTotal(){
      let total=0;
      this.list.map((item) => {
       total += item.getSubTotal() 
      })
      return total 
    }
  
    setTotal(){
      this.total = this.getTotal();
    }
  
  }