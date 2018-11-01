function playNext(event) {
  const videos = Array.from(document.querySelectorAll('.content video'));
  const current = videos.indexOf(event.target);
  const next = (current + 1) % videos.length;
  videos[current].classList.toggle('hidden');
  videos[next].classList.toggle('hidden');
  videos[next].play();
}
