const modalContainerEspace = document.querySelector(".modal-container_espaceb");
const modalTriggersEspace = document.querySelectorAll(".modal-trigger_espaceb");


modalTriggersEspace.forEach(trigger => trigger.addEventListener("click", toggleModal))

function toggleModal(){
  modalContainerEspace.classList.toggle("active")
}