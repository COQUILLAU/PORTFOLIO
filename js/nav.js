var presentationLink = document.getElementById("presentation-link");
var competencesLink = document.getElementById("competences-link");
var formationLink = document.getElementById("formation-link");
var projetLink = document.getElementById("projet-link");

presentationLink.addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo(0, 640);
});

competencesLink.addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo(0, 1150);
});

formationLink.addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo(0, 2200);
});

projetLink.addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo(0, 3300);
});