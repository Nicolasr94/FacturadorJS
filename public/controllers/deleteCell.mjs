export default function deleteCell (id) {
    let containerCell = document.querySelector("#containerCell")
    let cell = containerCell.querySelector(`#${id}`)
    containerCell.removeChild(cell);
}