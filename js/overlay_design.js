const modalContainerDesign = document.querySelector(".modal-container_design");
const modalTriggersDesign = document.querySelectorAll(".modal-trigger_design");


modalTriggersDesign.forEach(trigger => trigger.addEventListener("click", toggleModal))

function toggleModal(){
  modalContainerDesign.classList.toggle("active")
}