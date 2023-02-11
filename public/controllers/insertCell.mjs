

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
        $cellName.placeholder = cell.getName()
        
        $cellAmount.id = cell.id;
        $cellAmount.placeholder = cell.getAmount()
        
        $cellPrice.id = cell.id
        $cellPrice.placeholder = cell.getPrice()

        $cellButtonEdit.id = cell.getId()
        $cellButtonDelete.id = cell.getId() 
    
    let $clone = document.importNode($templateCell,true);
    $fragment.appendChild($clone);
    $containerCell.appendChild($fragment);
} 