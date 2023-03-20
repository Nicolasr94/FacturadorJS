import btnConfirm from "./btnConfirm.mjs"
import btnDelete from "./btnDelete.mjs"
import btnEdit from "./btnEdit.mjs"

export default function controllerEvents(target,factura,item){
  let  action = target.dataset.btn
  if(action == 'delete'){
    btnDelete(target,factura,item.id)
  }
  if(action == 'edit'){
    btnEdit(target,factura,item) 
  }
  if(action=='confirm'){
    btnConfirm(target,factura,item)
  }
    }
    

// let  action = target.dataset.btn
// switch(action){
//     case 'delete':
//         console.log('entro')
//         btnDelete(target,factura,item)
//         break;
//     case 'edit':
//         btnEdit(target,item)
//         break;
//     case 'confirm':
//             btnConfirm(target,item)
//         break;