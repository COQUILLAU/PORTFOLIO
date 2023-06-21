var presentationLink = document.getElementById("presentation-link");
var competencesLink = document.getElementById("competences-link");
var formationLink = document.getElementById("formation-link");
var projetLink = document.getElementById("projet-link");

presentationLink.addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo(0, 580);
});

competencesLink.addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo(0, 1300);
});

formationLink.addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo(0, 3100);
});

projetLink.addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo(0, 4400);
});