// Load name from localStorage on page load
window.onload = () => {
  const savedName = localStorage.getItem('username');
  if (savedName) {
    document.getElementById('usernameDisplay').textContent = savedName;
  }
};

// Form submission: save name to localStorage
document.getElementById('nameForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const nameInput = document.getElementById('username');
  const name = nameInput.value.trim();
  if (name) {
    localStorage.setItem('username', name);
    document.getElementById('usernameDisplay').textContent = name;
    nameInput.value = '';
  }
});

// Click box to animate
const box = document.getElementById('box');
box.addEventListener('click', () => {
  // Add animation class
  box.classList.add('animate');

  // Remove animation class after animation ends so it can be reused
  box.addEventListener('animationend', () => {
    box.classList.remove('animate');
  }, { once: true });
});
