let contador = 0;
export default function(target,bill,cell) {
  contador += 1
  console.log(cell)
    bill.deleteCell(cell,bill.list)
    target.parentElement.remove();
    console.log("pase por aca estas veces: " + contador )

}

