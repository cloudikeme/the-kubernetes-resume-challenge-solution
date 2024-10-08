document.addEventListener('DOMContentLoaded', (event) => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check if dark mode is initially enabled
    if (body.classList.contains('dark-mode')) {
        darkModeToggle.checked = true;
    }

    darkModeToggle.addEventListener('change', () => {
        if (darkModeToggle.checked) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    });
});