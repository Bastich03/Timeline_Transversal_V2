window.timeline = new TL.Timeline('timeline-embed', 'data.json', {
  language: 'es'
});

// Espera a que la línea de tiempo termine de cargarse antes de saltar
window.timeline.on('loaded', function() {
  // Si quieres que al cargar la página se salte automáticamente a la diapositiva 3
  window.timeline.goTo(3);
});

