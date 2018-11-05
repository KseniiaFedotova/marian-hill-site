function clickByAlbum(event) {
  let element = event.target;
  while (element) {
    if (element.classList.contains('album')) break;
    element = element.parentElement;
  }
  if (!element) return;
  if (element.classList.contains('spotify')) {
    element.classList.toggle('spotify', false);
  } else {
    Array.from(document.querySelectorAll('.album'))
        .map(e => e.classList.toggle('spotify', false));
    element.classList.toggle('spotify', true);
  }
}
