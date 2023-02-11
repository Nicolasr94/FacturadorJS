
export default function(target,cell){
    let inputs = target.parentElement.querySelectorAll('input')
    let btnEdit = target.parentElement.querySelector('.editBtn')
    btnEdit.innerHTML= 'Editar'
    btnEdit.dataset.btn='edit'
    btnEdit.addEventListener('click',(e)=>{
    cell.setName(cell.id,inputs[0].value)
    cell.setPrecio(cell.id,inputs[1].value)
    cell.setCantidad(cell.id,inputs[2].value)})
   
    inputs.forEach(element => {
        element.disabled = true
    });
}