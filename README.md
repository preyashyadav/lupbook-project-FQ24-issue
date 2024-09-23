# Lubook Project FQ24 - Screening Test
The main aim of this repo is to fix the light-mode/dark-mode issue for FQ24  Screening Test

## Toggle Switch Functionality:

A first implementation could be a simple toggler. We start in light mode by default, using data-bs-theme="light" on the HTML tag, and we can switch to "dark" from a button in the right sidebar.

## Demonstration⬇️

![Lupbook-Fq24-issue-gif](https://github.com/user-attachments/assets/727d0f96-47cd-4d1c-84fa-27c520515335)


## Code

### HTML Code:
As it was instructed that the toggle switch should be in the right sidebar, hence the toggle switch element was added in the Unordered list 
```<ul>``` as a list item ```<li>``` The input type ```checkbox``` is used to handle the state change of the theme effectively. 
```
 <!-- Dark Mode Toggle Switch - Preyash Yadav -->
      <input type="checkbox" id="theme-toggle">
```

### CSS Code:
To ensure a good user experience, the toggle button was designed to have light color theme in the light mode and a dark color theme when switched to dark mode.
```
<!-- CSS for Toggle Switch - Preyash Yadav -->
<style>
input {
    -webkit-appearance: none;
    position: relative;
    width: 60px;
    height: 30px;
    border-radius: 25px;
    background-color: yellow; /* Light mode default color */
    transition: background 0.3s ease;
    outline: none;
    cursor: pointer;
    border: none;
}
/* Circle inside the switch */
input::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 25%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    height: 20px;
    width: 20px;
    background-color: white;
    transition: left 0.3s ease;
}
/* Dark mode active */
input:checked {
    background-color: #001f3f; /* Night blue for dark mode */
}
/* Move the circle when toggled */
input:checked::after {
    left: 75%;
}
</style> 
```

### JavaScript Code - For theme change on toggling switch
```
<!-- Java Script for Dark Mode Toggle Switch - Preyash Yadav -->
<script>
   document.getElementById('theme-toggle').addEventListener('click', function() {
       const htmlTag = document.documentElement; // Get the <html> element
       const currentTheme = htmlTag.getAttribute('data-bs-theme');

       // Toggle between light and dark themes
       if (currentTheme === 'light') {
           htmlTag.setAttribute('data-bs-theme', 'dark');
       } else {
           htmlTag.setAttribute('data-bs-theme', 'light');
       }
   });
</script>
```
### JavaScript Code - For theme change on based on device preference/ default system choice

```

<script>
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (prefersDark) {
    htmlTag.setAttribute('data-bs-theme', 'dark');
}
</script>
```
Note: The above code is commented out in the project, so that the toggle switch feature can be viewed properly.

