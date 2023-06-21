const modalContainerScrum = document.querySelector(".modal-container_scrum");
const modalTriggersScrum = document.querySelectorAll(".modal-trigger_scrum");


modalTriggersScrum.forEach(trigger => trigger.addEventListener("click", toggleModal))

function toggleModal(){
  modalContainerScrum.classList.toggle("active")
}