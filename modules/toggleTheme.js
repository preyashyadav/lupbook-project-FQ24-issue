document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlTag = document.documentElement; // Get the <html> element

    // Check the initial theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Set the initial theme
    if (savedTheme) {
        htmlTag.setAttribute('data-bs-theme', savedTheme);
        themeToggle.checked = savedTheme === 'dark'; // Set toggle based on saved theme
    } else if (userPrefersDark) {
        htmlTag.setAttribute('data-bs-theme', 'dark');
        themeToggle.checked = true; // Set toggle for dark mode
    } else {
        htmlTag.setAttribute('data-bs-theme', 'light');
        themeToggle.checked = false; // Set toggle for light mode
    }

    // Event listener for theme toggle
    themeToggle.addEventListener('change', function () {
        const currentTheme = htmlTag.getAttribute('data-bs-theme');

        // Toggle between light and dark themes
        if (currentTheme === 'light') {
            htmlTag.setAttribute('data-bs-theme', 'dark');
            localStorage.setItem('theme', 'dark'); // Save preference in localStorage
        } else {
            htmlTag.setAttribute('data-bs-theme', 'light');
            localStorage.setItem('theme', 'light'); // Save preference in localStorage
        }

        // Update body classes based on the selected theme
        updateBodyClasses();
    });

    // Function to update body classes
    function updateBodyClasses() {
        const currentTheme = htmlTag.getAttribute('data-bs-theme');

        if (currentTheme === 'dark') {
            htmlTag.classList.add('bg-dark');
            htmlTag.classList.remove('bg-white', 'bg-light-subtle');
            htmlTag.classList.add('text-white'); // Optional: to make text white in dark mode
        } else {
            htmlTag.classList.add('bg-light-subtle');
            htmlTag.classList.add('bg-white');
            htmlTag.classList.remove('bg-dark');
            htmlTag.classList.remove('text-white'); // Optional: revert text color to default
        }
    }

    // Initial call to set body classes based on the current theme
    updateBodyClasses();
});
