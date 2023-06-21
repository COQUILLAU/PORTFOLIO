var presentation = document.getElementById("presentation");
var competences = document.getElementById("competences");
var formation = document.getElementById("formation");
var projet = document.getElementById("projet");

var zoomLevel = 1;
var targetZoomLevel = 1;

var zoomLevel2 = 1;
var targetZoomLevel2 = 1;

var zoomLevel3 = 1;
var targetZoomLevel3 = 1;

var zoomLevel4 = 1;
var targetZoomLevel4 = 1;

function animateZoom() {
    zoomLevel += (targetZoomLevel - zoomLevel) * 0.1;
    presentation.style.transform = "scale(" + zoomLevel + ")";
    requestAnimationFrame(animateZoom);
}

function animateZoom2() {
    zoomLevel2 += (targetZoomLevel2 - zoomLevel2) * 0.1;
    competences.style.transform = "scale(" + zoomLevel2 + ")";
    requestAnimationFrame(animateZoom2);
}

function animateZoom3() {
    zoomLevel3 += (targetZoomLevel3 - zoomLevel3) * 0.1;
    formation.style.transform = "scale(" + zoomLevel3 + ")";
    requestAnimationFrame(animateZoom3);
}

function animateZoom4() {
    zoomLevel4 += (targetZoomLevel4 - zoomLevel4) * 0.1;
    projet.style.transform = "scale(" + zoomLevel4 + ")";
    requestAnimationFrame(animateZoom4);
}

window.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;
    if (scrollPosition > 150) {
        targetZoomLevel = 1.4;
    } else {
        targetZoomLevel = 1;
    }
    console.log(scrollPosition); // afficher la position de défilement dans la console
});

window.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;
    if (scrollPosition > 1050) {
        targetZoomLevel2 = 1.4;
    } else {
        targetZoomLevel2 = 1;
    }
});

window.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;
    if (scrollPosition > 2900) {
        targetZoomLevel3 = 1.4;
    } else {
        targetZoomLevel3 = 1;
    }
});

window.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;
    if (scrollPosition > 4150) {
        targetZoomLevel4 = 1.4;
    } else {
        targetZoomLevel4 = 1;
    }
});

animateZoom();
animateZoom2();
animateZoom3();
animateZoom4();