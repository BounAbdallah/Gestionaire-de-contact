





/*modal*/
let modal = document.getElementById("contactModal")
let modalButton =document.getElementById("addContactModalButton")
let close = document.querySelector("close")



modalButton.onclick = function () {
  modal.style.display = 'block'
}

close.onclick = function () {
  modal.style.display = 'none'
}
