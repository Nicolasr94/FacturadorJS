export default class ItemDeFactura {
   
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

   getNombre(){
    return this.nombre
}
  getPrecio(){
  return this.precio
}
  getCantidad(){
    return this.cantidad
  }
   setCantidad(cantidad){
      this.cantidad = cantidad;
   }
 
   setNombre(nombre){
    this.nombre = nombre;
   }
   
   setPrecio(precio){
    this.precio = precio;
    
   }
 
 }