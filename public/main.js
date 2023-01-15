import   Cells from "./Class/Cells.mjs";
import   Bill from "./Class/Bill.mjs";
import createNode from "./controllers/createNode.mjs";

//  import formValues from "./controllers/formController.mjs";

// let Inputs = document.querySelectorAll('#formCell input')
// let ButtonSend = document.querySelector('#buttonSend');
let Form = document.querySelector("#formCell")

let bill = new Bill('ELpepe')
let billLista = [];
let cell;

Form.addEventListener("submit",e =>{
    e.preventDefault()
    let data = Object.fromEntries(new FormData(e.target))
    console.log(data)
    if(data){
        
        cell = new Cells(data);
        billLista.push(cell);
        console.log(bill); 
        createNode(data);
    }
})

// let factura = new Bill('Juan')
// let cell1 = new Cells('Sahumerio',150,5)
// let cell2 = new Cells('Bombita',200,5)
// factura.addCells(cell1)
// factura.addCells(cell2)
// console.log(factura)

// factura.setTotal()
// console.log(factura)






