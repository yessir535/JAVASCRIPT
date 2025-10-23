const przycisk = document.getElementById('przycisk');


przycisk.addEventListener('mouseenter', () => {
  przycisk.textContent = 'Czerwony';
});


przycisk.addEventListener('mouseleave', () => {
  przycisk.textContent = 'Zmień kolor';
});
