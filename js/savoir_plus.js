function toggleTextDisplay(link) {
    var texteElement = link.parentNode.parentNode.querySelector('.more');
    if (texteElement.style.display === '' || texteElement.style.display === 'none') {
        texteElement.style.display = 'flex';
        link.innerText = 'Savoir Moins';
    } else {
        texteElement.style.display = 'none';
        link.innerText = 'Savoir Plus';
    }
}