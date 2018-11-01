function show(event) {
  document.querySelector('.content').classList.remove('all', 'accessories', 'music', 'tees');
  document.querySelector('.content').classList.add(event.target.getAttribute('item-type'));
}
