import deleteCell from "./deleteCell.mjs";

export default function CreateNode(lista){

    let ContendorCell = document.querySelector("#containerCell")
    let buttonDelete = document.createElement('button');
    let buttonEdit = document.createElement('button');

    buttonEdit.textContent = 'Editar';
    buttonEdit.addEventListener("click",e =>{
        e.preventDefault()
        deleteCell(cell2.id)
    })

    let cell2 = document.createElement('li');
    buttonDelete.textContent = 'Borrar' ;
    buttonDelete.addEventListener("click",e =>{
        e.preventDefault()
        deleteCell(cell2.id)
    })
            cell2.textContent = lista.nombre + ' ' + '$'+lista.precio + ' ' + lista.cantidad + ' ';
            cell2.id = lista.id;
            ContendorCell.appendChild(cell2)
            cell2.appendChild(buttonDelete)
            cell2.appendChild(buttonEdit)
            
}