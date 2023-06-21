const modalContainerTp = document.querySelector(".modal-container_tp");
const modalTriggersTp = document.querySelectorAll(".modal-trigger_tp");


modalTriggersTp.forEach(trigger => trigger.addEventListener("click", toggleModal))

function toggleModal(){
  modalContainerTp.classList.toggle("active")
}