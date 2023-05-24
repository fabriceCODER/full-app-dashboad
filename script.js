const modeSwitch = document.getElementById('dark-mode');
const body = document.body;

modeSwitch.addEventListener('change', function() {
  body.classList.toggle('dark-mode');
});
