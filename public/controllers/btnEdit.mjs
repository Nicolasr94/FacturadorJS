export default function(target,factura,item){
    // El boton tiene de nombre EDIT
    let inputs = target.parentElement.querySelectorAll('input')
    let btnEdit = target.parentElement.querySelector('.editBtn')
    console.log('entro a button edit')
    btnEdit.innerHTML= 'Confirmar'
    btnEdit.dataset.btn='confirm'
// El boton tiene de nombre Confirms
 
    inputs.forEach(element => {
        element.disabled = false
    });
}