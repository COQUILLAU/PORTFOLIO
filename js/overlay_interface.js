const modalContainerInterface = document.querySelector(".modal-container_interface");
const modalTriggersInterface = document.querySelectorAll(".modal-trigger_interface");


modalTriggersInterface.forEach(trigger => trigger.addEventListener("click", toggleModal))

function toggleModal(){
  modalContainerInterface.classList.toggle("active")
}