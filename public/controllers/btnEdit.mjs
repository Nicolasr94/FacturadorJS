export default function(target){
    let inputs = target.parentElement.querySelectorAll('input')
    let btnEdit = target.parentElement.querySelector('.editBtn')
    btnEdit.innerHTML= 'Confirmar'
    btnEdit.dataset.btn='confirm'
 
    inputs.forEach(element => {
        element.disabled = false
    });
}