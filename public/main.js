import   Cells from "./Class/Cells.mjs";
import   Bill from "./Class/Bill.mjs";
import insertCell from "./controllers/insertCell.mjs";
import btsEvents from  "./controllers/btsEvents.mjs";
let Form = document.querySelector("#formCell")
let $containerCell = document.getElementById("containerCell")
const bill = new Bill('ELpepe')
let cell;

Form.addEventListener("submit",function(es){
        console.log(bill.getTotal())
        es.preventDefault()
        let $total = document.getElementById("total")
        let data = Object.fromEntries(new FormData(es.target))
        cell = new Cells(data)   
        bill.addCells(cell)
        insertCell(cell)
        bill.setTotal()
        let total = bill.getTotal()
        $total.innerHTML = total
        })      
        if($containerCell){  
        $containerCell.addEventListener('click',function(e){
            let target = e.target
            if(target.tagName == "BUTTON"){
            btsEvents(target,bill,target.id)
            }
        })
    }

