/*var zoomContainer = document.querySelector('.zoom-container');
zoomContainer.addEventListener('mousemove', function(event) {
  var rect = zoomContainer.getBoundingClientRect();
  var x = event.clientX - rect.left;
  var y = event.clientY - rect.top;
  var offsetX = (x / zoomContainer.offsetWidth) * 100;
  var offsetY = (y / zoomContainer.offsetHeight) * 100;

  zoomContainer.style.setProperty('--zoom-offset-x', offsetX + '%');
  zoomContainer.style.setProperty('--zoom-offset-y', offsetY + '%');
});