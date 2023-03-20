import ItemDeFactura from "../Class/ItemDeFactura.mjs"
export default function(target,factura,item){
    console.log('entro a button confirm')
    let inputs = target.parentElement.querySelectorAll('input')
    let btnEdit = target.parentElement.querySelector('.editBtn')
    btnEdit.innerHTML= 'Editar'
    btnEdit.dataset.btn='edit'
        console.log('entro aca?')
        item.setNombre(inputs[0].value)
        item.setPrecio(inputs[1].value)
        item.setCantidad(inputs[2].value)
    console.log(item)
    console.log(factura.getLista())


    inputs.forEach(element => {
        element.disabled = true
    });
}