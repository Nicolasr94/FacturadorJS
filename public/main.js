import   ItemDeFactura from "./Class/ItemDeFactura.mjs";
import   Factura from "./Class/Factura.mjs";
import insertCell from "./controllers/insertCell.mjs";
import btsEvents from  "./controllers/btsEvents.mjs";
let Form = document.querySelector("#formCell")
let $containerCell = document.getElementById("containerCell")
const factura = new Factura()
let item;

    Form.addEventListener("submit",(e)=>{
        e.preventDefault()
        let data = Object.fromEntries(new FormData(e.target))
        item = new ItemDeFactura(data)   
        factura.addItem(item)
        insertCell(item)
        })      

  
        $containerCell.addEventListener('click',function(e){
            let target = e.target
            if(target.tagName == "BUTTON"){
              let itemF = factura.getItem(target.id)
            btsEvents(target,factura,itemF)
            }
        })
    

