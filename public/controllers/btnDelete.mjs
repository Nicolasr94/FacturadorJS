let contador = 0;
export default function(target,bill,cell) {
  contador += 1
  console.log("Lo de abajo es Cell")
  console.log(cell)
    bill.deleteCell(cell)
    target.parentElement.remove();
    console.log("pase por aca estas veces: " + contador )

}

