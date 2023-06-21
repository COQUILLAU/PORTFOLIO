const modalContainerTournoi = document.querySelector(".modal-container_tournoi");
const modalTriggersTournoi = document.querySelectorAll(".modal-trigger_tournoi");


modalTriggersTournoi.forEach(trigger => trigger.addEventListener("click", toggleModal))

function toggleModal(){
  modalContainerTournoi.classList.toggle("active")
}