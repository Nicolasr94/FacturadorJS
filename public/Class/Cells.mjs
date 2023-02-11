export default class Cells {
   
    id
    nombre
    precio
    cantidad
    subTotal
    
    constructor(objeto){
      this.id = 'a' + Math.random().toString(20).substring(2);
      this.nombre = objeto.name
      this.precio = Number(objeto.price)
      this.cantidad = Number(objeto.amount)
      this.subTotal = Number(objeto.price* objeto.amount)
  }
   getId(){
    return this.id
}
   getSubTotal(){
       return this.subTotal
   }

   getName(){
    return this.nombre
}
  getPrice(){
  return this.precio
}
  getAmount(){
    return this.cantidad
  }
   setCantidad(id,cantidad){
    if(id !== this.id){
      return console.error('No se pudo realizar la acción');
    }else{
      this.cantidad = cantidad;
    }
   }
 
   setName(id,nombre){
    if(id !== this.id){
      return console.error('No se pudo realizar la acción');
    }else{ 
    this.nombre = nombre;
    }
   }
   
   setPrecio(id,precio){
    if(id !== this.id){
      return console.error('No se pudo realizar la acción');
    }else{
    this.precio = precio;
    }
   }
 
 }