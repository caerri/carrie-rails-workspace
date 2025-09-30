// homepage.js - ready for light/dark mode toggle

document.addEventListener('DOMContentLoaded', function () {
  // Create toggle button
  const toggleBtn = document.getElementById('toggle-mode-btn');
  if (!toggleBtn) return;

  // Toggle mode function
  function toggleMode() {
    if (document.documentElement.classList.contains('dark-mode')) {
      document.documentElement.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    }
  }

  // Button click listener
  toggleBtn.addEventListener('click', toggleMode);

  // Load saved theme
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark-mode');
  }
});

// Optional: style the button
const style = document.createElement('style');
style.textContent = `
  .toggle-mode-btn {
    position: fixed;
    top: 1rem;
    right: 1rem;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: bold;
    background: #BF3192;
    color: #fff;
    border: none;
    border-radius: 2rem;
    cursor: pointer;
    box-shadow: 0 2px 8px #C73C9B33;
    z-index: 1000;
    transition: background 0.2s;
  }
  .toggle-mode-btn:hover {
    background: #C73C9B;
  }
  .dark-mode body {
    background: #3A142E !important;
    color: #fff !important;
  }
`;
document.head.appendChild(style);
