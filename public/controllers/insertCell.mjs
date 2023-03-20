

const $templateCell = document.querySelector(".templateCell").content,
 $containerCell = document.getElementById("containerCell"),
 $fragment = document.createDocumentFragment(),
 $cellName =$templateCell.querySelector('.cellName'),
 $cellPrice =$templateCell.querySelector('.cellPrice'),
 $cellAmount = $templateCell.querySelector('.cellAmount'),
 $cellButtonEdit = $templateCell.querySelector('.editBtn'),
 $cellButtonDelete = $templateCell.querySelector('.deleteBtn');



export default  function insertCell (cell) {
        $cellName.id = cell.getId()
        $cellName.value = cell.getNombre()
        
        $cellAmount.id = cell.id;
        $cellAmount.value = cell.getCantidad()
        
        $cellPrice.id = cell.id
        $cellPrice.value = cell.getPrecio()

        $cellButtonEdit.id = cell.getId()
        $cellButtonDelete.id = cell.getId() 
    
    let $clone = document.importNode($templateCell,true);
    $fragment.appendChild($clone);
    $containerCell.appendChild($fragment);
} 