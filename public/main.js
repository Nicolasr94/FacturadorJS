 import   Cells from "./Class/Cells.mjs";
 import   Bill from "./Class/Bill.mjs";
//  import formValues from "./controllers/formController.mjs";

// let Inputs = document.querySelectorAll('#formCell input')
// let ButtonSend = document.querySelector('#buttonSend');
let Form = document.querySelector("#formCell")
let ContendorCell = document.querySelector("#containerCell")
let H2 = document.querySelector('h2')
let bill = new Bill('ELpepe')
let cell;

Form.addEventListener("submit",e =>{
    e.preventDefault()
    let data = Object.fromEntries(new FormData(e.target))
    console.log(data)
    console.log('oli')
    if(data){
        cell = new Cells(data);
        bill.addCells(cell);
        console.log(bill);
        Observer();
    }
})

function Observer(){
            bill.list.map((e)=>{
            let cell = document.createTextNode(e.nombre + ' ' + e.precio + ' ' + e.cantidad)
            let cell2 = document.createElement('li').appendChild(cell)
            ContendorCell.insertAdjacentElement('beforebegin',`<li>${e.nombre + e.precio + e.cantidad }</li>`)
        }) 
}
// let factura = new Bill('Juan')
// let cell1 = new Cells('Sahumerio',150,5)
// let cell2 = new Cells('Bombita',200,5)
// factura.addCells(cell1)
// factura.addCells(cell2)
// console.log(factura)

// factura.setTotal()
// console.log(factura)






