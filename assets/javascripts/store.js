function show(event) {
  const selectedType = event.target.getAttribute('item-type');
  document.querySelector('.content').classList.toggle('all', false);
  document.querySelector('.content').classList.toggle('accessories', false);
  document.querySelector('.content').classList.toggle('music', false);
  document.querySelector('.content').classList.toggle('tees', false);
  document.querySelector('.content').classList.toggle(selectedType, true);
}
