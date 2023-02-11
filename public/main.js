import   Cells from "./Class/Cells.mjs";
import   Bill from "./Class/Bill.mjs";
import insertCell from "./controllers/insertCell.mjs";
import btsEvents from  "./controllers/btsEvents.mjs";
let Form = document.querySelector("#formCell")
let $containerCell = document.getElementById("containerCell")
const bill = new Bill('ELpepe')
let cell;

    Form.addEventListener("submit",function(es){
        es.preventDefault()

        let data = Object.fromEntries(new FormData(es.target))
        cell = new Cells(data)   
        bill.list.push(cell)
        insertCell(cell)

        })      
        if($containerCell){  
        $containerCell.addEventListener('click',function(e){
            let target = e.target
            console.log(e.target.parentElement.parentElement.parentElement)
            if(target.tagName == "BUTTON"){
            btsEvents(target,bill,e.target.parentElement['cellName'].id)
            }
        })
    }

