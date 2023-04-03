// Screen Content Change 
document.querySelector('a[href="#about"]').addEventListener('click', function() {
  document.querySelector('#about').style.display = 'block';
  document.querySelector('#contact').style.display = 'none';
});

document.querySelector('a[href="#contact"]').addEventListener('click', function() {
  document.querySelector('#about').style.display = 'none';
  document.querySelector('#contact').style.display = 'block';
});
