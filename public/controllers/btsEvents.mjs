import btnConfirm from "./btnConfirm.mjs"
import btnDelete from "./btnDelete.mjs"
import btnEdit from "./btnEdit.mjs"

export default function controllerEvents(target,bill,cell){

  let  action = target.dataset.btn
 switch(action){
    case 'delete':
         console.log('entro')
        btnDelete(target,bill,cell)
        bill.setTotal()
        break;
    case 'edit':
        btnEdit(target,cell)
        break;
        case 'confirm':
          btnConfirm(target,cell)
          bill.setTotal()
        break;
 }

    }
    

  //  let  action = target.dataset.btn
  // if(action == 'delete'){
  //   btnDelete(target,bill,cell)
  // }
  // if()