export default function(target,factura) {
    factura.deleteItem(target.id)
    target.parentElement.remove();
}

